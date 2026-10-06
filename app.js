/* =========================================================
   Jain Confectionery — site logic
   Edit CONFIG and PRODUCTS below; everything else updates itself.
   ========================================================= */

const CONFIG = {
  shopName: "Jain Confectionery",
  city: "Pilibhit",
  since: 2001,            // ← set the real founding year; "25 years" etc. is worked out from this
  // WhatsApp number with country code, digits only (e.g. 919876543210).
  whatsapp: "919999999999",
  phoneDisplay: "+91 99999 99999",
  address: "Main Market, Pilibhit, Uttar Pradesh 262001",
  hours: "Open daily, 9:00 AM to 10:00 PM",
  // Shop location. Get it from Google Maps: long-press the shop, copy the numbers.
  lat: 28.6315,
  lng: 79.8040,
  mapQuery: "Pilibhit, Uttar Pradesh",
  freeDeliveryMin: 300,   // free delivery from this order value...
  freeRadiusKm: 1,        // ...within this distance
  smallOrderFee: 30,      // delivery fee within range when below the minimum
  deliveryTime: "30 to 40 minutes",
  showDemoBar: true
};

const CATEGORIES = [
  { id: "chocolates", name: "Chocolates", icon: "bar" },
  { id: "cakes", name: "Cakes & pastries", icon: "cake" },
  { id: "biscuits", name: "Biscuits & cookies", icon: "cookie" },
  { id: "candies", name: "Toffees & candies", icon: "candy" },
  { id: "icecream", name: "Ice cream", icon: "cone" },
  { id: "snacks", name: "Namkeen & snacks", icon: "packet" },
  { id: "drinks", name: "Cold drinks & juices", icon: "bottle" },
  { id: "gifts", name: "Gift packs", icon: "gift" }
];

/* Optional: add  img: "images/truffle.jpg"  to any product to show a real photo instead of the icon. */
const PRODUCTS = [
  { id: "c1", cat: "chocolates", name: "Milk chocolate bar", unit: "50 g", price: 50, mrp: 50, icon: "bar", best: true },
  { id: "c2", cat: "chocolates", name: "Dark chocolate 70%", unit: "80 g", price: 140, mrp: 160, icon: "bar" },
  { id: "c3", cat: "chocolates", name: "Assorted chocolate box", unit: "12 pieces", price: 299, mrp: 349, icon: "box", best: true, tag: "Bestseller" },
  { id: "k1", cat: "cakes", name: "Black forest pastry", unit: "1 piece", price: 60, mrp: 60, icon: "slice", best: true },
  { id: "k2", cat: "cakes", name: "Chocolate truffle cake", unit: "500 g", price: 450, mrp: 450, icon: "cake", tag: "Order 2 hrs ahead" },
  { id: "k3", cat: "cakes", name: "Pineapple cake", unit: "500 g", price: 380, mrp: 380, icon: "cake" },
  { id: "k4", cat: "cakes", name: "Chocolate muffin", unit: "2 pieces", price: 70, mrp: 80, icon: "muffin" },
  { id: "b1", cat: "biscuits", name: "Butter cookies tin", unit: "400 g", price: 220, mrp: 250, icon: "tin", best: true },
  { id: "b2", cat: "biscuits", name: "Cream biscuits", unit: "Pack of 4", price: 80, mrp: 80, icon: "sandwich" },
  { id: "b3", cat: "biscuits", name: "Atta jeera cookies", unit: "250 g", price: 90, mrp: 100, icon: "cookie" },
  { id: "t1", cat: "candies", name: "Assorted toffees", unit: "200 g jar", price: 99, mrp: 110, icon: "candy", best: true },
  { id: "t2", cat: "candies", name: "Fruit lollipops", unit: "Pack of 10", price: 50, mrp: 50, icon: "lolly" },
  { id: "t3", cat: "candies", name: "Mango candy", unit: "Pack of 50", price: 60, mrp: 60, icon: "drop" },
  { id: "i1", cat: "icecream", name: "Butterscotch tub", unit: "700 ml", price: 210, mrp: 230, icon: "tub", best: true },
  { id: "i2", cat: "icecream", name: "Chocolate cone", unit: "1 cone", price: 40, mrp: 40, icon: "cone" },
  { id: "i3", cat: "icecream", name: "Kulfi stick", unit: "Pack of 4", price: 100, mrp: 100, icon: "kulfi" },
  { id: "s1", cat: "snacks", name: "Aloo bhujia", unit: "400 g", price: 110, mrp: 120, icon: "packet" },
  { id: "s2", cat: "snacks", name: "Masala peanuts", unit: "200 g", price: 60, mrp: 60, icon: "bowl" },
  { id: "s3", cat: "snacks", name: "Potato chips", unit: "Family pack", price: 50, mrp: 50, icon: "packet" },
  { id: "d1", cat: "drinks", name: "Cold drink", unit: "2.25 L", price: 99, mrp: 99, icon: "bottle", best: true },
  { id: "d2", cat: "drinks", name: "Mango juice", unit: "1 L", price: 110, mrp: 120, icon: "carton" },
  { id: "d3", cat: "drinks", name: "Packaged water", unit: "1 L", price: 20, mrp: 20, icon: "water" },
  { id: "g1", cat: "gifts", name: "Festive chocolate hamper", unit: "Gift box", price: 599, mrp: 699, icon: "gift", best: true, tag: "Festive" },
  { id: "g2", cat: "gifts", name: "Return gift pack", unit: "Set of 10", price: 450, mrp: 500, icon: "bag" }
];

