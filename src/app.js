import "./styles.css";
import { ui, locales, localeMeta } from "./data/ui.js";
import {
  products,
  categories,
  tiers,
  brands,
  features,
  reviews,
  getProduct,
  getBrand,
  getCategory,
  getFeature,
  getTier,
} from "./data/catalog.js";

const LANG_KEY = "aurelion-lang";
const CART_KEY = "aurelion-cart";
const FX = {
  ru: { currency: "RUB", rate: 95, locale: "ru-RU", round: 100 },
  en: { currency: "USD", rate: 1, locale: "en-US", round: 1 },
  zh: { currency: "CNY", rate: 7.25, locale: "zh-CN", round: 10 },
};

const PRICE_PRESETS = {
  p1: { min: null, max: 1500 },
  p2: { min: 800, max: 2500 },
  p3: { min: 2500, max: 8000 },
  p4: { min: 5000, max: null },
};

const emptyFilters = () => ({
  category: [],
  tier: [],
  brand: [],
  feature: [],
  stock: false,
  min: null,
  max: null,
  sort: "featured",
  q: "",
});

const state = {
  lang: "ru",
  cart: [],
  filters: emptyFilters(),
  toast: null,
  menuOpen: false,
  filtersOpen: false,
  contactSent: false,
  orderId: "",
  pdpQty: 1,
};

function loc(obj, lang = state.lang) {
  if (!obj) return "";
  return obj[lang] ?? obj.en ?? "";
}

function u(path) {
  return path.split(".").reduce((acc, key) => acc?.[key], ui[state.lang]) ?? path;
}

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function plural(n, one, few, many) {
  if (state.lang === "zh") return many;
  if (state.lang === "en") return n === 1 ? one : few;
  const m10 = n % 10;
  const m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
}

function toLocal(usd) {
  const fx = FX[state.lang];
  return Math.round((usd * fx.rate) / fx.round) * fx.round;
}

function fromLocal(amount) {
  const fx = FX[state.lang];
  if (amount === null || amount === "" || Number.isNaN(Number(amount))) return null;
  return Number(amount) / fx.rate;
}

function formatPrice(usd) {
  const fx = FX[state.lang];
  return new Intl.NumberFormat(fx.locale, {
    style: "currency",
    currency: fx.currency,
    maximumFractionDigits: 0,
  }).format(toLocal(usd));
}

function cartCount() {
  return state.cart.reduce((sum, line) => sum + line.qty, 0);
}

function cartTotal() {
  return state.cart.reduce((sum, line) => {
    const product = getProduct(line.id);
    return sum + (product ? product.priceUsd * line.qty : 0);
  }, 0);
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
}

function loadState() {
  const storedLang = localStorage.getItem(LANG_KEY);
  if (locales.includes(storedLang)) state.lang = storedLang;
  try {
    const storedCart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    if (Array.isArray(storedCart)) state.cart = storedCart;
  } catch {
    state.cart = [];
  }
}

function setLang(lang) {
  if (!locales.includes(lang)) return;
  state.lang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = localeMeta[lang].html;
  document.title = `${u("brandLatin")} · ${u("tagline")}`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", u("footer.blurb"));
  render();
}

