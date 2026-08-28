const t = (en, ru, zh) => ({ en, ru, zh });

export const categories = [
  {
    id: "headphones",
    image: "/images/products/vespera-lumen-one.png",
    name: t("Headphones", "Наушники", "耳机"),
    blurb: t(
      "Open, closed, in-ear — for mix decisions and for sitting still.",
      "Открытые, закрытые, внутриканальные — и для сведения, и чтобы сидеть тихо.",
      "开放、封闭、入耳——既为对听，也为坐下来把一张片子听完。"
    ),
  },
  {
    id: "speakers",
    image: "/images/products/klangwerk-spire-3.png",
    name: t("Loudspeakers", "Акустика", "音箱"),
    blurb: t(
      "Floorstanders, bookshelves, a sub that keeps time.",
      "Польники, полочники, саб, который держит темп, а не гудит.",
      "落地、书架、一只守拍子而不轰的低音。"
    ),
  },
  {
    id: "monitors",
    image: "/images/products/fieldline-nm-8.png",
    name: t("Studio monitors", "Студийные мониторы", "监听音箱"),
    blurb: t(
      "Nearfield and midfield. They should not flatter a bad take.",
      "Ближнее поле и midfield. Плохой дубль не имеют права приукрасить.",
      "近场与中场。录砸的一轨，不配被它们说成好听。"
    ),
  },
  {
    id: "amplifiers",
    image: "/images/products/aurelion-a300.png",
    name: t("Amplifiers", "Усилители", "放大器"),
    blurb: t(
      "Integrated, headphone, glass — gain without a costume.",
      "Интегральники, усилители для наушников, лампа — усиление без костюма.",
      "合并、耳放、胆机——增益不必化装。"
    ),
  },
  {
    id: "converters",
    image: "/images/products/lumen-ladder-7.png",
    name: t("DACs & interfaces", "ЦАП и интерфейсы", "解码与接口"),
    blurb: t(
      "Ladders, chips, and a bridge to the desk.",
      "Лесенка, чип и мост к пульту.",
      "电阻阶梯、芯片，以及通向调音台的桥。"
    ),
  },
  {
    id: "vinyl",
    image: "/images/products/stellara-plinth-1.png",
    name: t("Vinyl playback", "Винил", "黑胶"),
    blurb: t(
      "Plinth, arm, and the quiet between grooves.",
      "Плинт, тонарм и тишина между канавками.",
      "座、臂，以及纹间那一点安静。"
    ),
  },
  {
    id: "microphones",
    image: "/images/products/pulseforge-capsule.png",
    name: t("Microphones", "Микрофоны", "传声器"),
    blurb: t(
      "Capsules that take a voice as a fact, not a compliment.",
      "Капсюли, которые берут голос как факт, а не как комплимент.",
      "把嗓子当成事实来收，而不是当成恭维。"
    ),
  },
];

export const tiers = [
  {
    id: "professional",
    name: t("Studio", "Студия", "专业监听"),
    hint: t("For decisions that have to travel.", "Для решений, которые должны уехать в зал.", "为那些必须经得起换房间的判断。"),
  },
  {
    id: "hifi",
    name: t("Hi-Fi", "Hi-Fi", "高保真"),
    hint: t("Living-room honesty, not a laboratory.", "Честность гостиной, не лаборатория.", "客厅里的老实，不是实验室。"),
  },
  {
    id: "highend",
    name: t("High-End", "High End", "旗舰 Hi-End"),
    hint: t("When the last 5% is the whole point.", "Когда последние пять процентов и есть смысл.", "最后那百分之五，就是全部理由。"),
  },
];

export const brands = [
  { id: "vespera", name: t("Vespera", "Vespera", "维斯佩拉") },
  { id: "orphic", name: t("Orphic", "Orphic", "奥菲克") },
  { id: "klangwerk", name: t("Klangwerk", "Klangwerk", "克朗维克") },
  { id: "fieldline", name: t("Fieldline", "Fieldline", "菲尔德莱") },
  { id: "aurelion", name: t("Aurelion", "Аурелион", "奥瑞声场") },
  { id: "lumen", name: t("Lumen", "Lumen", "流明") },
  { id: "northroom", name: t("Northroom", "Northroom", "北室") },
  { id: "stellara", name: t("Stellara", "Stellara", "星拉") },
  { id: "pulseforge", name: t("Pulseforge", "Pulseforge", "铸脉") },
  { id: "cassiopeia", name: t("Cassiopeia", "Кассиопея", "仙后座") },
  { id: "helios", name: t("Helios Lab", "Helios Lab", "赫利俄斯") },
  { id: "amberline", name: t("Amberline", "Amberline", "琥珀线") },
];

export const features = [
  { id: "planar", name: t("Planar magnetic", "Планар", "平板振膜") },
  { id: "electrostatic", name: t("Electrostatic", "Электростаты", "静电") },
  { id: "dynamic", name: t("Dynamic driver", "Динамический драйвер", "动圈") },
  { id: "iem", name: t("In-ear", "Внутриканальные", "入耳") },
  { id: "tube", name: t("Vacuum tube", "Лампа", "电子管") },
  { id: "solidstate", name: t("Solid state", "Транзистор", "晶体管") },
  { id: "r2r", name: t("R-2R ladder", "R-2R лесенка", "R-2R 电阻阶梯") },
  { id: "balanced", name: t("Balanced", "Баланс", "平衡") },
  { id: "analog", name: t("Fully analog path", "Полностью аналоговый тракт", "纯模拟通路") },
  { id: "digital", name: t("Digital conversion", "Цифровое преобразование", "数字转换") },
  { id: "condenser", name: t("Condenser capsule", "Конденсаторный капсюль", "电容音头") },
  { id: "ribbon", name: t("Ribbon", "Лента", "铝带") },
  { id: "subwoofer", name: t("Subwoofer", "Сабвуфер", "低音炮") },
  { id: "open", name: t("Open back", "Открытое оформление", "开放式") },
  { id: "closed", name: t("Closed back", "Закрытое оформление", "封闭式") },
];

function spec(label, value) {
  return { label, value };
}