/* ---------- Line icons (48 × 48 grid, drawn in gold) ---------- */
const ICONS = {
  bar: '<path d="M13 26V8.5A2.5 2.5 0 0 1 15.5 6h17A2.5 2.5 0 0 1 35 8.5V26"/><path d="M24 6v20M13 16h22"/><path d="M10 26h28v14a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3z"/><path d="M16 34.5h16"/>',
  box: '<rect x="7" y="18" width="34" height="22" rx="2"/><rect x="5" y="13" width="38" height="5" rx="1.5"/><path d="M24 13v27"/><path d="M24 13c-3-6-10-7-10-3s7 3 10 3zM24 13c3-6 10-7 10-3s-7 3-10 3z"/>',
  slice: '<path d="M7 37h34V23L7 31z"/><path d="M7 34h34"/><circle cx="33" cy="19.5" r="3"/><path d="M34 16.6c.8-1.8 2.4-3 4.2-3.3"/>',
  cake: '<path d="M10 40h28V28a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2z"/><path d="M14 26v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6"/><path d="M10 33c3 0 3.5 2 7 2s3.5-2 7-2 3.5 2 7 2 3.5-2 7-2"/><path d="M24 18v-6"/><path d="M24 5.5c1.6 1.7 1.6 3.4 0 4.5-1.6-1.1-1.6-2.8 0-4.5z"/><path d="M6 40h36"/>',
  muffin: '<path d="M13 26h22l-3 15H16z"/><path d="M19 26l1 15M24 26v15M29 26l-1 15"/><path d="M12 26c-2-8 5-14 12-14s14 6 12 14"/><path d="M24 12c0-2 1-4 3-5"/>',
  cookie: '<circle cx="24" cy="24" r="16"/><g class="f"><circle cx="18" cy="19" r="1.7"/><circle cx="28" cy="17" r="1.7"/><circle cx="30.5" cy="28" r="1.7"/><circle cx="19" cy="30" r="1.7"/><circle cx="24.5" cy="24" r="1.3"/></g>',
  tin: '<ellipse cx="24" cy="14" rx="15" ry="5"/><path d="M9 14v20c0 2.8 6.7 5 15 5s15-2.2 15-5V14"/><path d="M9 19c0 2.8 6.7 5 15 5s15-2.2 15-5"/><path d="M19 30h10"/>',
  sandwich: '<rect x="8" y="13" width="32" height="8" rx="3"/><rect x="8" y="27" width="32" height="8" rx="3"/><path d="M10 24h28"/><g class="f"><circle cx="15" cy="17" r="1"/><circle cx="24" cy="17" r="1"/><circle cx="33" cy="17" r="1"/></g>',
  candy: '<ellipse cx="24" cy="24" rx="9" ry="7.5"/><path d="M15 24l-9-6v12zM33 24l9-6v12z"/><path d="M21 17.5c2 4 2 9 0 13M27 17.5c-2 4-2 9 0 13"/>',
  lolly: '<circle cx="24" cy="18" r="11"/><path d="M24 18c0-2.4 3.2-2.8 4-.6 1.2 3.4-2.6 6.2-6 5.4-4.2-1-5-6.2-2.4-9.4 3.4-4 10.4-3.2 12.6 1.4"/><path d="M24 29v14"/>',
  drop: '<path d="M24 7c6 8 11 13.5 11 20a11 11 0 0 1-22 0c0-6.5 5-12 11-20z"/><path d="M19 29a5 5 0 0 0 5 5"/>',
  tub: '<rect x="8" y="11" width="32" height="7" rx="2"/><path d="M10 18h28l-3 22H13z"/><path d="M15 27h18"/>',
  cone: '<path d="M15 22l9 21 9-21"/><path d="M13 22h22"/><path d="M13 22c0-6.5 4.9-12 11-12s11 5.5 11 12"/><path d="M18.5 27l9 7.5M29.5 27l-7.5 10"/>',
  kulfi: '<path d="M16 34V14a8 8 0 0 1 16 0v20z"/><path d="M24 34v9"/><path d="M16 22h16"/>',
  packet: '<path d="M12 14h24V9l-3 2.5-3-2.5-3 2.5-3-2.5-3 2.5-3-2.5-3 2.5-3-2.5z"/><path d="M12 14c-1 9-1 17 0 27h24c1-10 1-18 0-27"/><circle cx="24" cy="27" r="5"/>',
  bowl: '<path d="M7 25h34c0 8.8-7.6 15-17 15S7 33.8 7 25z"/><circle cx="16.5" cy="21" r="3"/><circle cx="24" cy="19" r="3"/><circle cx="31.5" cy="21" r="3"/>',
  bottle: '<path d="M20.5 5h7v5c0 3 4.5 5 4.5 10v3c0 2-2 3-2 5s2 3 2 5v10a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V33c0-2 2-3 2-5s-2-3-2-5v-3c0-5 4.5-7 4.5-10z"/><path d="M16 23h16M16 33h16"/>',
  carton: '<path d="M14 17h20v26H14z"/><path d="M14 17l4-6h12l4 6"/><path d="M28 11l3-7h4"/><path d="M14 25h20"/>',
  water: '<rect x="20.5" y="4.5" width="7" height="4.5" rx="1"/><path d="M20 9h8c3 3 4 5 4 9v22a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3V18c0-4 1-6 4-9z"/><path d="M16 24h16M16 32h16"/>',
  gift: '<rect x="8" y="20" width="32" height="20" rx="1.5"/><rect x="6" y="14" width="36" height="6" rx="1.5"/><path d="M24 14v26"/><path d="M24 14c-2-5-9-8-10-4s6 4 10 4zM24 14c2-5 9-8 10-4s-6 4-10 4z"/>',
  bag: '<path d="M10 16h28l-2 26H12z"/><path d="M18 20v-6a6 6 0 0 1 12 0v6"/>',
  basket: '<path d="M6 19h36l-4 21H10z"/><path d="M15 19l7-11M33 19l-7-11"/><path d="M18 26v8M24 26v8M30 26v8"/>',
  home: '<path d="M8 22L24 9l16 13"/><path d="M12 19v21h24V19"/><path d="M20 40V30h8v10"/>',
  pin: '<path d="M24 43s13-12.5 13-23a13 13 0 0 0-26 0c0 10.5 13 23 13 23z"/><circle cx="24" cy="20" r="4.5"/>',
  clock: '<circle cx="24" cy="24" r="17"/><path d="M24 14v10l7 4"/>',
  phone: '<path d="M16 7h-5a3 3 0 0 0-3 3c0 17 13 30 30 30a3 3 0 0 0 3-3v-5l-8-3.5-4 4c-5-2.2-9.3-6.5-11.5-11.5l4-4z"/>',
  scooter: '<circle cx="12" cy="35" r="5"/><circle cx="36" cy="35" r="5"/><path d="M17 35h13l4-15h-5"/><path d="M8 25h14v10"/><path d="M8 25v-7h11v7"/>',
  cash: '<rect x="6" y="14" width="36" height="20" rx="2"/><circle cx="24" cy="24" r="4.5"/><path d="M11.5 19v10M36.5 19v10"/>',
  mobile: '<rect x="15" y="6" width="18" height="36" rx="3"/><path d="M21 37h6"/>',
  search: '<circle cx="21" cy="21" r="12"/><path d="M30 30l10 10"/>',
  locate: '<circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="3"/><path d="M24 6v8M24 34v8M6 24h8M34 24h8"/>',
  check: '<circle cx="24" cy="24" r="17"/><path d="M16 24.5l5.5 5.5L32.5 19"/>',
  diya: '<path d="M8 27h32c-2 7.5-8 11.5-16 11.5S10 34.5 8 27z"/><path d="M40 27l3.5-3"/><path d="M24 23c-3.2-3-3.2-7.4 0-12.5 3.2 5.1 3.2 9.5 0 12.5z"/>',
  balloon: '<path d="M24 32c-7 0-11-7-11-13a11 11 0 0 1 22 0c0 6-4 13-11 13z"/><path d="M22 32h4l-2 3z"/><path d="M24 35c-2.5 3 2.5 5 0 9"/>',
  rings: '<circle cx="19" cy="28" r="10"/><circle cx="29" cy="28" r="10"/><path d="M29 13.5l-3-3.5 3-3.5 3 3.5z"/>',
  snow: '<path d="M24 6v36M8.4 15l31.2 18M8.4 33l31.2-18"/><path d="M19 9.5l5 4 5-4M19 38.5l5-4 5 4"/>',
  tag: '<path d="M8 8h16l17 17-16 16L8 24z"/><circle cx="16" cy="16" r="2.5"/>',
  store: '<path d="M7 18l3-10h28l3 10"/><path d="M7 18c0 3 2 5 5.7 5S18 21 18 18c0 3 2 5 6 5s6-2 6-5c0 3 1.7 5 5.3 5S41 21 41 18"/><path d="M10 23v17h28V23"/><path d="M20 40v-9h8v9"/>',
  whatsapp: '<path d="M24 6a18 18 0 0 0-15.5 27.2L6 42l9-2.4A18 18 0 1 0 24 6z"/><path d="M17.5 16.5c-.8 1-1 2.6 0 4.6 1.8 3.6 4.8 6.6 8.4 8.4 2 1 3.6.8 4.6 0l1-1.6-3.6-2-1.8 1.6c-2-1-3.6-2.6-4.6-4.6l1.6-1.8-2-3.6z"/>'
};