function parseHash() {
  const raw = location.hash.replace(/^#/, "") || "/";
  const [pathPart, queryPart = ""] = raw.split("?");
  const path = pathPart.startsWith("/") ? pathPart : `/${pathPart}`;
  const params = new URLSearchParams(queryPart);
  const list = (key) => (params.get(key) ? params.get(key).split(",").filter(Boolean) : []);
  const num = (key) => {
    const value = params.get(key);
    return value === null || value === "" ? null : Number(value);
  };
  return {
    path,
    filters: {
      category: list("category"),
      tier: list("tier"),
      brand: list("brand"),
      feature: list("feature"),
      stock: params.get("stock") === "1",
      min: num("min"),
      max: num("max"),
      sort: params.get("sort") || "featured",
      q: params.get("q") || "",
    },
    productId: path.startsWith("/product/") ? path.slice("/product/".length) : "",
    orderId: path.startsWith("/order/") ? path.slice("/order/".length) : "",
  };
}

function serializeFilters(filters) {
  const params = new URLSearchParams();
  const setList = (key, values) => {
    if (values.length) params.set(key, values.join(","));
  };
  setList("category", filters.category);
  setList("tier", filters.tier);
  setList("brand", filters.brand);
  setList("feature", filters.feature);
  if (filters.stock) params.set("stock", "1");
  if (filters.min != null) params.set("min", String(Math.round(filters.min)));
  if (filters.max != null) params.set("max", String(Math.round(filters.max)));
  if (filters.sort && filters.sort !== "featured") params.set("sort", filters.sort);
  if (filters.q) params.set("q", filters.q);
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}

function go(path, filters, replace = false) {
  const hash = `#${path}${filters ? serializeFilters(filters) : ""}`;
  if (replace) {
    history.replaceState(null, "", hash);
    render();
    return;
  }
  location.hash = hash;
}

function haystack(product) {
  const brand = getBrand(product.brand);
  return [
    product.id,
    product.sku,
    product.brand,
    ...Object.values(product.name),
    ...Object.values(product.short),
    ...(brand ? Object.values(brand.name) : []),
  ]
    .join(" ")
    .toLowerCase();
}

function applyFilters(list, filters) {
  const query = filters.q.trim().toLowerCase();
  let next = list.filter((product) => {
    if (filters.category.length && !filters.category.includes(product.category)) return false;
    if (filters.tier.length && !filters.tier.includes(product.tier)) return false;
    if (filters.brand.length && !filters.brand.includes(product.brand)) return false;
    if (filters.feature.length && !filters.feature.some((id) => product.features.includes(id))) return false;
    if (filters.stock && product.stock <= 0) return false;
    if (filters.min != null && product.priceUsd < filters.min) return false;
    if (filters.max != null && product.priceUsd > filters.max) return false;
    if (query && !haystack(product).includes(query)) return false;
    return true;
  });

  const collator = new Intl.Collator(localeMeta[state.lang].html);
  switch (filters.sort) {
    case "priceAsc":
      next.sort((a, b) => a.priceUsd - b.priceUsd);
      break;
    case "priceDesc":
      next.sort((a, b) => b.priceUsd - a.priceUsd);
      break;
    case "new":
      next.sort((a, b) => b.year - a.year);
      break;
    case "name":
      next.sort((a, b) => collator.compare(loc(a.name), loc(b.name)));
      break;
    default:
      next.sort((a, b) => Number(b.featured) - Number(a.featured) || b.year - a.year);
  }
  return next;
}

function addToCart(id, qty = 1) {
  const product = getProduct(id);
  if (!product || product.stock <= 0) return;
  const existing = state.cart.find((line) => line.id === id);
  const nextQty = Math.min(product.stock, (existing?.qty || 0) + qty);
  if (existing) existing.qty = nextQty;
  else state.cart.push({ id, qty: nextQty });
  saveCart();
  state.toast = { text: u("cart.added"), href: "#/cart" };
  render();
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => {
    state.toast = null;
    render();
  }, 4200);
}

function setQty(id, qty) {
  const product = getProduct(id);
  const line = state.cart.find((item) => item.id === id);
  if (!line || !product) return;
  const next = Math.max(1, Math.min(product.stock, qty));
  line.qty = next;
  saveCart();
  render();
}

function removeFromCart(id) {
  state.cart = state.cart.filter((line) => line.id !== id);
  saveCart();
  render();
}

function logoSvg() {
  return `<svg viewBox="0 0 64 64" aria-hidden="true">
    <rect width="64" height="64" rx="10" fill="#171410"/>
    <path d="M18 48 L32 14 L46 48" fill="none" stroke="#c4a574" stroke-width="3.2" stroke-linejoin="round"/>
    <path d="M24.5 36.5 H39.5" stroke="#c4a574" stroke-width="2.4"/>
  </svg>`;
}