export const products = [
  {
    id: "vespera-lumen-one",
    sku: "AUR-VL1",
    brand: "vespera",
    category: "headphones",
    tier: "highend",
    priceUsd: 2490,
    stock: 5,
    year: 2025,
    featured: true,
    unit: "unit",
    features: ["planar", "open", "balanced"],
    image: "/images/products/vespera-lumen-one.png",
    name: t(
      "Vespera Lumen One",
      "Vespera Lumen One",
      "维斯佩拉 Lumen One 开放式平板"
    ),
    short: t(
      "Open-back planars for evenings you are not checking a mix.",
      "Открытый планар для вечеров, когда микс уже не проверяют.",
      "开放式平板。不是为了对听，是为了把一张片子听到最后。"
    ),
    description: t(
      "The Lumen One is built for the hour after the session, when you are not hunting a fault in a vocal — you are living inside the record. A large planar diaphragm is tensioned so a piano’s attack stays a hammer, not a tick, and the decay is allowed to finish its sentence. The open cups leak into the room on purpose: they keep the stage outside your skull. Cognac leather over slow foam means clamp should vanish after the first track.",
      "Lumen One собирали не для контрольного прогона, а для часа после смены, когда вы уже не ищете дыру в вокале, а живёте внутри пластинки. Большая планарная мембрана натянута так, чтобы атака рояля оставалась ударом молоточка, а не щелчком, и чтобы затухание успевало договорить. Открытые чаши нарочно отдают звук в комнату: сцена не запирается в черепе. Коньячная кожа на медленной пенке — прижим должен исчезнуть после первого трека.",
      "Lumen One 不是为了赶工对听，而是为了下班之后的那一个钟头：你不再找人声的漏洞，而是住进这张片子里。大尺寸平板振膜的张力反复校过——钢琴的起音仍是槌击，不是金属咔嗒；余韵也被允许把句子说完。开放腔体故意把声音交给房间，声场因此不挤在脑子里。干邑色皮革配慢回弹海绵，夹力会在第一首歌之后被忘掉。"
    ),
    notes: t(
      "Wide without being theatrical. Cymbals have air, not grit. A little bass bloom on electronic records — we toe that as character, not a defect.",
      "Широко, но без театра. Тарелки — воздух, не песок. На электронике чуть вспухает низ: для нас это характер, не брак.",
      "宽，但不演戏。镲片是气，不是砂。电子乐的低频会略微胀一点——我们当性格，不当毛病。"
    ),
    specs: [
      spec(t("Transducer", "Излучатель", "单元"), t("Planar, 102 mm", "Планар, 102 мм", "平板，102 mm")),
      spec(t("Impedance", "Сопротивление", "阻抗"), t("32 Ω", "32 Ом", "32 Ω")),
      spec(t("Sensitivity", "Чувствительность", "灵敏度"), t("96 dB / 1 mW", "96 дБ / 1 мВт", "96 dB / 1 mW")),
      spec(t("Termination", "Разъём", "接口"), t("Dual 3.5 mm, 4.4 mm cable in box", "Два 3,5 мм, кабель 4,4 мм в комплекте", "双 3.5 mm，盒内 4.4 mm 线")),
      spec(t("Mass", "Масса", "质量"), t("418 g", "418 г", "418 g")),
    ],
  },
  {
    id: "vespera-night-well",
    sku: "AUR-VNW",
    brand: "vespera",
    category: "headphones",
    tier: "professional",
    priceUsd: 890,
    stock: 12,
    year: 2024,
    featured: true,
    unit: "unit",
    features: ["dynamic", "closed", "balanced"],
    image: "/images/products/vespera-night-well.png",
    name: t(
      "Vespera Night Well",
      "Vespera Night Well",
      "维斯佩拉 Night Well 封闭式"
    ),
    short: t(
      "Closed cans that isolate without turning the midrange into felt.",
      "Закрытые чаши: изоляция есть, середина не становится войлоком.",
      "封闭式。隔音够用，中频却不闷成毡。"
    ),
    description: t(
      "Night Well is what we hand a vocalist who will move, and an engineer who still needs to hear the join between breath and compressor. The cups seal. The mids do not go woolly. A 40 mm dynamic sits in a chamber that dumps heat so a four-hour overdub does not become a clamp headache. The coiled cable is short enough for a booth, long enough for a walk to the talkback.",
      "Night Well даём вокалисту, который будет ходить, и инженеру, которому всё равно слышать стык дыхания и компрессора. Чаши держат. Середина не шерстится. Сорок миллиметров стоят в камере, которая сбрасывает тепло: четырёхчасовая дубль-сессия не превращается в обруч на висках. Витой кабель короткий для кабины и длинный, чтобы дойти до токбэка.",
      "Night Well 交给会走动的人声，也交给仍要听见呼吸与压缩器接缝的工程师。腔体密封，中频不发糊。40 mm 动圈坐在会散热的腔里，四小时叠录不会变成太阳穴上的箍。螺旋线对棚里够短，走到对讲话筒又够长。"
    ),
    notes: t(
      "Leakage is low enough for a live room. Bass is dry. If you want romance, this is the wrong closed pair — take the Lumen.",
      "Утечка мала для живой комнаты. Низ сухой. Если нужен роман — это не та закрытая пара, берите Lumen.",
      "漏音低到能进同期房间。低频是干的。若要浪漫，别拿这副封闭——去拿 Lumen。"
    ),
    specs: [
      spec(t("Transducer", "Излучатель", "单元"), t("Dynamic, 40 mm", "Динамический, 40 мм", "动圈，40 mm")),
      spec(t("Isolation", "Изоляция", "隔音"), t("~22 dB midband", "≈22 дБ в середине", "中频约 22 dB")),
      spec(t("Impedance", "Сопротивление", "阻抗"), t("64 Ω", "64 Ом", "64 Ω")),
      spec(t("Jack", "Разъём", "插头"), t("Locking 3.5 / 6.3 mm", "Фиксация 3,5 / 6,3 мм", "锁扣 3.5 / 6.3 mm")),
    ],
  },
  {
    id: "vespera-veil",
    sku: "AUR-VV",
    brand: "vespera",
    category: "headphones",
    tier: "highend",
    priceUsd: 8900,
    stock: 2,
    year: 2025,
    featured: true,
    unit: "unit",
    features: ["electrostatic", "open", "balanced"],
    image: "/images/products/vespera-veil.png",
    name: t("Vespera Veil", "Vespera Veil", "维斯佩拉 Veil 静电"),
    short: t(
      "Electrostatics that treat silence as part of the score.",
      "Электростаты, для которых тишина — часть партитуры.",
      "静电耳机。把静默当成谱上的一笔。"
    ),
    description: t(
      "Veil is not a louder Lumen. It is a different contract with air. The stator is driven from our Filament energiser; without that pairing we will not sell the cups. What you buy is speed without etch, and a decay that does not smear into the next note. They need a quiet room. They repay it.",
      "Veil — не «более громкий Lumen». Это другой договор с воздухом. Статор питается от нашего энерджайзера Filament; без этой пары чаши не продаём. Покупаете скорость без травления и затухание, которое не мажет следующую ноту. Им нужна тихая комната. Они её отрабатывают.",
      "Veil 不是更响的 Lumen，是和空气另立的契约。定子由我们的 Filament 功放驱动；不成对，杯子不单卖。买到的是没有刮感的快，以及不拖进下一个音的衰减。它们要安静的屋子，也会把这安静还回来。"
    ),
    notes: t(
      "String quartets and close-mic’d piano first. Dense metal is not their sport. Bias takes ten minutes; we do it before you sit.",
      "Сначала квартеты и близко снятый рояль. Плотный метал — не их спорт. Смещение садится минут за десять; делаем до того, как вы сели.",
      "先听弦乐四重奏和近麦钢琴。厚重的金属不是它们的项目。偏压大约十分钟；你坐下之前我们会先做完。"
    ),
    specs: [
      spec(t("Type", "Тип", "类型"), t("Push-pull electrostatic", "Двухтактные электростаты", "推挽静电")),
      spec(t("Bias", "Смещение", "偏压"), t("580 V, Filament-matched", "580 В, пара к Filament", "580 V，与 Filament 配对")),
      spec(t("Earcups", "Чаши", "耳罩"), t("Open, 110 mm radiating", "Открытые, 110 мм поле", "开放，辐射面 110 mm")),
    ],
  },
  {
    id: "orphic-chamber-4",
    sku: "AUR-OC4",
    brand: "orphic",
    category: "headphones",
    tier: "professional",
    priceUsd: 1290,
    stock: 8,
    year: 2025,
    featured: false,
    unit: "unit",
    features: ["iem", "balanced", "dynamic"],
    image: "/images/products/orphic-chamber-4.png",
    name: t(
      "Orphic Chamber 4",
      "Orphic Chamber 4",
      "奥菲克 Chamber 4 四单元入耳"
    ),
    short: t(
      "Four-way in-ears for a stage pocket that still has a centre.",
      "Четыре полосы во вкладыше: карман сцены, но центр на месте.",
      "四路入耳。舞台的口袋还在，中央也还在。"
    ),
    description: t(
      "Chamber 4 is a mix IEM, not a DJ toy. Two balanced armatures take the mid and presence; a small dynamic owns the chest; a micro-tweeter is filtered so cymbals do not become needles. The amber resin is bored for a deep seal. We recommend a custom sleeve if you sweat a three-hour set — the universal tip is honest, not heroic.",
      "Chamber 4 — монитор для сведения на сцене, не игрушка диджея. Два арматурных драйвера держат середину и присутствие, маленький динамик — грудь, микротвитер отфильтрован так, чтобы тарелки не стали иглами. Янтарная смола сверлится под глубокую посадку. На трёхчасовой сет лучше свой слепок: универсальный вкладыш честный, не героический.",
      "Chamber 4 是给台上对听用的，不是打碟玩具。两只动铁管中频与临场，一只小动圈管胸口，微高音做了分频，镲片才不会变成针。琥珀色树脂按深插入孔。流三小时的汗，建议做耳模——原装硅胶是老实的，不是英雄的。"
    ),
    notes: t(
      "Vocal sits forward without spit. Kick is felt, not swollen. Isolation is enough for drums beside you, not for a festival bar.",
      "Вокал впереди, без слюны. Бочка ощущается, не пухнет. Изоляции хватает на барабаны рядом, не на бар фестиваля.",
      "人声靠前，没有喷麦感。底鼓是撞上的，不是肿的。隔音够应付身边的鼓，不够应付户外吧台。"
    ),
    specs: [
      spec(t("Drivers", "Драйверы", "单元"), t("1× dynamic, 3× BA", "1 динамик, 3 арматуры", "1 动圈 + 3 动铁")),
      spec(t("Crossover", "Кроссовер", "分频"), t("Four-way, 3 kHz notch on BA", "4 полосы, вырез 3 кГц на BA", "四路，动铁 3 kHz 陷波")),
      spec(t("Cable", "Кабель", "线材"), t("0.78 mm 2-pin, 4.4 mm", "2-pin 0,78 мм, 4,4 мм", "0.78 mm 双针，4.4 mm")),
    ],
  },
  {
    id: "klangwerk-spire-3",
    sku: "AUR-KS3",
    brand: "klangwerk",
    category: "speakers",
    tier: "highend",
    priceUsd: 12800,
    stock: 3,
    year: 2024,
    featured: true,
    unit: "pair",
    features: ["dynamic", "analog"],
    image: "/images/products/klangwerk-spire-3.png",
    name: t(
      "Klangwerk Spire 3",
      "Klangwerk Spire 3",
      "克朗维克 Spire 3 落地"
    ),
    short: t(
      "Floorstanders that put a double bass in the room, not in the box.",
      "Польники, у которых контрабас стоит в комнате, а не в ящике.",
      "落地箱。低音提琴站在屋子里，不站在箱子里。"
    ),
    description: t(
      "Spire 3 is a three-way with a walnut cabinet that is furniture first and a resonator second. The champagne baffle is a heat sink for the motor, not jewellery. We set them with a modest toe-in and a metre of air behind; closer than that they shout. They want current. Pair them with the A-300 or a house they already trust — not with a pretty integrated that folds at forte.",
      "Spire 3 — трёхполоска, у которой ореховый корпус сначала мебель, потом резонатор. Шампань-баффл — радиатор для магнита, не украшение. Ставим с умеренным разворотом и метром воздуха сзади; ближе — начинают кричать. Им нужен ток. К A-300 или к усилителю, которому вы уже верите, — не к красивому интегральнику, который складывается на форте.",
      "Spire 3 是三分频。胡桃木箱体先是家具，其次才是共鸣腔。香槟金障板是给磁路散热的，不是首饰。我们摆成略微内八、背后留一米气；再近就会喊。它们要电流。配 A-300，或配你已经信得过的放大器——不要配一到强音就软脚的漂亮合并机。"
    ),
    notes: t(
      "Scale without glare. The midrange is a chest, not a telephone. In small rooms we prefer the Nook.",
      "Масштаб без блеска в глаза. Середина — грудь, не трубка телефона. В маленькой комнате лучше Nook.",
      "有体量，不刺眼。中频是胸口，不是电话筒。小房间我们更愿意上 Nook。"
    ),
    specs: [
      spec(t("Layout", "Схема", "单元配置"), t("3-way, bass-reflex", "3 полосы, фазоинвертор", "三分频，倒相")),
      spec(t("Drivers", "Динамики", "喇叭"), t("220 / 110 / 27 mm", "220 / 110 / 27 мм", "220 / 110 / 27 mm")),
      spec(t("Sensitivity", "Чувствительность", "灵敏度"), t("89 dB / 2.83 V", "89 дБ / 2,83 В", "89 dB / 2.83 V")),
      spec(t("Impedance", "Сопротивление", "阻抗"), t("4 Ω nominal", "4 Ом номинал", "标称 4 Ω")),
      spec(t("Weight", "Масса", "质量"), t("42 kg each", "42 кг одна", "每只 42 kg")),
    ],
  },
  {
    id: "klangwerk-nook-12",
    sku: "AUR-KN12",
    brand: "klangwerk",
    category: "speakers",
    tier: "hifi",
    priceUsd: 3200,
    stock: 7,
    year: 2025,
    featured: true,
    unit: "pair",
    features: ["dynamic", "analog"],
    image: "/images/products/klangwerk-nook-12.png",
    name: t(
      "Klangwerk Nook 12",
      "Klangwerk Nook 12",
      "克朗维克 Nook 12 书架"
    ),
    short: t(
      "Bookshelves that behave on stands, not on a windowsill.",
      "Полочники, которые работают на стойках, а не на подоконнике.",
      "书架箱。请上脚架，别搁窗台。"
    ),
    description: t(
      "Nook 12 is the speaker we recommend when the room is a real room: sofa, glass, a street outside. A 160 mm midwoofer and a silk dome, crossed where voices actually live. The port fires back; give it 25 cm or stuff it — we include a sock that is not a joke. They play jazz and string charts without shrinking; they will not throw a stadium.",
      "Nook 12 советуем, когда комната настоящая: диван, стекло, улица за окном. 160 мм СЧ/НЧ и шёлковый купол, раздел там, где живут голоса. Порт назад: либо 25 см, либо затычка — в коробке носок, и это не шутка. Джаз и струнные не сжимают; стадион не нарисуют.",
      "房间是真房间——沙发、玻璃、窗外的马路——我们就推 Nook 12。160 mm 中低、丝膜高音，分频点落在人声真正住的地方。倒相孔向后：留 25 cm，或把附赠的塞棉用上，那不是笑话。爵士与弦乐不会被挤扁；体育场它们画不出来。"
    ),
    notes: t(
      "Sweet at 2.2 m. A sub is optional until organ or film; then the Floor 12 slots under without a bump if you take an evening to blend.",
      "Сладкая точка — 2,2 м. Саб не обязателен, пока нет органа или кино; тогда Floor 12 встаёт без горба, если вечером посидеть на стыке.",
      "甜点在 2.2 m。没有管风琴或电影之前，低音炮不是必须；要加就用 Floor 12，花一晚把衔接抹平，不会起包。"
    ),
    specs: [
      spec(t("Layout", "Схема", "单元配置"), t("2-way, rear port", "2 полосы, порт назад", "二分频，后倒相")),
      spec(t("Drivers", "Динамики", "喇叭"), t("160 mm / 25 mm silk", "160 мм / 25 мм шёлк", "160 mm / 25 mm 丝膜")),
      spec(t("Sensitivity", "Чувствительность", "灵敏度"), t("86 dB", "86 дБ", "86 dB")),
      spec(t("Impedance", "Сопротивление", "阻抗"), t("6 Ω", "6 Ом", "6 Ω")),
    ],
  },
  {
    id: "amberline-floor-12",
    sku: "AUR-AF12",
    brand: "amberline",
    category: "speakers",
    tier: "hifi",
    priceUsd: 2100,
    stock: 4,
    year: 2024,
    featured: false,
    unit: "unit",
    features: ["subwoofer", "dynamic", "analog"],
    image: "/images/products/amberline-floor-12.png",
    name: t(
      "Amberline Floor 12",
      "Amberline Floor 12",
      "琥珀线 Floor 12 低音"
    ),
    short: t(
      "A 12-inch sub that keeps time instead of humming the building.",
      "12 дюймов, которые держат темп, а не гудят в перекрытия.",
      "十二寸低音。守拍子，不把楼板哼响。"
    ),
    description: t(
      "Floor 12 is sealed, not a ported party box. The 12-inch driver works into a walnut cabinet with a plate amp that we set by ear in the living room, then confirm with a sweep. Crossover is analog. Phase is a real knob, not a menu buried in an app. If your floor is springy we sell spikes; if neighbours live below, we talk isolation before we talk extension.",
      "Floor 12 — закрытый ящик, не фазоинвертор для вечеринки. 12 дюймов работают в орех, плата усиления ставится на слух в гостиной и потом сверяется свипом. Кроссовер аналоговый. Фаза — живая ручка, не пункт в приложении. Пружинящий пол — шипы; соседи снизу — сначала развязка, потом нижняя граница.",
      "Floor 12 是密闭箱，不是为派对开孔的。十二寸单元进胡桃木箱，功放板先在客厅用耳朵定，再用扫频确认。分频是模拟的。相位是实体旋钮，不藏在应用程序菜单里。楼板软就上钉；楼下有人，先谈隔振，再谈下潜。"
    ),
    notes: t(
      "Set the low-pass below where the Nook already works. If you hear it as a third speaker, it is too loud.",
      "ФНЧ ниже той полосы, где Nook и так играет. Если слышите третье звено — слишком громко.",
      "低通要切在 Nook 已经能做的频段之下。若听成第三只音箱，就是开太大了。"
    ),
    specs: [
      spec(t("Driver", "Динамик", "单元"), t("300 mm, sealed", "300 мм, закрытый", "300 mm，密闭")),
      spec(t("Amplifier", "Усилитель", "功放"), t("400 W class D, analog input", "400 Вт класс D, аналог на входе", "400 W D 类，模拟输入")),
      spec(t("Crossover", "Кроссовер", "分频"), t("40–120 Hz, 24 dB", "40–120 Гц, 24 дБ", "40–120 Hz，24 dB")),
    ],
  },
  {
    id: "fieldline-nm-8",
    sku: "AUR-FN8",
    brand: "fieldline",
    category: "monitors",
    tier: "professional",
    priceUsd: 2180,
    stock: 9,
    year: 2025,
    featured: true,
    unit: "pair",
    features: ["dynamic", "digital", "balanced"],
    image: "/images/products/fieldline-nm-8.png",
    name: t(
      "Fieldline NM-8",
      "Fieldline NM-8",
      "菲尔德莱 NM-8 近场"
    ),
    short: t(
      "Eight-inch nearfields that refuse to flatter a bad vocal.",
      "Восьмидюймовое ближнее поле: плохой вокал не приукрасят.",
      "八寸近场。录砸的人声，它们不给面子。"
    ),
    description: t(
      "NM-8 is the pair on our mix desk. An eight-inch woofer and a champagne waveguide around a 27 mm tweeter, DSP only for a high-pass and a desk-boundary dip — not for a “music” curve. Analog in on XLR. They are tiring if you mix loud; that is a feature. After a week most engineers turn the room down and start hearing joins they had been painting over.",
      "NM-8 стоят у нас на столе сведения. Восемь дюймов и шампань-волновод вокруг 27 мм, DSP только на ФВЧ и провал от столешницы — не на «музыкальную» кривую. Вход XLR. Если сводить громко, они утомляют; так и задумано. Через неделю большинство убавляет комнату и начинает слышать стыки, которые замазывали.",
      "NM-8 就支在我们的混音桌上。八寸低音，香槟金号角罩着 27 mm 高音。DSP 只做高通和桌面边界的凹陷，不做「好听」曲线。XLR 模拟输入。开大声混会累——这是功能。一周之后，多数人会把房间音量拧下来，开始听见从前被涂掉的接缝。"
    ),
    notes: t(
      "Place them on the pads we ship, not on a console meterbridge. Sub is optional; we usually don’t until film.",
      "Только на наших прокладках, не на мостике пульта. Саб по желанию; до кино обычно не ставим.",
      "请用我们附的垫，别搁在调音台的表桥上。低音炮可加；不到做电影，我们通常不加。"
    ),
    specs: [
      spec(t("Woofer / tweet", "НЧ / ВЧ", "低音 / 高音"), t("200 mm / 27 mm", "200 мм / 27 мм", "200 mm / 27 mm")),
      spec(t("Response", "АЧХ", "频响"), t("38 Hz–22 kHz ±2 dB", "38 Гц–22 кГц ±2 дБ", "38 Hz–22 kHz ±2 dB")),
      spec(t("Inputs", "Входы", "输入"), t("XLR analog, AES optional", "XLR аналог, AES опция", "XLR 模拟，AES 可选")),
      spec(t("Amplifiers", "Усилители", "功放"), t("120 + 60 W", "120 + 60 Вт", "120 + 60 W")),
    ],
  },
  {
    id: "fieldline-nm-5",
    sku: "AUR-FN5",
    brand: "fieldline",
    category: "monitors",
    tier: "professional",
    priceUsd: 1290,
    stock: 14,
    year: 2025,
    featured: false,
    unit: "pair",
    features: ["dynamic", "digital", "balanced"],
    image: "/images/products/fieldline-nm-5.png",
    name: t(
      "Fieldline NM-5",
      "Fieldline NM-5",
      "菲尔德莱 NM-5 近场"
    ),
    short: t(
      "Five-inch nearfields for a desk that cannot take an eight.",
      "Пять дюймов для стола, который восьмёрку не выдержит.",
      "五寸近场。桌子扛不住八寸时用它。"
    ),
    description: t(
      "NM-5 is not a toy version of the eight. It is the right tool when the listening distance is a metre and the room is a bedroom that pretends to be a studio. The waveguide matches the NM-8 so a mix can move between rooms without rewriting the top. Bass stops earlier; that honesty is why we stock them.",
      "NM-5 — не игрушечная восьмёрка. Это правильный инструмент, когда дистанция — метр, а комната — спальня, которая притворяется студией. Волновод совпадает с NM-8: микс можно перенести, не переписывая верх. Низ кончается раньше; за эту честность мы их и держим.",
      "NM-5 不是八寸的玩具版。听距一米、卧室假装成棚的时候，它才是对的工具。号角与 NM-8 同一族，混音换房间不必重写高频。低频停得更早；我们进这款，就是认这分老实。"
    ),
    notes: t(
      "Do not add a cheap sub to “fix” them. If you need the last octave, step to the NM-8 or the Main-15.",
      "Не лечите дешёвым сабом. Нужна последняя октава — берите NM-8 или Main-15.",
      "别用廉价低音炮「补」。若要最后那一个八度，换 NM-8 或 Main-15。"
    ),
    specs: [
      spec(t("Woofer / tweet", "НЧ / ВЧ", "低音 / 高音"), t("130 mm / 27 mm", "130 мм / 27 мм", "130 mm / 27 mm")),
      spec(t("Response", "АЧХ", "频响"), t("52 Hz–22 kHz ±2 dB", "52 Гц–22 кГц ±2 дБ", "52 Hz–22 kHz ±2 dB")),
      spec(t("Inputs", "Входы", "输入"), t("XLR / TRS", "XLR / TRS", "XLR / TRS")),
    ],
  },
  {
    id: "fieldline-main-15",
    sku: "AUR-FM15",
    brand: "fieldline",
    category: "monitors",
    tier: "professional",
    priceUsd: 6400,
    stock: 2,
    year: 2023,
    featured: false,
    unit: "pair",
    features: ["dynamic", "balanced", "analog"],
    image: "/images/products/fieldline-main-15.png",
    name: t(
      "Fieldline Main-15",
      "Fieldline Main-15",
      "菲尔德莱 Main-15 中场"
    ),
    short: t(
      "Midfield mains for when a mix has to survive a hall.",
      "Midfield, когда микс должен выжить в зале.",
      "中场主监听。混音要进厅堂时用。"
    ),
    description: t(
      "Main-15 is not a living-room speaker in work clothes. Dual 15-inch woofers and a waveguide that holds pattern at 2 kHz so the image does not collapse when you stand up. Analog crossovers. They want a treated front wall and a real console width. We do not sell them into a bedroom. Delivery is two people and a plan for the stairs.",
      "Main-15 — не домашняя акустика в рабочей одежде. Два пятнадцатидюймовых и волновод, который держит диаграмму на 2 кГц: картина не схлопывается, когда вы встаёте. Кроссоверы аналоговые. Нужна обработанная передняя стена и ширина настоящего пульта. В спальню не продаём. Доставка — двое и план лестницы.",
      "Main-15 不是穿了工装的客厅音箱。双十五寸，号角在 2 kHz 仍收得住指向——人站起来，像不会塌。分频是模拟的。要处理过的前墙，要真调音台的宽度。卧室不卖。配送是两个人，还要先量楼梯。"
    ),
    notes: t(
      "Check translation to nearfield on the NM-8 before you sign off a master. The Main-15 will make you generous with reverb if you let it.",
      "Перед мастером сверяйте перевод в ближнее поле на NM-8. Main-15, если позволить, сделает вас щедрым на ревер.",
      "出母带前，用 NM-8 核对近场翻译。Main-15 若由着它，会让你把混响放得太大方。"
    ),
    specs: [
      spec(t("Layout", "Схема", "单元配置"), t("3-way midfield", "3 полосы, midfield", "三分频中场")),
      spec(t("Woofers", "НЧ", "低音"), t("2 × 380 mm", "2 × 380 мм", "2 × 380 mm")),
      spec(t("SPL", "SPL", "声压"), t("118 dB peak pair", "118 дБ пик, пара", "一对峰值 118 dB")),
    ],
  },
  {
    id: "aurelion-a300",
    sku: "AUR-A300",
    brand: "aurelion",
    category: "amplifiers",
    tier: "highend",
    priceUsd: 7900,
    stock: 4,
    year: 2024,
    featured: true,
    unit: "unit",
    features: ["solidstate", "analog", "balanced"],
    image: "/images/products/aurelion-a300.png",
    name: t(
      "Aurelion A-300",
      "Аурелион A-300",
      "奥瑞声场 A-300 合并"
    ),
    short: t(
      "Class A integrated with meters that tell the truth at forte.",
      "Интегральник класса A, у которого стрелки не врут на форте.",
      "A 类合并机。强音时，表针不撒谎。"
    ),
    description: t(
      "The A-300 is our house integrated: discrete Class A to a point, then a gentle slide so the heatsinks remain furniture, not a stove. VU meters are ballistic, not candy. Five analog inputs, one balanced, a pre-out for a second amp if the Spire ever asks. No DAC on board — we will not bake a converter into a thermal problem. Walnut cheeks are structural.",
      "A-300 — наш домашний интегральник: дискретный класс A до разумной точки, потом мягкий уход, чтобы радиаторы оставались мебелью, а не плитой. Стрелки баллистические, не конфеты. Пять аналоговых входов, один балансный, pre-out если Spire попросит второй аппарат. ЦАПа на борту нет — не будем запекать преобразователь в тепловую задачу. Ореховые щёки несущие.",
      "A-300 是厅里的合并机：分立 A 类走到合理的点，再轻轻滑开，散热片仍是家具，不是炉子。VU 是弹道式的，不是糖果。五路模拟，一路平衡，还有前级输出——万一 Spire 要第二台。板上不做解码，不把转换器烤进热问题里。胡桃木侧板是结构件。"
    ),
    notes: t(
      "Warm after forty minutes. Do not judge it from cold. It does not add syrup; it stops subtracting body.",
      "Через сорок минут. С холодной не судите. Сиропа не добавляет — перестаёт вычитать тело.",
      "四十分钟之后再听。别在冷机时下判。它不浇糖浆，只是不再扣掉身体。"
    ),
    specs: [
      spec(t("Power", "Мощность", "功率"), t("2 × 80 W / 8 Ω, Class A/AB", "2 × 80 Вт / 8 Ом, класс A/AB", "2 × 80 W / 8 Ω，A/AB 类")),
      spec(t("Inputs", "Входы", "输入"), t("4× RCA, 1× XLR", "4× RCA, 1× XLR", "4× RCA，1× XLR")),
      spec(t("Phono", "Фонокорректор", "唱放"), t("None — use Stellara EQ", "Нет — берите Stellara EQ", "无——请配星拉 EQ")),
    ],
  },
  {
    id: "aurelion-filament-2",
    sku: "AUR-FIL2",
    brand: "aurelion",
    category: "amplifiers",
    tier: "highend",
    priceUsd: 4100,
    stock: 6,
    year: 2025,
    featured: true,
    unit: "unit",
    features: ["tube", "analog", "balanced"],
    image: "/images/products/aurelion-filament-2.png",
    name: t(
      "Aurelion Filament 2",
      "Аурелион Filament 2",
      "奥瑞声场 Filament 2 胆耳放"
    ),
    short: t(
      "A two-tube headphone amp that also energises the Veil.",
      "Двухламповый усилитель для наушников и энерджайзер для Veil.",
      "双管耳放，兼 Veil 的静电功放。"
    ),
    description: t(
      "Filament 2 is glass with manners. Two output tubes, a discreet solid-state driver, and a bias that we set on the bench — you do not get a screwdriver. Dual 6.3 mm, one 4.4 mm, and a dedicated electrostatic tap. Gain is low because the Lumen does not need a shout. Tube rolling is possible; we will not warranty a lucky find from a market stall.",
      "Filament 2 — лампа с воспитанием. Два выходных баллона, спокойный транзисторный драйвер, смещение ставим на столе — отвёртку вам не даём. Два 6,3 мм, один 4,4 мм и отдельный выход на электростаты. Усиление низкое: Lumen незачем кричать. Лампы менять можно; базарную удачу не гарантируем.",
      "Filament 2 是有教养的胆。两只输出管，克制的晶体管驱动，偏压在工作台上调好——不把螺丝刀交给你。双 6.3 mm、一只 4.4 mm，另有静电专用口。增益很低，Lumen 不必喊。可以换管；市集上碰的运气，质保不认。"
    ),
    notes: t(
      "Hiss is below a quiet room. If you hear rush, check the source, not the glass.",
      "Шум ниже тихой комнаты. Если слышите шурок — смотрите источник, не баллон.",
      "底噪低于安静的屋子。若听见沙沙，查前端，别怪玻璃。"
    ),
    specs: [
      spec(t("Tubes", "Лампы", "电子管"), t("2 × output, matched pair", "2 выходных, подобранная пара", "2 只输出管，配对")),
      spec(t("Outputs", "Выходы", "输出"), t("6.3 / 4.4 / electrostat", "6,3 / 4,4 / электростат", "6.3 / 4.4 / 静电")),
      spec(t("Power (dynamic)", "Мощность (динамика)", "功率（动圈/平板）"), t("1.2 W / 32 Ω", "1,2 Вт / 32 Ом", "1.2 W / 32 Ω")),
    ],
  },
  {
    id: "helios-desk-1",
    sku: "AUR-HD1",
    brand: "helios",
    category: "amplifiers",
    tier: "hifi",
    priceUsd: 1180,
    stock: 11,
    year: 2025,
    featured: false,
    unit: "unit",
    features: ["digital", "solidstate", "balanced"],
    image: "/images/products/helios-desk-1.png",
    name: t(
      "Helios Desk 1",
      "Helios Desk 1",
      "赫利俄斯 Desk 1 桌面解码耳放"
    ),
    short: t(
      "A desk DAC/amp that does not pretend to be a rack.",
      "Настольный ЦАП/усилитель, который не притворяется стойкой.",
      "桌面解码耳放。并不假装自己是机架。"
    ),
    description: t(
      "Desk 1 is for the hour between a laptop and a pair of cans. USB in, a competent delta-sigma chip, a real analog volume, 6.3 and 4.4 mm. The VU is there so you see clipping before you feel it. It will not replace the Ladder 7. It will replace a dongle you have been apologising for.",
      "Desk 1 — для часа между ноутбуком и чашами. USB, вменяемый дельта-сигма, живая аналоговая громкость, 6,3 и 4,4 мм. Стрелка затем, чтобы клип увидеть раньше, чем услышать. Ladder 7 он не заменит. Донгл, за который вы извинялись, — заменит.",
      "Desk 1 给笔记本和耳机之间的那个钟头。USB 进，一枚肯干活的 Δ-Σ 芯片，模拟音量是实体的，6.3 与 4.4 mm。VU 让你在听见削波之前先看见。它替不了 Ladder 7。它能替掉那只你一直在道歉的小尾巴。"
    ),
    notes: t(
      "Use the 4.4 mm on the Lumen; single-ended is fine on the Night Well. Firmware is boring, which is praise.",
      "На Lumen — 4,4 мм; Night Well спокойно на небалансе. Прошивка скучная, и это комплимент.",
      "Lumen 走 4.4 mm；Night Well 单端即可。固件很无聊——这是夸奖。"
    ),
    specs: [
      spec(t("Conversion", "Преобразование", "转换"), t("32-bit / 768 kHz, DSD256", "32 бит / 768 кГц, DSD256", "32 bit / 768 kHz，DSD256")),
      spec(t("Out", "Выход", "输出"), t("2.1 V SE / 4.0 V balanced", "2,1 В SE / 4,0 В баланс", "单端 2.1 V / 平衡 4.0 V")),
      spec(t("USB", "USB", "USB"), t("Async, no driver on macOS / Linux", "Асинхронный, без драйвера на macOS / Linux", "异步，macOS / Linux 免驱")),
    ],
  },
  {
    id: "lumen-ladder-7",
    sku: "AUR-LL7",
    brand: "lumen",
    category: "converters",
    tier: "highend",
    priceUsd: 5600,
    stock: 3,
    year: 2024,
    featured: true,
    unit: "unit",
    features: ["r2r", "digital", "balanced"],
    image: "/images/products/lumen-ladder-7.png",
    name: t(
      "Lumen Ladder 7",
      "Lumen Ladder 7",
      "流明 Ladder 7 R-2R 解码"
    ),
    short: t(
      "An R-2R ladder that reconstructs a piano as wood, not as a JPEG.",
      "R-2R лесенка, у которой рояль — дерево, а не JPEG.",
      "R-2R 电阻阶梯。钢琴是木头，不是压缩图。"
    ),
    description: t(
      "Ladder 7 is a discrete resistor ladder with a slow filter we prefer to the sharp ones that win measurements and lose the hall. NOS and OS are both on the fascia; we sit people in OS first, then NOS, and let them keep the one that still has a room around the instrument. USB, AES, optical. Analog out is balanced and unapologetic. No volume chip — use the A-300.",
      "Ladder 7 — дискретная резисторная лесенка с медленным фильтром: мы его предпочитаем острым, которые выигрывают измерения и проигрывают зал. NOS и OS на фасаде; сначала сажаем в OS, потом NOS, оставляют тот, у которого вокруг инструмента ещё есть комната. USB, AES, оптика. Аналоговый выход балансный и без извинений. Чипа громкости нет — крутите A-300.",
      "Ladder 7 是分立电阻阶梯，滤波偏慢——我们宁可要它，也不要那些赢在指标、输在厅堂的锐滤波。NOS 与 OS 都在面板上；先让人坐 OS，再坐 NOS，留下那档仍能让乐器周围有房间的。USB、AES、光纤。模拟输出是平衡的，也不道歉。没有音量芯片——请拧 A-300。"
    ),
    notes: t(
      "PCM is the native language. DSD is accepted, not worshipped. Give it a dedicated linear supply if the building is noisy.",
      "PCM — родной язык. DSD принимаем, не поклоняемся. Если дом шумный по питанию — отдельный линейник.",
      "PCM 是母语。DSD 接收，不供神。楼里电源脏，就给它独立线性电源。"
    ),
    specs: [
      spec(t("Ladder", "Лесенка", "阶梯"), t("24-bit discrete R-2R", "24 бит, дискретная R-2R", "24 bit 分立 R-2R")),
      spec(t("Inputs", "Входы", "输入"), t("USB, AES/EBU, S/PDIF, Toslink", "USB, AES/EBU, S/PDIF, Toslink", "USB、AES/EBU、S/PDIF、光纤")),
      spec(t("Output", "Выход", "输出"), t("XLR 4.4 V rms", "XLR 4,4 В скз", "XLR 4.4 V rms")),
    ],
  },
  {
    id: "northroom-bridge-24",
    sku: "AUR-NB24",
    brand: "northroom",
    category: "converters",
    tier: "professional",
    priceUsd: 1890,
    stock: 10,
    year: 2025,
    featured: false,
    unit: "unit",
    features: ["digital", "balanced", "solidstate"],
    image: "/images/products/northroom-bridge-24.png",
    name: t(
      "Northroom Bridge 24",
      "Northroom Bridge 24",
      "北室 Bridge 24 音频接口"
    ),
    short: t(
      "A 24-channel bridge that behaves like furniture, not like a toy.",
      "24 канала, которые ведут себя как мебель, не как игрушка.",
      "二十四通道。像家具，不像玩具。"
    ),
    description: t(
      "Bridge 24 is the interface on the studio desk: eight mic preamps you can leave at 10 o’clock, AD/DA that does not smear transients into the converters’ idea of “smooth,” and a monitor controller that actually cuts. Word clock in and out. Thunderbolt and USB, because sessions still arrive on both. The meters are amber because we got tired of cyan.",
      "Bridge 24 — интерфейс студийного стола: восемь преампов, которые можно оставить на десяти часах, АЦП/ЦАП, который не мажет атаку в «гладкость», и мониторный контроллер, который правда режет. Вход и выход вордклока. Thunderbolt и USB — сессии до сих пор приезжают и так, и так. Шкалы янтарные: от голубого устали.",
      "Bridge 24 是控制室桌上的接口：八路话放可以停在十点钟；模数/数模不把瞬态抹成转换器以为的「顺」；监听控制器是真的切。字时钟进出都有。Thunderbolt 与 USB 都留，因为工程两头都会来。表头是琥珀色的——青蓝色看腻了。"
    ),
    notes: t(
      "Preamps are clean, not “vintage.” If you want colour, put a ribbon on a loud source or take the Cassiopeia.",
      "Преампы чистые, не «винтаж». Нужен цвет — ленту на громкий источник или Кассиопею.",
      "话放是干净的，不是「复古」。要颜色，把铝带对准大声源，或换仙后座。"
    ),
    specs: [
      spec(t("I/O", "Входы/выходы", "通路"), t("24×24 at 96 kHz", "24×24 на 96 кГц", "96 kHz 下 24×24")),
      spec(t("Mic pre", "Преампы", "话放"), t("8, EIN −129 dBu", "8 шт, EIN −129 дБу", "8 路，EIN −129 dBu")),
      spec(t("Host", "Хост", "主机"), t("Thunderbolt 3 / USB-C", "Thunderbolt 3 / USB-C", "Thunderbolt 3 / USB-C")),
    ],
  },
  {
    id: "stellara-plinth-1",
    sku: "AUR-SP1",
    brand: "stellara",
    category: "vinyl",
    tier: "hifi",
    priceUsd: 2750,
    stock: 5,
    year: 2024,
    featured: true,
    unit: "unit",
    features: ["analog"],
    image: "/images/products/stellara-plinth-1.png",
    name: t(
      "Stellara Plinth 1",
      "Stellara Plinth 1",
      "星拉 Plinth 1 唱盘"
    ),
    short: t(
      "A belt-drive plinth whose silence lives between the grooves.",
      "Пассик, у которого тишина живёт между канавками.",
      "皮带驱动。静默住在纹与纹之间。"
    ),
    description: t(
      "Plinth 1 is walnut, a champagne platter, and a belt you can change without a ritual. The arm is ours: medium mass, a headshell that takes a standard cart without drama. Speed is quartz-referenced; 33 and 45 are on the fascia, 78 is a screw we do not hide. Isolation feet are included because tables lie. We set VTA in the room, not from a forum.",
      "Plinth 1 — орех, шампань-блин и пассик, который меняют без обряда. Тонарм наш: средняя масса, шелл под обычный картридж без драмы. Скорость от кварца; 33 и 45 на фасаде, 78 — винт, который не прячем. Ноги в комплекте: столы врут. VTA ставим в комнате, не по форуму.",
      "Plinth 1 是胡桃木座、香槟金盘，皮带不必举行仪式就能换。臂是我们的：中等质量，头壳装常见唱头不折腾。速度跟石英；33 与 45 在面板上，78 是一颗不藏起来的螺丝。附隔离脚——桌子会撒谎。VTA 在房间里调，不在论坛上调。"
    ),
    notes: t(
      "Give it a wall-shelf if the floor walks. The Phono EQ belongs within a metre of short interconnects.",
      "Если пол ходит — на стену. Фоноккорректор — в метре, короткими межблочниками.",
      "地板会走，就上墙板。唱放放在一米内，用短讯号线。"
    ),
    specs: [
      spec(t("Drive", "Привод", "驱动"), t("Belt, AC motor", "Пассик, АС-мотор", "皮带，交流马达")),
      spec(t("Speeds", "Скорости", "转速"), t("33 / 45 / 78", "33 / 45 / 78", "33 / 45 / 78")),
      spec(t("Wow & flutter", "Детонация", "抖晃"), t("< 0.06 % WRMS", "< 0,06 % WRMS", "< 0.06 % WRMS")),
    ],
  },
  {
    id: "stellara-phono-eq",
    sku: "AUR-SPE",
    brand: "stellara",
    category: "vinyl",
    tier: "hifi",
    priceUsd: 1640,
    stock: 0,
    year: 2024,
    featured: false,
    unit: "unit",
    features: ["analog", "solidstate"],
    image: "/images/products/stellara-phono-eq.png",
    name: t(
      "Stellara Phono EQ",
      "Stellara Phono EQ",
      "星拉 Phono EQ 唱放"
    ),
    short: t(
      "A phono stage with meters — currently waiting on the next crate.",
      "Фонокорректор со стрелками. Сейчас ждём следующий ящик.",
      "带表头的唱放。下一箱还在路上。"
    ),
    description: t(
      "Phono EQ is MM and MC, loading on the fascia, a subsonic filter that is a switch — not a curve you discover in a PDF. The meters show you when a warped disc is asking too much. Gain is quiet. We are between shipments; leave a request and we will not pretend it is in the room.",
      "Phono EQ — MM и MC, нагрузка на фасаде, инфразвуковой фильтр — тумблер, не кривая из PDF. Стрелки показывают, когда поведённый диск просит слишком много. Усиление тихое. Мы между поставками: оставьте заявку, не будем делать вид, что он в зале.",
      "Phono EQ 兼顾 MM 与 MC，负载在面板上，次声滤波是拨杆——不是藏在 PDF 里的曲线。碟片翘了、要得太多，表针会告诉你。增益很静。我们正两箱之间：留下意向即可，不假装它在厅里。"
    ),
    notes: t(
      "Start at 47 kΩ / 100 pF for MM. MC: try 100 Ω before you chase exotic loading.",
      "MM начните с 47 кОм / 100 пФ. MC: сначала 100 Ом, потом экзотика.",
      "MM 先从 47 kΩ / 100 pF。MC：先试 100 Ω，再去追奇异负载。"
    ),
    specs: [
      spec(t("Gain", "Усиление", "增益"), t("40 / 60 / 66 dB", "40 / 60 / 66 дБ", "40 / 60 / 66 dB")),
      spec(t("Loading", "Нагрузка", "负载"), t("MM & MC on fascia", "MM и MC на фасаде", "MM / MC 在面板")),
      spec(t("Noise", "Шум", "噪声"), t("−82 dB ref. 5 mV", "−82 дБ к 5 мВ", "相对 5 mV 为 −82 dB")),
    ],
  },
  {
    id: "pulseforge-capsule",
    sku: "AUR-PFC",
    brand: "pulseforge",
    category: "microphones",
    tier: "professional",
    priceUsd: 1450,
    stock: 7,
    year: 2025,
    featured: false,
    unit: "unit",
    features: ["condenser", "analog", "balanced"],
    image: "/images/products/pulseforge-capsule.png",
    name: t(
      "Pulseforge Capsule",
      "Pulseforge Capsule",
      "铸脉 Capsule 电容"
    ),
    short: t(
      "A large-diaphragm condenser that takes a voice as a fact.",
      "Крупный конденсатор, который берёт голос как факт.",
      "大振膜电容。把嗓子当成事实来收。"
    ),
    description: t(
      "Capsule is a cardioid LDC with a champagne grille that is a pop filter’s partner, not a substitute. The capsule is centre-terminated; sibilants stay sibilants, they do not become razors unless the singer already brought razors. Pad and HPF on the body. Shockmount in the crate. We hear it on spoken word and on a dry vocal booth; a bright room will not be forgiven.",
      "Capsule — кардиоида с крупной мембраной, шампань-сетка дружит с поп-фильтром, не заменяет его. Мембрана с центральным отводом: сибилянты остаются сибилянтами, бритвой становятся только если певец уже принёс бритву. Пад и ФВЧ на корпусе. Эластик в ящике. Слышим на речи и в сухой кабине; яркую комнату не прощает.",
      "Capsule 是心形大振膜。香槟金网罩是防喷的搭档，不是替代。中心引出：齿音仍是齿音，除非歌手自己把剃刀带来，否则不变剃刀。衰减与高通在身体上。减震架在箱里。我们拿它收人声对白和干的人声棚；房间亮，它不原谅。"
    ),
    notes: t(
      "48 V from the Bridge 24 is plenty. A cheap preamp will not “warm it up”; it will just get noisy.",
      "48 В с Bridge 24 достаточно. Дешёвый преамп его не «согреет» — только нашмит.",
      "Bridge 24 的 48 V 够了。廉价话放不会「给它升温」，只会变吵。"
    ),
    specs: [
      spec(t("Capsule", "Капсюль", "音头"), t("34 mm, centre-terminated", "34 мм, центр. отвод", "34 mm，中心引出")),
      spec(t("Pattern", "Диаграмма", "指向"), t("Cardioid", "Кардиоида", "心形")),
      spec(t("SPL", "SPL", "最大声压"), t("138 dB with pad", "138 дБ с падом", "加衰减 138 dB")),
    ],
  },
  {
    id: "cassiopeia-ribbon",
    sku: "AUR-CR",
    brand: "cassiopeia",
    category: "microphones",
    tier: "professional",
    priceUsd: 980,
    stock: 0,
    year: 2023,
    featured: false,
    unit: "unit",
    features: ["ribbon", "analog", "balanced"],
    image: "/images/products/cassiopeia-ribbon.png",
    name: t(
      "Cassiopeia Ribbon",
      "Кассиопея Ribbon",
      "仙后座铝带"
    ),
    short: t(
      "A long ribbon — waiting on foil from the next lot.",
      "Длинная лента. Ждём фольгу следующей партии.",
      "长铝带。下一炉箔还在路上。"
    ),
    description: t(
      "Cassiopeia is a long-ribbon figure-8 that we put on guitar cabs and on a room pair when the hall is the instrument. The foil is 1.8 µm; phantom is a rumour you should not test. It is out of the room until the next lot of foil is tensioned. Leave a request if you want the first pair off the jig.",
      "Кассиопея — длинная лента-восьмёрка: кабинет гитары и пара в зале, когда зал — инструмент. Фольга 1,8 мкм; фантом — слух, который лучше не проверять. Пока нет в зале: ждём натяжку следующей партии. Оставьте заявку, если хотите первую пару со стапеля.",
      "仙后座是长铝带、8 字指向：吉他箱，以及厅堂本身就是乐器时的一对房间麦。箔厚 1.8 µm；幻象电源是谣言，别去验证。下一炉箔绷好之前，厅里没有。若想要工装上下来的第一对，留下意向。"
    ),
    notes: t(
      "Keep it off axis of a kick. Store it vertical. The Bridge 24 preamps have enough gain if you are close.",
      "Не в ось бочки. Хранить вертикально. Преампов Bridge 24 хватает, если вы близко.",
      "别对准底鼓轴心。竖着存放。靠得近，Bridge 24 的增益够。"
    ),
    specs: [
      spec(t("Foil", "Фольга", "铝箔"), t("1.8 µm, 50 mm", "1,8 мкм, 50 мм", "1.8 µm，50 mm")),
      spec(t("Pattern", "Диаграмма", "指向"), t("Figure-8", "Восьмёрка", "8 字")),
      spec(t("Phantom", "Фантом", "幻象"), t("Do not apply", "Не подавать", "禁止施加")),
    ],
  },
];