function icon(name, cls = "") {
  return `<svg class="ico ${cls}" viewBox="0 0 48 48" aria-hidden="true" focusable="false">${ICONS[name] || ICONS.gift}</svg>`;
}

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const rupee = n => "₹" + Number(n).toLocaleString("en-IN");
const byId = id => PRODUCTS.find(p => p.id === id);
const catOf = id => CATEGORIES.find(c => c.id === id);
const esc = s => String(s).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
const years = () => new Date().getFullYear() - CONFIG.since;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Cart (saved in the browser) ---------- */
const CART_KEY = "jc_cart_v1";
const Cart = {
  items: {},
  load() {
    try { this.items = JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
    catch { this.items = {}; }
    Object.keys(this.items).forEach(id => { if (!byId(id)) delete this.items[id]; });
  },
  save() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(this.items)); } catch { /* storage unavailable */ }
    document.dispatchEvent(new CustomEvent("cart:change"));
  },
  qty(id) { return this.items[id] || 0; },
  add(id) { this.items[id] = this.qty(id) + 1; this.save(); },
  remove(id) {
    const q = this.qty(id) - 1;
    if (q <= 0) delete this.items[id]; else this.items[id] = q;
    this.save();
  },
  clear() { this.items = {}; this.save(); },
  lines() { return Object.entries(this.items).map(([id, qty]) => ({ p: byId(id), qty })).filter(l => l.p); },
  count() { return this.lines().reduce((n, l) => n + l.qty, 0); },
  subtotal() { return this.lines().reduce((n, l) => n + l.qty * l.p.price, 0); },
  savings() { return this.lines().reduce((n, l) => n + l.qty * (l.p.mrp - l.p.price), 0); }
};