function header(route) {
  const count = cartCount();
  const house = state.lang === "zh" ? u("brand") : u("house");
  return `
    <a class="skip" href="#content">${esc(u("skip"))}</a>
    <header class="site-header">
      <div class="header-inner">
        <a class="logo" href="#/" data-nav>
          ${logoSvg()}
          <span class="logo-mark">
            <strong>${esc(u("brandLatin"))}</strong>
            <span>${esc(house)}</span>
          </span>
        </a>
        <nav class="nav">
          <a href="#/catalog" data-nav class="${route.path === "/catalog" ? "is-active" : ""}">${esc(u("nav.catalog"))}</a>
          <a href="#/catalog?tier=professional" data-nav>${esc(u("nav.studio"))}</a>
          <a href="#/catalog?tier=hifi,highend" data-nav>${esc(u("nav.living"))}</a>
          <a href="#/about" data-nav class="${route.path === "/about" ? "is-active" : ""}">${esc(u("nav.about"))}</a>
          <a href="#/contact" data-nav class="${route.path === "/contact" ? "is-active" : ""}">${esc(u("nav.contact"))}</a>
        </nav>
        <div class="header-tools">
          <form class="search" data-search>
            <input name="q" type="search" value="${esc(state.filters.q)}" placeholder="${esc(u("search.placeholder"))}" />
            <button type="submit">${esc(u("search.submit"))}</button>
          </form>
          <div class="lang" role="group" aria-label="${esc(u("lang"))}">
            ${locales
              .map(
                (code) =>
                  `<button type="button" data-lang="${code}" class="${state.lang === code ? "is-active" : ""}">${esc(
                    localeMeta[code].label
                  )}</button>`
              )
              .join("")}
          </div>
          <a class="icon-btn" href="#/cart" data-nav aria-label="${esc(u("cart.title"))}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 7h15l-1.4 9H8L6 7z"/><path d="M6 7 5 4H2"/><circle cx="9" cy="20" r="1.2"/><circle cx="18" cy="20" r="1.2"/></svg>
            ${count ? `<span class="badge">${count}</span>` : ""}
          </a>
          <button class="icon-btn menu-btn" type="button" data-menu aria-label="menu">☰</button>
        </div>
      </div>
    </header>
    <div class="mobile-nav ${state.menuOpen ? "is-open" : ""}">
      <a href="#/catalog" data-nav>${esc(u("nav.catalog"))}</a>
      <a href="#/catalog?tier=professional" data-nav>${esc(u("nav.studio"))}</a>
      <a href="#/catalog?tier=hifi,highend" data-nav>${esc(u("nav.living"))}</a>
      <a href="#/about" data-nav>${esc(u("nav.about"))}</a>
      <a href="#/contact" data-nav>${esc(u("nav.contact"))}</a>
      <form class="search" data-search>
        <input name="q" type="search" placeholder="${esc(u("search.placeholder"))}" />
        <button type="submit">${esc(u("search.submit"))}</button>
      </form>
    </div>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="wrap footer-grid">
        <div>
          <div class="logo">${logoSvg()}<span class="logo-mark"><strong>${esc(u("brandLatin"))}</strong><span>${esc(u("brand"))}</span></span></div>
          <p>${esc(u("footer.blurb"))}</p>
        </div>
        <div>
          <h3 class="serif">${esc(u("footer.rooms"))}</h3>
          <p>${esc(u("contact.moscow"))}<br>${esc(u("contact.london"))}<br>${esc(u("contact.shanghai"))}</p>
        </div>
        <div>
          <h3 class="serif">${esc(u("contact.hours"))}</h3>
          <p>${esc(u("contact.hoursVal"))}</p>
          <a class="btn btn-ghost" href="#/contact" data-nav>${esc(u("nav.listen"))}</a>
        </div>
      </div>
      <div class="wrap"><p>${esc(u("footer.legal"))}</p></div>
    </footer>
  `;
}

function productCard(product) {
  const brand = getBrand(product.brand);
  const stockLabel =
    product.stock <= 0 ? u("catalog.outOfStock") : product.stock <= 3 ? u("catalog.lowStock") : u("catalog.inStock");
  return `
    <a class="product-card" href="#/product/${product.id}" data-nav>
      <div class="thumb"><img src="${product.image}" alt="${esc(loc(product.name))}" width="800" height="600" /></div>
      <div class="body">
        <div class="meta"><span>${esc(loc(brand.name))}</span><span class="pill ${product.stock <= 0 ? "warn" : ""}">${esc(stockLabel)}</span></div>
        <h3>${esc(loc(product.name))}</h3>
        <p class="muted">${esc(loc(product.short))}</p>
        <div class="price">${esc(formatPrice(product.priceUsd))} <span class="muted">${esc(product.unit === "pair" ? u("product.pair") : u("product.unit"))}</span></div>
      </div>
    </a>
  `;
}