export const reviews = [
  {
    id: "mei",
    avatar: "/images/avatars/mei.png",
    product: "vespera-night-well",
    name: t("Mei Lin", "Мэй Линь", "林梅"),
    role: t("Tracking engineer, Shanghai", "Звукорежиссёр записи, Шанхай", "录音师，上海"),
    quote: t(
      "Night Well seals enough for a live room, but the midrange never turns to cloth. That is what a closed pair is for.",
      "Night Well держит живую комнату, а середина не становится тряпкой. Вот для чего нужны закрытые чаши.",
      "Night Well 的隔音够用在同期房间，中频却不闷成布。封闭式本该如此。"
    ),
  },
  {
    id: "andrei",
    avatar: "/images/avatars/andrei.png",
    product: "klangwerk-spire-3",
    name: t("Andrei Sokolov", "Андрей Соколов", "安德烈·索科洛夫"),
    role: t("Listener, Moscow", "Слушатель, Москва", "聆听者，莫斯科"),
    quote: t(
      "Spire 3 does not paint a curtain. The double bass stands in the room, not in the cabinet.",
      "Spire 3 не рисуют ширму. Контрабас стоит в комнате, а не в колонке.",
      "Spire 3 不画一道帘子。低音提琴站在屋子里，不站在箱子里。"
    ),
  },
  {
    id: "nola",
    avatar: "/images/avatars/nola.png",
    product: "fieldline-nm-8",
    name: t("Nola Brooks", "Нола Брукс", "诺拉·布鲁克斯"),
    role: t("Mastering, London", "Мастеринг, Лондон", "母带，伦敦"),
    quote: t(
      "I keep the NM-8 because they will not compliment a bad vocal. That is the entire job.",
      "Держу NM-8, потому что они не делают комплимент плохому вокалу. В этом вся работа.",
      "我留着 NM-8，因为它们不夸录砸的人声。这就是全部的工作。"
    ),
  },
  {
    id: "arjun",
    avatar: "/images/avatars/arjun.png",
    product: "northroom-bridge-24",
    name: t("Arjun Mehta", "Арджун Мехта", "阿尔琼·梅赫塔"),
    role: t("Producer, between desks", "Продюсер, между столами", "制作人，两边跑棚"),
    quote: t(
      "Bridge 24 feels like furniture. The monitor cut is a cut, not a polite fade. Sessions still arrive on both Thunderbolt and USB — it stopped being a conversation.",
      "Bridge 24 как мебель. Срез мониторов — срез, не вежливое затухание. Сессии до сих пор приезжают и по Thunderbolt, и по USB — разговор на эту тему кончился.",
      "Bridge 24 像家具。监听一刀是一刀，不是客气的淡出。工程仍会从雷电和 USB 两头来——这件事不再需要讨论。"
    ),
  },
];

export function getProduct(id) {
  return products.find((p) => p.id === id);
}

export function getBrand(id) {
  return brands.find((b) => b.id === id);
}

export function getCategory(id) {
  return categories.find((c) => c.id === id);
}

export function getFeature(id) {
  return features.find((f) => f.id === id);
}

export function getTier(id) {
  return tiers.find((t) => t.id === id);
}

export const priceBoundsUsd = {
  min: Math.min(...products.map((p) => p.priceUsd)),
  max: Math.max(...products.map((p) => p.priceUsd)),
};