/* ---------- Shared chrome: header, tab bar, footer ---------- */
const NAV = [
  { href: "index.html", page: "home", label: "Home", short: "Home", icon: "home" },
  { href: "shop.html", page: "shop", label: "Shop", short: "Shop", icon: "bag" },
  { href: "celebrations.html", page: "celebrations", label: "Celebrations", short: "Cakes", icon: "cake" },
  { href: "visit.html", page: "visit", label: "Visit us", short: "Visit", icon: "pin" }
];

function monogram(size = 40) {
  return `<svg class="monogram" width="${size}" height="${size}" viewBox="0 0 40 40" aria-hidden="true">
    <defs><linearGradient id="mg${size}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8A6A25"/><stop offset=".45" stop-color="#E4CC8A"/><stop offset=".7" stop-color="#B08D3E"/><stop offset="1" stop-color="#8A6A25"/>
    </linearGradient></defs>
    <circle cx="20" cy="20" r="19" fill="none" stroke="url(#mg${size})" stroke-width="1.2"/>
    <circle cx="20" cy="20" r="16" fill="none" stroke="url(#mg${size})" stroke-width=".6"/>
    <text x="20" y="27.5" text-anchor="middle" font-family="Bodoni Moda, Didot, Georgia, serif" font-size="21" font-weight="500" fill="url(#mg${size})">J</text>
  </svg>`;
}

function renderChrome() {
  const page = document.body.dataset.page;
  const cur = p => (p === page ? ' aria-current="page"' : "");

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <nav class="wrap nav" aria-label="Main">
      <a class="brand" href="index.html">
        ${monogram(40)}
        <span class="brand-name">${esc(CONFIG.shopName)}<small>${esc(CONFIG.city)}, since ${CONFIG.since}</small></span>
      </a>
      <ul class="nav-links">
        ${NAV.map(n => `<li><a href="${n.href}"${cur(n.page)}>${n.label}</a></li>`).join("")}
      </ul>
      <div class="nav-end">
        <a class="cart-link" href="cart.html"${cur("cart")} aria-label="Cart">${icon("basket")}<span class="badge" data-cart-count hidden>0</span></a>
        <a class="btn btn-primary header-cta" href="shop.html">Order now</a>
      </div>
    </nav>`;
  document.body.prepend(header);

  if (CONFIG.showDemoBar) {
    const demo = document.createElement("div");
    demo.className = "demo-bar";
    demo.textContent = `Demo preview of the ${CONFIG.shopName} website`;
    document.body.prepend(demo);
  }

  const tabbar = document.createElement("nav");
  tabbar.className = "tabbar";
  tabbar.setAttribute("aria-label", "Quick navigation");
  tabbar.innerHTML = [
    ...NAV.map(n => `<a href="${n.href}"${cur(n.page)}>${icon(n.icon)}<span>${n.short}</span></a>`),
    `<a href="cart.html"${cur("cart")}>${icon("basket")}<span>Cart</span><span class="badge" data-cart-count hidden>0</span></a>`
  ].join("");
  document.body.append(tabbar);

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="wrap foot-grid">
      <div class="foot-brand">
        ${monogram(48)}
        <div>
          <strong>${esc(CONFIG.shopName)}</strong>
          <p>${esc(CONFIG.address)}<br>${esc(CONFIG.hours)}</p>
        </div>
      </div>
      <div class="foot-links">
        ${NAV.map(n => `<a href="${n.href}">${n.label}</a>`).join("")}
        <a href="cart.html">Cart</a>
        <a href="${waLink("Hi! I have a question.")}" target="_blank" rel="noopener">WhatsApp us</a>
      </div>
    </div>
    <div class="wrap foot-base">
      <span>Serving ${esc(CONFIG.city)} since ${CONFIG.since}</span>
      <span>Prices never above MRP</span>
    </div>`;
  const main = $("main");
  main ? main.after(footer) : document.body.append(footer);

  const wa = document.createElement("a");
  wa.className = "wa-float";
  wa.href = waLink("Hi! I'd like to place an order.");
  wa.target = "_blank";
  wa.rel = "noopener";
  wa.setAttribute("aria-label", "Chat with us on WhatsApp");
  wa.innerHTML = icon("whatsapp");
  document.body.append(wa);

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.append(toast);

  // header gains a soft shadow once the page scrolls
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 8);
    document.body.classList.toggle("show-wa", window.scrollY > 480);  // on phones the chat button waits until you scroll
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function waLink(text) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}