function home() {
  const featured = products.filter((p) => p.featured);
  return `
    <section class="hero">
      <img src="/images/hero/listening-room.png" alt="${esc(u("hero.title"))}" width="1920" height="1080" />
      <div class="hero-copy wrap">
        <div class="kicker">${esc(u("hero.kicker"))}</div>
        <h1>${esc(u("hero.title"))}</h1>
        <p class="lead">${esc(u("hero.lead"))}</p>
        <div class="row">
          <a class="btn btn-gold" href="#/catalog" data-nav>${esc(u("hero.ctaCatalog"))}</a>
          <a class="btn btn-ghost" href="#/contact" data-nav>${esc(u("hero.ctaListen"))}</a>
        </div>
        <div class="stats">
          <div><strong>${esc(u("hero.stat1v"))}</strong><span>${esc(u("hero.stat1"))}</span></div>
          <div><strong>${esc(u("hero.stat2v"))}</strong><span>${esc(u("hero.stat2"))}</span></div>
          <div><strong>${esc(u("hero.stat3v"))}</strong><span>${esc(u("hero.stat3"))}</span></div>
        </div>
      </div>
    </section>
    <section class="section wrap">
      <div class="section-head">
        <div>
          <div class="kicker">${esc(u("home.roomsKicker"))}</div>
          <h2>${esc(u("home.roomsTitle"))}</h2>
        </div>
      </div>
      <div class="split">
        <article class="panel">
          <img src="/images/about/studio.png" alt="${esc(u("home.studioTitle"))}" width="1600" height="900" />
          <div class="panel-copy">
            <h3>${esc(u("home.studioTitle"))}</h3>
            <p>${esc(u("home.studioText"))}</p>
            <a class="btn btn-ghost" href="#/catalog?tier=professional" data-nav>${esc(u("nav.studio"))}</a>
          </div>
        </article>
        <article class="panel">
          <img src="/images/hero/listening-room.png" alt="${esc(u("home.livingTitle"))}" width="1600" height="900" />
          <div class="panel-copy">
            <h3>${esc(u("home.livingTitle"))}</h3>
            <p>${esc(u("home.livingText"))}</p>
            <a class="btn btn-ghost" href="#/catalog?tier=hifi,highend" data-nav>${esc(u("nav.living"))}</a>
          </div>
        </article>
      </div>
    </section>
    <section class="section wrap">
      <div class="section-head">
        <div>
          <div class="kicker">${esc(u("home.catKicker"))}</div>
          <h2>${esc(u("home.catTitle"))}</h2>
        </div>
      </div>
      <div class="grid-4">
        ${categories
          .map(
            (cat) => `
          <a class="cat-card" href="#/catalog?category=${cat.id}" data-nav>
            <div class="thumb"><img src="${cat.image}" alt="${esc(loc(cat.name))}" width="800" height="600" /></div>
            <div class="body">
              <h3>${esc(loc(cat.name))}</h3>
              <p class="muted">${esc(loc(cat.blurb))}</p>
              <span class="price">${esc(u("home.visit"))}</span>
            </div>
          </a>`
          )
          .join("")}
      </div>
    </section>
    <section class="section wrap">
      <div class="section-head">
        <div>
          <h2>${esc(u("home.featured"))}</h2>
          <p>${esc(u("home.featuredLead"))}</p>
        </div>
        <a class="btn btn-ghost" href="#/catalog" data-nav>${esc(u("home.allCatalog"))}</a>
      </div>
      <div class="product-grid">${featured.map(productCard).join("")}</div>
    </section>
    <section class="section wrap">
      <div class="section-head">
        <div>
          <div class="kicker">${esc(u("home.whyKicker"))}</div>
          <h2>${esc(u("home.whyTitle"))}</h2>
        </div>
      </div>
      <div class="grid-3">
        <article class="why"><h3>${esc(u("home.why1t"))}</h3><p>${esc(u("home.why1"))}</p></article>
        <article class="why"><h3>${esc(u("home.why2t"))}</h3><p>${esc(u("home.why2"))}</p></article>
        <article class="why"><h3>${esc(u("home.why3t"))}</h3><p>${esc(u("home.why3"))}</p></article>
      </div>
    </section>
    <section class="section wrap">
      <div class="section-head"><h2>${esc(u("home.voices"))}</h2></div>
      <div class="grid-3">
        ${reviews
          .slice(0, 3)
          .map(
            (review) => `
          <article class="voice">
            <img src="${review.avatar}" alt="${esc(loc(review.name))}" width="160" height="160" />
            <div>
              <blockquote>${esc(loc(review.quote))}</blockquote>
              <strong>${esc(loc(review.name))}</strong>
              <div class="muted">${esc(loc(review.role))}</div>
            </div>
          </article>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function checkbox(name, id, label, checked) {
  return `<label class="check"><input type="checkbox" data-filter="${name}" value="${id}" ${checked ? "checked" : ""} /><span>${esc(label)}</span></label>`;
}

function activeChips(filters) {
  const chips = [];
  const push = (group, id, label) => {
    chips.push(
      `<span class="chip">${esc(label)} <button type="button" data-remove-filter="${group}" data-id="${id}" aria-label="×">×</button></span>`
    );
  };
  filters.category.forEach((id) => push("category", id, loc(getCategory(id)?.name)));
  filters.tier.forEach((id) => push("tier", id, loc(getTier(id)?.name)));
  filters.brand.forEach((id) => push("brand", id, loc(getBrand(id)?.name)));
  filters.feature.forEach((id) => push("feature", id, loc(getFeature(id)?.name)));
  if (filters.stock) push("stock", "1", u("filters.stockOnly"));
  if (filters.min != null || filters.max != null) {
    const from = filters.min != null ? formatPrice(filters.min) : "—";
    const to = filters.max != null ? formatPrice(filters.max) : "—";
    chips.push(
      `<span class="chip">${esc(from)} – ${esc(to)} <button type="button" data-remove-filter="price" data-id="price">×</button></span>`
    );
  }
  if (filters.q) {
    chips.push(
      `<span class="chip">“${esc(filters.q)}” <button type="button" data-remove-filter="q" data-id="q">×</button></span>`
    );
  }
  return chips.join("");
}

function catalog(filters) {
  const list = applyFilters(products, filters);
  const minLocal = filters.min != null ? toLocal(filters.min) : "";
  const maxLocal = filters.max != null ? toLocal(filters.max) : "";
  const word = plural(list.length, u("catalog.model1"), u("catalog.model2"), u("catalog.model5"));
  return `
    <section class="section wrap">
      <div class="section-head">
        <div>
          <div class="kicker">${esc(u("catalog.kicker"))}</div>
          <h1>${esc(filters.q ? u("search.results") : u("catalog.title"))}</h1>
          <p>${esc(u("catalog.lead"))}</p>
        </div>
        <button class="btn btn-ghost filter-toggle" type="button" data-open-filters>${esc(u("catalog.openFilters"))}</button>
      </div>
      <div class="catalog-layout">
        <aside class="filters ${state.filtersOpen ? "is-open" : ""}">
          <div class="row" style="justify-content:space-between;align-items:center">
            <h3 class="serif" style="margin:0">${esc(u("catalog.filters"))}</h3>
            <button class="btn filter-toggle" type="button" data-close-filters>${esc(u("catalog.closeFilters"))}</button>
          </div>
          <div class="filter-group">
            <h4>${esc(u("filters.category"))}</h4>
            ${categories.map((item) => checkbox("category", item.id, loc(item.name), filters.category.includes(item.id))).join("")}
          </div>
          <div class="filter-group">
            <h4>${esc(u("filters.tier"))}</h4>
            ${tiers.map((item) => checkbox("tier", item.id, loc(item.name), filters.tier.includes(item.id))).join("")}
          </div>
          <div class="filter-group">
            <h4>${esc(u("filters.brand"))}</h4>
            ${brands.map((item) => checkbox("brand", item.id, loc(item.name), filters.brand.includes(item.id))).join("")}
          </div>
          <div class="filter-group">
            <h4>${esc(u("filters.tech"))}</h4>
            ${features.map((item) => checkbox("feature", item.id, loc(item.name), filters.feature.includes(item.id))).join("")}
          </div>
          <div class="filter-group">
            <h4>${esc(u("filters.price"))}</h4>
            <form class="price-row" data-price>
              <input name="min" type="number" min="0" placeholder="${esc(u("filters.priceFrom"))}" value="${minLocal}" />
              <input name="max" type="number" min="0" placeholder="${esc(u("filters.priceTo"))}" value="${maxLocal}" />
              <button class="btn btn-gold" type="submit" style="grid-column:1/-1">${esc(u("filters.applyPrice"))}</button>
            </form>
            <div class="presets">
              ${["p1", "p2", "p3", "p4"]
                .map((id) => {
                  const preset = PRICE_PRESETS[id];
                  const active = filters.min === preset.min && filters.max === preset.max;
                  return `<button type="button" class="preset ${active ? "is-active" : ""}" data-preset="${id}">${esc(u("filters." + id))}</button>`;
                })
                .join("")}
            </div>
          </div>
          <div class="filter-group">
            <h4>${esc(u("filters.stock"))}</h4>
            <label class="check"><input type="checkbox" data-stock ${filters.stock ? "checked" : ""} /><span>${esc(u("filters.stockOnly"))}</span></label>
          </div>
          <button class="btn btn-ghost" type="button" data-reset-filters style="margin-top:12px;width:100%">${esc(u("catalog.reset"))}</button>
        </aside>
        <div>
          <div class="toolbar">
            <div>${esc(u("catalog.found"))} <strong>${list.length}</strong> ${esc(word)}</div>
            <label>${esc(u("catalog.sort"))}
              <select class="select" data-sort>
                <option value="featured" ${filters.sort === "featured" ? "selected" : ""}>${esc(u("catalog.sortFeatured"))}</option>
                <option value="priceAsc" ${filters.sort === "priceAsc" ? "selected" : ""}>${esc(u("catalog.sortPriceAsc"))}</option>
                <option value="priceDesc" ${filters.sort === "priceDesc" ? "selected" : ""}>${esc(u("catalog.sortPriceDesc"))}</option>
                <option value="new" ${filters.sort === "new" ? "selected" : ""}>${esc(u("catalog.sortNew"))}</option>
                <option value="name" ${filters.sort === "name" ? "selected" : ""}>${esc(u("catalog.sortName"))}</option>
              </select>
            </label>
          </div>
          <div class="chips">${activeChips(filters)}</div>
          ${
            list.length
              ? `<div class="product-grid">${list.map(productCard).join("")}</div>`
              : `<div class="empty"><p>${esc(u("catalog.empty"))}</p><button class="btn btn-gold" type="button" data-reset-filters>${esc(u("catalog.reset"))}</button></div>`
          }
        </div>
      </div>
    </section>
    <div class="drawer-backdrop ${state.filtersOpen ? "is-open" : ""}" data-close-filters></div>
  `;
}

function productPage(id) {
  const product = getProduct(id);
  if (!product) return `<section class="section wrap"><div class="empty"><p>404</p></div></section>`;
  const brand = getBrand(product.brand);
  const related = products.filter((item) => item.id !== id && (item.brand === product.brand || item.category === product.category)).slice(0, 3);
  const canBuy = product.stock > 0;
  return `
    <section class="section wrap">
      <a href="#/catalog" data-nav class="muted">${esc(u("product.back"))}</a>
      <div class="pdp" style="margin-top:18px">
        <div class="pdp-image">
          <img src="${product.image}" alt="${esc(loc(product.name))}" width="1200" height="900" />
        </div>
        <div>
          <div class="meta"><span>${esc(loc(brand.name))}</span><span>${esc(loc(getTier(product.tier).name))}</span></div>
          <h1>${esc(loc(product.name))}</h1>
          <p class="lead muted">${esc(loc(product.short))}</p>
          <p class="price" style="font-size:1.6rem">${esc(formatPrice(product.priceUsd))} <span class="muted">${esc(product.unit === "pair" ? u("product.pair") : u("product.unit"))}</span></p>
          <p>${esc(canBuy ? `${u("product.inStock")} · ${product.stock}` : u("product.preorder"))}</p>
          <p class="muted">${esc(u("product.sku"))}: ${esc(product.sku)}</p>
          <div class="row" style="margin:18px 0">
            <div class="qty">
              <button type="button" data-pdp-qty="-1">−</button>
              <strong data-pdp-count>${state.pdpQty}</strong>
              <button type="button" data-pdp-qty="1">+</button>
            </div>
            <button class="btn btn-gold" type="button" data-add="${product.id}" ${canBuy ? "" : "disabled"}>${esc(u("product.add"))}</button>
            <a class="btn btn-ghost" href="#/contact" data-nav>${esc(u("product.listen"))}</a>
          </div>
          <h3>${esc(u("product.about"))}</h3>
          <p>${esc(loc(product.description))}</p>
          <h3>${esc(u("product.notes"))}</h3>
          <p>${esc(loc(product.notes))}</p>
          <h3>${esc(u("product.specs"))}</h3>
          <table class="specs">
            ${product.specs
              .map((row) => `<tr><th>${esc(loc(row.label))}</th><td>${esc(loc(row.value))}</td></tr>`)
              .join("")}
          </table>
        </div>
      </div>
      <div class="section-head" style="margin-top:56px"><h2>${esc(u("product.related"))}</h2></div>
      <div class="product-grid">${related.map(productCard).join("")}</div>
    </section>
  `;
}

function cartPage() {
  if (!state.cart.length) {
    return `<section class="section wrap"><h1>${esc(u("cart.title"))}</h1><div class="empty"><p>${esc(u("cart.empty"))}</p><a class="btn btn-gold" href="#/catalog" data-nav>${esc(u("cart.emptyCta"))}</a></div></section>`;
  }
  return `
    <section class="section wrap">
      <h1>${esc(u("cart.title"))}</h1>
      <div class="split" style="margin-top:24px">
        <div class="cart-list">
          ${state.cart
            .map((line) => {
              const product = getProduct(line.id);
              if (!product) return "";
              return `
                <article class="cart-item">
                  <img src="${product.image}" alt="${esc(loc(product.name))}" width="240" height="180" />
                  <div>
                    <a href="#/product/${product.id}" data-nav><strong>${esc(loc(product.name))}</strong></a>
                    <div class="muted">${esc(formatPrice(product.priceUsd))}</div>
                    <div class="qty" style="margin-top:10px">
                      <span>${esc(u("cart.qty"))}</span>
                      <button type="button" data-qty="${product.id}" data-delta="-1">−</button>
                      <strong>${line.qty}</strong>
                      <button type="button" data-qty="${product.id}" data-delta="1">+</button>
                    </div>
                  </div>
                  <div>
                    <div class="price">${esc(formatPrice(product.priceUsd * line.qty))}</div>
                    <button class="btn" type="button" data-remove="${product.id}">${esc(u("cart.remove"))}</button>
                  </div>
                </article>`;
            })
            .join("")}
        </div>
        <aside class="summary">
          <h3>${esc(u("cart.total"))}</h3>
          <p class="price" style="font-size:1.8rem">${esc(formatPrice(cartTotal()))}</p>
          <a class="btn btn-gold" href="#/checkout" data-nav style="width:100%;margin:12px 0">${esc(u("cart.checkout"))}</a>
          <a class="btn btn-ghost" href="#/catalog" data-nav style="width:100%">${esc(u("cart.continue"))}</a>
        </aside>
      </div>
    </section>
  `;
}

function checkoutPage() {
  return `
    <section class="section wrap">
      <h1>${esc(u("checkout.title"))}</h1>
      <p class="muted">${esc(u("checkout.lead"))}</p>
      <form class="form" data-checkout style="max-width:560px;margin-top:24px">
        <div class="field"><label>${esc(u("checkout.name"))}</label><input name="name" required /></div>
        <div class="field"><label>${esc(u("checkout.email"))}</label><input name="email" type="email" required /></div>
        <div class="field"><label>${esc(u("checkout.phone"))}</label><input name="phone" required /></div>
        <div class="field"><label>${esc(u("checkout.city"))}</label><input name="city" required /></div>
        <div class="field">
          <label>${esc(u("checkout.method"))}</label>
          <select name="method">
            <option value="pickup">${esc(u("checkout.pickup"))}</option>
            <option value="courier">${esc(u("checkout.courier"))}</option>
          </select>
        </div>
        <div class="field"><label>${esc(u("checkout.notes"))}</label><textarea name="notes" rows="4" placeholder="${esc(u("checkout.notesPh"))}"></textarea></div>
        <p class="price">${esc(u("cart.total"))}: ${esc(formatPrice(cartTotal()))}</p>
        <p class="error" data-checkout-error hidden>${esc(u("checkout.error"))}</p>
        <button class="btn btn-gold" type="submit">${esc(u("checkout.submit"))}</button>
      </form>
    </section>
  `;
}

function orderPage(id) {
  return `
    <section class="section wrap">
      <div class="empty">
        <h1>${esc(u("checkout.successTitle"))}</h1>
        <p>${esc(u("checkout.successLead"))} <strong>${esc(id)}</strong></p>
        <a class="btn btn-gold" href="#/" data-nav>${esc(u("checkout.home"))}</a>
      </div>
    </section>
  `;
}

function aboutPage() {
  return `
    <section class="hero" style="min-height:52vh">
      <img src="/images/about/atelier.png" alt="${esc(u("about.craftTitle"))}" width="1920" height="1080" />
      <div class="hero-copy wrap">
        <div class="kicker">${esc(u("about.kicker"))}</div>
        <h1>${esc(u("about.title"))}</h1>
        <p class="lead">${esc(u("about.lead"))}</p>
      </div>
    </section>
    <section class="section wrap">
      <div class="split">
        <div>
          <h2>${esc(u("about.craftTitle"))}</h2>
          <p>${esc(u("about.craft"))}</p>
        </div>
        <div class="panel" style="min-height:280px">
          <img src="/images/about/studio.png" alt="${esc(u("about.roomsTitle"))}" width="1600" height="900" />
        </div>
      </div>
      <div class="section-head" style="margin-top:48px"><h2>${esc(u("about.roomsTitle"))}</h2></div>
      <div class="grid-3">
        <article class="room"><h3>${esc(u("about.r1t"))}</h3><p>${esc(u("about.r1"))}</p></article>
        <article class="room"><h3>${esc(u("about.r2t"))}</h3><p>${esc(u("about.r2"))}</p></article>
        <article class="room"><h3>${esc(u("about.r3t"))}</h3><p>${esc(u("about.r3"))}</p></article>
      </div>
    </section>
  `;
}

function contactPage() {
  return `
    <section class="section wrap">
      <div class="kicker">${esc(u("contact.kicker"))}</div>
      <h1>${esc(u("contact.title"))}</h1>
      <p class="muted">${esc(u("contact.lead"))}</p>
      <div class="split" style="margin-top:28px">
        <form class="form" data-contact>
          <div class="field"><label>${esc(u("contact.name"))}</label><input name="name" required /></div>
          <div class="field"><label>${esc(u("contact.email"))}</label><input name="email" type="email" required /></div>
          <div class="field">
            <label>${esc(u("contact.topic"))}</label>
            <select name="topic">
              <option>${esc(u("contact.topicListen"))}</option>
              <option>${esc(u("contact.topicStudio"))}</option>
              <option>${esc(u("contact.topicOrder"))}</option>
            </select>
          </div>
          <div class="field"><label>${esc(u("contact.message"))}</label><textarea name="message" rows="5" required></textarea></div>
          <button class="btn btn-gold" type="submit">${esc(u("contact.send"))}</button>
          ${state.contactSent ? `<p>${esc(u("contact.sent"))}</p>` : ""}
        </form>
        <aside class="summary">
          <h3>${esc(u("footer.rooms"))}</h3>
          <p>${esc(u("contact.moscow"))}<br>${esc(u("contact.london"))}<br>${esc(u("contact.shanghai"))}</p>
          <p>${esc(u("contact.hoursVal"))}</p>
        </aside>
      </div>
    </section>
  `;
}

function page(route) {
  if (route.path === "/") return home();
  if (route.path === "/catalog") return catalog(route.filters);
  if (route.path.startsWith("/product/")) return productPage(route.productId);
  if (route.path === "/cart") return cartPage();
  if (route.path === "/checkout") return checkoutPage();
  if (route.path.startsWith("/order/")) return orderPage(route.orderId);
  if (route.path === "/about") return aboutPage();
  if (route.path === "/contact") return contactPage();
  return `<section class="section wrap"><div class="empty"><h1>404</h1><a href="#/" data-nav>${esc(u("checkout.home"))}</a></div></section>`;
}

function render() {
  const route = parseHash();
  state.filters = route.filters;
  const app = document.getElementById("app");
  app.innerHTML = `
    ${header(route)}
    <main id="content">${page(route)}</main>
    ${footer()}
    ${
      state.toast
        ? `<div class="toast">${esc(state.toast.text)} <a href="${state.toast.href}" data-nav>${esc(u("cart.addedCta"))}</a> <button type="button" data-toast-close>${esc(u("toast.close"))}</button></div>`
        : ""
    }
  `;
}

function toggleList(list, value, on) {
  const set = new Set(list);
  if (on) set.add(value);
  else set.delete(value);
  return [...set];
}

function currentFilters() {
  return { ...parseHash().filters };
}

function onRoute() {
  state.menuOpen = false;
  state.filtersOpen = false;
  state.pdpQty = 1;
  state.contactSent = false;
  window.scrollTo(0, 0);
  render();
}

function bind() {
  const app = document.getElementById("app");
  app.addEventListener("click", (event) => {
    const langBtn = event.target.closest("[data-lang]");
    if (langBtn) {
      setLang(langBtn.dataset.lang);
      return;
    }
    if (event.target.closest("[data-menu]")) {
      state.menuOpen = !state.menuOpen;
      render();
      return;
    }
    if (event.target.closest("[data-open-filters]")) {
      state.filtersOpen = true;
      render();
      return;
    }
    if (event.target.closest("[data-close-filters]")) {
      state.filtersOpen = false;
      render();
      return;
    }
    if (event.target.closest("[data-toast-close]")) {
      state.toast = null;
      render();
      return;
    }
    const add = event.target.closest("[data-add]");
    if (add) {
      addToCart(add.dataset.add, state.pdpQty);
      return;
    }
    const remove = event.target.closest("[data-remove]");
    if (remove) {
      removeFromCart(remove.dataset.remove);
      return;
    }
    const qty = event.target.closest("[data-qty]");
    if (qty) {
      const line = state.cart.find((item) => item.id === qty.dataset.qty);
      if (line) setQty(qty.dataset.qty, line.qty + Number(qty.dataset.delta));
      return;
    }
    const pdpQty = event.target.closest("[data-pdp-qty]");
    if (pdpQty) {
      const product = getProduct(parseHash().productId);
      const max = product?.stock || 1;
      state.pdpQty = Math.max(1, Math.min(max, state.pdpQty + Number(pdpQty.dataset.pdpQty)));
      const count = document.querySelector("[data-pdp-count]");
      if (count) count.textContent = String(state.pdpQty);
      return;
    }
    const preset = event.target.closest("[data-preset]");
    if (preset) {
      const next = currentFilters();
      Object.assign(next, PRICE_PRESETS[preset.dataset.preset]);
      go("/catalog", next, true);
      return;
    }
    const reset = event.target.closest("[data-reset-filters]");
    if (reset) {
      go("/catalog", emptyFilters(), true);
      return;
    }
    const chip = event.target.closest("[data-remove-filter]");
    if (chip) {
      const next = currentFilters();
      const group = chip.dataset.removeFilter;
      if (group === "price") {
        next.min = null;
        next.max = null;
      } else if (group === "stock") next.stock = false;
      else if (group === "q") next.q = "";
      else next[group] = next[group].filter((id) => id !== chip.dataset.id);
      go("/catalog", next, true);
    }
  });

  app.addEventListener("change", (event) => {
    const box = event.target.closest("[data-filter]");
    if (box) {
      const next = currentFilters();
      next[box.dataset.filter] = toggleList(next[box.dataset.filter], box.value, box.checked);
      go("/catalog", next, true);
      return;
    }
    if (event.target.matches("[data-stock]")) {
      const next = currentFilters();
      next.stock = event.target.checked;
      go("/catalog", next, true);
      return;
    }
    if (event.target.matches("[data-sort]")) {
      const next = currentFilters();
      next.sort = event.target.value;
      go("/catalog", next, true);
    }
  });

  app.addEventListener("submit", (event) => {
    const search = event.target.closest("[data-search]");
    if (search) {
      event.preventDefault();
      const next = emptyFilters();
      next.q = new FormData(search).get("q") || "";
      state.menuOpen = false;
      go("/catalog", next);
      return;
    }
    const price = event.target.closest("[data-price]");
    if (price) {
      event.preventDefault();
      const data = new FormData(price);
      const next = currentFilters();
      next.min = data.get("min") ? fromLocal(data.get("min")) : null;
      next.max = data.get("max") ? fromLocal(data.get("max")) : null;
      go("/catalog", next, true);
      return;
    }
    const checkout = event.target.closest("[data-checkout]");
    if (checkout) {
      event.preventDefault();
      if (!checkout.checkValidity() || !state.cart.length) {
        const error = checkout.querySelector("[data-checkout-error]");
        if (error) error.hidden = false;
        return;
      }
      const id = `AUR-${Date.now().toString(36).toUpperCase()}`;
      state.cart = [];
      saveCart();
      go(`/order/${id}`);
      return;
    }
    const contact = event.target.closest("[data-contact]");
    if (contact) {
      event.preventDefault();
      state.contactSent = true;
      render();
    }
  });
}

export function boot() {
  loadState();
  document.documentElement.lang = localeMeta[state.lang].html;
  document.title = `${u("brandLatin")} · ${u("tagline")}`;
  bind();
  window.addEventListener("hashchange", onRoute);
  if (!location.hash) location.hash = "#/";
  else render();
}