let toastTimer;
function toast(msg) {
  const t = $(".toast");
  if (!t) return;
  t.innerHTML = `${icon("check")}<span>${esc(msg)}</span>`;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2000);
}

function updateBadges() {
  const n = Cart.count();
  $$("[data-cart-count]").forEach(b => {
    const changed = b.textContent !== String(n);
    b.textContent = n;
    b.hidden = n === 0;
    if (changed && n > 0) { b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }
  });
}

/* Fill static placeholders: icons, config values, delivery terms, years */
function fillStatic() {
  $$("[data-icon]").forEach(el => { el.innerHTML = icon(el.dataset.icon); });
  $$("[data-config]").forEach(el => (el.textContent = CONFIG[el.dataset.config]));
  $$("[data-free-min]").forEach(el => (el.textContent = rupee(CONFIG.freeDeliveryMin)));
  $$("[data-free-km]").forEach(el => (el.textContent = CONFIG.freeRadiusKm + " km"));
  $$("[data-eta]").forEach(el => (el.textContent = CONFIG.deliveryTime));
  $$("[data-years]").forEach(el => (el.textContent = years()));
  $$("[data-since]").forEach(el => (el.textContent = CONFIG.since));
  $$("[data-wa]").forEach(a => (a.href = waLink(a.dataset.wa)));
}

/* ---------- Scroll reveal (one gentle rise, once) ---------- */
function initReveal() {
  const items = $$("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) { items.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      io.unobserve(en.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  items.forEach(el => io.observe(el));
}

/* ---------- Product card + add/remove controls ---------- */
function ctrlHTML(p) {
  const q = Cart.qty(p.id);
  if (!q) return `<button class="btn-add" data-action="add" data-id="${p.id}" aria-label="Add ${esc(p.name)} to cart">Add</button>`;
  return `<div class="stepper" role="group" aria-label="${esc(p.name)} quantity">
    <button data-action="remove" data-id="${p.id}" aria-label="Remove one">−</button>
    <output>${q}</output>
    <button data-action="add" data-id="${p.id}" aria-label="Add one">+</button>
  </div>`;
}

function artHTML(p, cls = "") {
  return p.img
    ? `<img src="${esc(p.img)}" alt="" loading="lazy" class="${cls}">`
    : icon(p.icon || catOf(p.cat).icon, cls);
}

function productCard(p, i = 0) {
  const off = p.mrp > p.price ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;
  const tag = p.tag || (off ? `${off}% off` : "");
  return `<article class="p-card" style="--i:${i % 8}">
    <div class="p-art">${artHTML(p)}${tag ? `<span class="p-tag">${esc(tag)}</span>` : ""}</div>
    <div class="p-body">
      <h3>${esc(p.name)}</h3>
      <p class="p-unit">${esc(p.unit)}</p>
      <div class="p-foot">
        <div class="p-price">${rupee(p.price)}${p.mrp > p.price ? `<s>${rupee(p.mrp)}</s>` : ""}</div>
        <div data-ctrl="${p.id}">${ctrlHTML(p)}</div>
      </div>
    </div>
  </article>`;
}

function refreshControls() {
  $$("[data-ctrl]").forEach(el => { el.innerHTML = ctrlHTML(byId(el.dataset.ctrl)); });
}

document.addEventListener("click", e => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const { action, id } = btn.dataset;
  if (action === "add") {
    const wasEmpty = !Cart.qty(id);
    Cart.add(id);
    if (wasEmpty) toast(`${byId(id).name} added to cart`);
  } else if (action === "remove") {
    Cart.remove(id);
  }
  const holder = btn.closest("[data-ctrl]");
  if (holder) {
    const sel = Cart.qty(id) ? `[data-action="${action}"]` : "[data-action]";
    requestAnimationFrame(() => holder.querySelector(sel)?.focus());
  }
});

/* ---------- Free-delivery progress ---------- */
function progressHTML(subtotal) {
  const pct = Math.min(100, (subtotal / CONFIG.freeDeliveryMin) * 100);
  const left = CONFIG.freeDeliveryMin - subtotal;
  const text = left > 0
    ? `Add <strong>${rupee(left)}</strong> more for free delivery`
    : `<strong>Free delivery</strong> within ${CONFIG.freeRadiusKm} km`;
  return `<div class="progress${left <= 0 ? " done" : ""}">
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    <div class="progress-text">${text}</div>
  </div>`;
}

/* ---------- Home ---------- */
function sealHTML() {
  const ring = `${CONFIG.shopName} ◆ ${CONFIG.city} ◆ Since ${CONFIG.since} ◆ `.toUpperCase();
  return `<svg class="seal-svg" viewBox="0 0 400 400" role="img" aria-label="${esc(CONFIG.shopName)}, ${esc(CONFIG.city)}, since ${CONFIG.since}">
    <defs>
      <linearGradient id="sg-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#8A6A25"/><stop offset=".3" stop-color="#D9BC74"/>
        <stop offset=".45" stop-color="#F3E3B0"/><stop offset=".62" stop-color="#C9A55A"/>
        <stop offset="1" stop-color="#7E6020"/>
      </linearGradient>
      <linearGradient id="sg-silver" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#F6F7F8"/><stop offset=".35" stop-color="#C3C8CE"/>
        <stop offset=".55" stop-color="#F1F2F4"/><stop offset=".8" stop-color="#A9AFB6"/>
        <stop offset="1" stop-color="#E4E7EA"/>
      </linearGradient>
      <radialGradient id="sg-face" cx=".38" cy=".32" r=".8">
        <stop offset="0" stop-color="#FFFFFF"/><stop offset=".7" stop-color="#F3F4F6"/><stop offset="1" stop-color="#DDE1E5"/>
      </radialGradient>
      <path id="sg-ring" d="M200,200 m-152,0 a152,152 0 1,1 304,0 a152,152 0 1,1 -304,0"/>
    </defs>
    <circle class="s-disc" cx="200" cy="200" r="190" fill="url(#sg-silver)"/>
    <circle cx="200" cy="200" r="178" fill="url(#sg-face)"/>
    <circle class="s-draw" cx="200" cy="200" r="178" fill="none" stroke="url(#sg-gold)" stroke-width="1.6" pathLength="1"/>
    <circle class="s-draw d2" cx="200" cy="200" r="126" fill="none" stroke="url(#sg-gold)" stroke-width="1.2" pathLength="1"/>
    <circle class="s-draw d3" cx="200" cy="200" r="120" fill="none" stroke="url(#sg-gold)" stroke-width=".6" pathLength="1"/>
    <g class="s-ring">
      <text font-family="Bodoni Moda, Didot, Georgia, serif" font-size="17" font-weight="500" fill="url(#sg-gold)">
        <textPath href="#sg-ring" textLength="945" lengthAdjust="spacing">${esc(ring)}</textPath>
      </text>
    </g>
    <g class="s-core">
      <text x="200" y="236" text-anchor="middle" font-family="Bodoni Moda, Didot, Georgia, serif" font-size="150" font-weight="500" fill="url(#sg-gold)">J</text>
      <path d="M160 262h80" stroke="url(#sg-gold)" stroke-width="1"/>
      <text x="200" y="288" text-anchor="middle" font-family="Bodoni Moda, Didot, Georgia, serif" font-size="17" font-style="italic" fill="#8A6A25">Since ${CONFIG.since}</text>
    </g>
  </svg>
  <span class="seal-sheen" aria-hidden="true"></span>`;
}

function initHome() {
  const seal = $("#seal");
  if (seal) seal.innerHTML = sealHTML();

  const cats = $("#home-cats");
  if (cats) {
    cats.innerHTML = CATEGORIES.map((c, i) => {
      const n = PRODUCTS.filter(p => p.cat === c.id).length;
      return `<a class="cat-tile" href="shop.html?cat=${c.id}" style="--i:${i}">
        <span class="cat-ico">${icon(c.icon)}</span>
        <strong>${c.name}</strong><span class="count">${n} items</span>
      </a>`;
    }).join("");
  }
  const best = $("#home-best");
  if (best) best.innerHTML = PRODUCTS.filter(p => p.best).map(productCard).join("");
}

/* ---------- Shop ---------- */
function initShop() {
  const params = new URLSearchParams(location.search);
  let active = CATEGORIES.some(c => c.id === params.get("cat")) ? params.get("cat") : "all";
  let query = "";

  const chips = $("#chips");
  chips.innerHTML = [{ id: "all", name: "All" }, ...CATEGORIES]
    .map(c => `<button class="chip" data-cat="${c.id}" aria-pressed="${c.id === active}">${c.name}</button>`)
    .join("");

  chips.addEventListener("click", e => {
    const chip = e.target.closest("[data-cat]");
    if (!chip) return;
    active = chip.dataset.cat;
    $$(".chip", chips).forEach(c => c.setAttribute("aria-pressed", c.dataset.cat === active));
    chip.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", inline: "center", block: "nearest" });
    const url = new URL(location);
    active === "all" ? url.searchParams.delete("cat") : url.searchParams.set("cat", active);
    history.replaceState(null, "", url);
    render();
  });

  $("#search").addEventListener("input", e => { query = e.target.value.trim().toLowerCase(); render(); });

  function render() {
    const list = PRODUCTS.filter(p =>
      (active === "all" || p.cat === active) &&
      (!query || p.name.toLowerCase().includes(query) || catOf(p.cat).name.toLowerCase().includes(query))
    );
    const label = active === "all" ? "everything" : catOf(active).name.toLowerCase();
    $("#result-note").textContent = query
      ? `${list.length} result${list.length === 1 ? "" : "s"} for “${query}” in ${label}`
      : `Showing ${label}, ${list.length} items`;
    const grid = $("#grid");
    grid.innerHTML = list.length
      ? list.map(productCard).join("")
      : `<div class="empty">
           <span class="empty-ico">${icon("search")}</span>
           <h2>Nothing matches “${esc(query)}”</h2>
           <p>Try another word, or ask us on WhatsApp and we’ll check the shelf.</p>
           <a class="btn btn-dark" href="${waLink(`Hi! Do you have ${query}?`)}" target="_blank" rel="noopener">${icon("whatsapp")}Ask on WhatsApp</a>
         </div>`;
    grid.classList.remove("settle"); void grid.offsetWidth; grid.classList.add("settle");
  }
  render();

  const bar = $("#cart-bar");
  function renderBar() {
    const n = Cart.count();
    bar.classList.toggle("show", n > 0);
    document.body.classList.toggle("has-cart-bar", n > 0);
    bar.innerHTML = `<div class="cart-bar-row">
        <div><strong>${n} item${n === 1 ? "" : "s"}, ${rupee(Cart.subtotal())}</strong><small>Delivered in ${CONFIG.deliveryTime}</small></div>
        <a class="btn btn-primary" href="cart.html">View cart</a>
      </div>${progressHTML(Cart.subtotal())}`;
  }
  renderBar();
  document.addEventListener("cart:change", renderBar);
}

/* ---------- Cart & checkout ---------- */
function distanceKm(a, b) {
  const R = 6371, toRad = d => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat), dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function deliveryFor(subtotal, zone) {
  if (zone === "far") return { fee: null, label: "Confirmed on WhatsApp" };
  if (subtotal >= CONFIG.freeDeliveryMin) return { fee: 0, label: "Free" };
  return { fee: CONFIG.smallOrderFee, label: rupee(CONFIG.smallOrderFee) };
}

function initCart() {
  const listEl = $("#cart-list");
  const summaryEl = $("#cart-summary");
  const checkout = $("#checkout");
  const emptyEl = $("#cart-empty");
  const done = $("#order-done");

  const zone = () => $('input[name="zone"]:checked')?.value || "near";

  function render() {
    const lines = Cart.lines();
    const has = lines.length > 0;
    if (!done.hidden) return;
    emptyEl.hidden = has;
    $("#cart-layout").hidden = !has;
    if (!has) return;

    listEl.innerHTML = lines.map(({ p, qty }) => `
      <div class="cart-item">
        <div class="mini">${artHTML(p)}</div>
        <div><h3>${esc(p.name)}</h3><p>${esc(p.unit)}, ${rupee(p.price)} each</p></div>
        <div class="right"><div data-ctrl="${p.id}">${ctrlHTML(p)}</div><strong>${rupee(p.price * qty)}</strong></div>
      </div>`).join("");

    const sub = Cart.subtotal();
    const d = deliveryFor(sub, zone());
    const save = Cart.savings();
    summaryEl.innerHTML = `
      <div class="summary-row"><span>Items (${Cart.count()})</span><strong>${rupee(sub)}</strong></div>
      ${save > 0 ? `<div class="summary-row"><span>You save on MRP</span><strong class="gain">${rupee(save)}</strong></div>` : ""}
      <div class="summary-row"><span>Delivery</span><strong class="${d.fee === 0 ? "gain" : ""}">${d.label}</strong></div>
      <div class="summary-row summary-total"><span>To pay</span><strong>${rupee(sub + (d.fee || 0))}${d.fee === null ? " + delivery" : ""}</strong></div>
      ${zone() === "near" ? progressHTML(sub) : ""}`;
  }

  render();
  document.addEventListener("cart:change", render);
  $$('input[name="zone"]').forEach(r => r.addEventListener("change", render));

  // Location check — optional, nothing is sent anywhere
  $("#geo-btn").addEventListener("click", () => {
    const msg = $("#geo-msg");
    if (!navigator.geolocation) { msg.textContent = "Your browser can’t share location. Pick the option that fits."; return; }
    msg.textContent = "Checking your distance from the shop…";
    navigator.geolocation.getCurrentPosition(
      pos => {
        const km = distanceKm({ lat: CONFIG.lat, lng: CONFIG.lng }, { lat: pos.coords.latitude, lng: pos.coords.longitude });
        const near = km <= CONFIG.freeRadiusKm;
        $(`input[name="zone"][value="${near ? "near" : "far"}"]`).checked = true;
        msg.textContent = near
          ? `You’re about ${km.toFixed(1)} km away, inside our free-delivery zone.`
          : `You’re about ${km.toFixed(1)} km away. We’ll confirm the delivery charge on WhatsApp.`;
        render();
      },
      () => { msg.textContent = "Location wasn’t shared. Pick the option that fits."; },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });

  // Checkout → WhatsApp
  checkout.addEventListener("submit", e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(checkout));
    const errors = {};
    if (!f.name?.trim()) errors.name = "Enter your name so we know who the order is for.";
    if (!/^[6-9]\d{9}$/.test((f.phone || "").replace(/\D/g, "").slice(-10))) errors.phone = "Enter a 10-digit mobile number.";
    if (!f.address?.trim() || f.address.trim().length < 8) errors.address = "Add your house number, street and area.";
    $$(".err", checkout).forEach(el => (el.textContent = errors[el.dataset.for] || ""));
    $$("input, textarea", checkout).forEach(el => el.toggleAttribute("aria-invalid", !!errors[el.name]));
    const firstBad = Object.keys(errors)[0];
    if (firstBad) { checkout.elements[firstBad].focus(); return; }

    const lines = Cart.lines();
    const sub = Cart.subtotal();
    const d = deliveryFor(sub, zone());
    const msg = [
      `*New order for ${CONFIG.shopName}*`,
      "",
      ...lines.map(({ p, qty }) => `${qty} x ${p.name} (${p.unit}) = ${rupee(p.price * qty)}`),
      "",
      `Items: ${rupee(sub)}`,
      `Delivery: ${d.label}`,
      `*To pay: ${rupee(sub + (d.fee || 0))}${d.fee === null ? " + delivery" : ""}*`,
      "",
      `Name: ${f.name.trim()}`,
      `Phone: ${f.phone.trim()}`,
      `Address: ${f.address.trim()}`,
      f.landmark?.trim() ? `Landmark: ${f.landmark.trim()}` : null,
      `Distance: ${zone() === "near" ? `within ${CONFIG.freeRadiusKm} km` : `more than ${CONFIG.freeRadiusKm} km`}`,
      `Payment: ${f.pay}`,
      f.note?.trim() ? `Note: ${f.note.trim()}` : null
    ].filter(l => l !== null).join("\n");

    window.open(waLink(msg), "_blank", "noopener");
    $("#cart-layout").hidden = true;
    done.hidden = false;
    done.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  });

  $("#new-order").addEventListener("click", () => { Cart.clear(); location.href = "shop.html"; });
}

/* ---------- Celebrations ---------- */
function initCelebrations() {
  const form = $("#enquiry");
  const date = $("#e-date");
  if (date) date.min = new Date().toISOString().slice(0, 10);
  form.addEventListener("submit", e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(form));
    if (!f.name?.trim()) { form.elements.name.focus(); toast("Enter your name to send the enquiry"); return; }
    const msg = [
      `*Celebration enquiry for ${CONFIG.shopName}*`,
      `Name: ${f.name.trim()}`,
      `Occasion: ${f.occasion}`,
      f.date ? `Date needed: ${f.date}` : null,
      f.qty?.trim() ? `Quantity or size: ${f.qty.trim()}` : null,
      f.details?.trim() ? `Details: ${f.details.trim()}` : null
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  });
}

/* ---------- Visit ---------- */
function initVisit() {
  const call = $("#call-link");
  if (call) call.href = "tel:+" + CONFIG.whatsapp;
  const map = $("#map");
  if (map) map.src = `https://www.google.com/maps?q=${encodeURIComponent(CONFIG.shopName + ", " + CONFIG.mapQuery)}&output=embed`;
}

/* ---------- Boot ---------- */
document.documentElement.classList.add("js");
Cart.load();
renderChrome();
fillStatic();
updateBadges();
document.addEventListener("cart:change", () => { updateBadges(); refreshControls(); });

({
  home: initHome,
  shop: initShop,
  cart: initCart,
  celebrations: initCelebrations,
  visit: initVisit
})[document.body.dataset.page]?.();

initReveal();
requestAnimationFrame(() => document.body.classList.add("ready"));
