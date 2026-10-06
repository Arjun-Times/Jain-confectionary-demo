/* =========================================================
   Jain Confectionery — site logic
   Edit CONFIG, CATEGORIES and PRODUCTS below; every page updates itself.
   ========================================================= */

const CONFIG = {
  shopName: "Jain Confectionery",
  city: "Pilibhit",
  since: 2001,              // ← real founding year: drives "25 years", the seal, header and footer
  whatsapp: "919999999999", // country code + number, digits only
  phoneDisplay: "+91 99999 99999",
  address: "Main Market, Pilibhit, Uttar Pradesh 262001",
  openAt: 9,                // 24-hour clock: 9 = 9 AM
  closeAt: 22,              // 22 = 10 PM
  lat: 28.6315,             // shop location (Google Maps → long-press the shop → copy numbers)
  lng: 79.8040,
  mapQuery: "Pilibhit, Uttar Pradesh",
  freeDeliveryMin: 300,
  freeRadiusKm: 1,
  smallOrderFee: 30,
  deliveryTime: "30 to 40 minutes",
  showDemoBar: false        // true shows a "demo preview" strip at the very top
};

const CATEGORIES = [
  { id: "groceries", name: "Groceries & staples", icon: "sack", blurb: "Atta, rice, dal, oil, masala" },
  { id: "snacks", name: "Snacks & namkeen", icon: "packet", blurb: "Bhujia, chips, noodles, nuts" },
  { id: "sweets", name: "Chocolates & sweets", icon: "bar", blurb: "Chocolates, toffees, ice cream" },
  { id: "bakery", name: "Biscuits & bakery", icon: "cookie", blurb: "Bread, cookies, rusk, pastry" },
  { id: "drinks", name: "Drinks & beverages", icon: "bottle", blurb: "Cold drinks, juice, tea, coffee" },
  { id: "dairy", name: "Dairy & breakfast", icon: "milk", blurb: "Milk, paneer, butter, cereal" },
  { id: "care", name: "Personal care & beauty", icon: "pump", blurb: "Soap, shampoo, skincare, makeup" },
  { id: "home", name: "Household & cleaning", icon: "powder", blurb: "Detergent, dishwash, cleaners" }
];

/* Prices are sample values for the demo. `k` = extra search words (Hindi names, common terms).
   Optional: add  img: "images/atta.jpg"  to show a real photo instead of the icon. */
const PRODUCTS = [
  { id: "g1", cat: "groceries", name: "Sharbati wheat atta", unit: "5 kg", price: 265, mrp: 290, icon: "sack", best: true, k: "gehun aata flour" },
  { id: "g2", cat: "groceries", name: "Basmati rice", unit: "1 kg", price: 120, mrp: 140, icon: "sack", k: "chawal" },
  { id: "g3", cat: "groceries", name: "Toor dal", unit: "1 kg", price: 165, mrp: 180, icon: "pouch", k: "arhar pulses" },
  { id: "g4", cat: "groceries", name: "Kachi ghani mustard oil", unit: "1 L", price: 185, mrp: 199, icon: "oil", best: true, k: "sarson tel" },
  { id: "g5", cat: "groceries", name: "Sugar", unit: "1 kg", price: 46, mrp: 48, icon: "pouch", k: "cheeni chini" },
  { id: "g6", cat: "groceries", name: "Iodised salt", unit: "1 kg", price: 28, mrp: 28, icon: "pouch", k: "namak" },
  { id: "g7", cat: "groceries", name: "Garam masala", unit: "100 g", price: 82, mrp: 90, icon: "jar", k: "spices masale" },

  { id: "s1", cat: "snacks", name: "Aloo bhujia", unit: "400 g", price: 110, mrp: 120, icon: "packet", best: true, k: "namkeen" },
  { id: "s2", cat: "snacks", name: "Potato chips", unit: "Family pack", price: 50, mrp: 50, icon: "packet", k: "wafers" },
  { id: "s3", cat: "snacks", name: "Instant noodles", unit: "Pack of 4", price: 56, mrp: 60, icon: "noodles", k: "maggi" },
  { id: "s4", cat: "snacks", name: "Masala peanuts", unit: "200 g", price: 60, mrp: 60, icon: "bowl", k: "moongfali" },
  { id: "s5", cat: "snacks", name: "Roasted makhana", unit: "100 g", price: 120, mrp: 140, icon: "packet", k: "fox nuts" },

  { id: "c1", cat: "sweets", name: "Milk chocolate bar", unit: "50 g", price: 50, mrp: 50, icon: "bar" },
  { id: "c2", cat: "sweets", name: "Assorted chocolate box", unit: "12 pieces", price: 299, mrp: 349, icon: "box", best: true, tag: "Bestseller", k: "gift" },
  { id: "c3", cat: "sweets", name: "Assorted toffees", unit: "200 g jar", price: 99, mrp: 110, icon: "candy", k: "candy" },
  { id: "c4", cat: "sweets", name: "Soan papdi", unit: "500 g box", price: 140, mrp: 160, icon: "box", k: "mithai sweets" },
  { id: "c5", cat: "sweets", name: "Butterscotch ice cream", unit: "700 ml tub", price: 210, mrp: 230, icon: "tub", k: "icecream" },

  { id: "b1", cat: "bakery", name: "Brown bread", unit: "400 g", price: 50, mrp: 50, icon: "bread", k: "double roti" },
  { id: "b2", cat: "bakery", name: "Butter cookies tin", unit: "400 g", price: 220, mrp: 250, icon: "tin", k: "biscuits" },
  { id: "b3", cat: "bakery", name: "Cream biscuits", unit: "Pack of 4", price: 80, mrp: 80, icon: "sandwich" },
  { id: "b4", cat: "bakery", name: "Milk rusk", unit: "300 g", price: 60, mrp: 65, icon: "packet", k: "toast" },
  { id: "b5", cat: "bakery", name: "Black forest pastry", unit: "1 piece", price: 60, mrp: 60, icon: "slice", k: "cake" },

  { id: "d1", cat: "drinks", name: "Cold drink", unit: "2.25 L", price: 99, mrp: 99, icon: "bottle", best: true, k: "soft drink cola" },
  { id: "d2", cat: "drinks", name: "Mango juice", unit: "1 L", price: 110, mrp: 120, icon: "carton" },
  { id: "d3", cat: "drinks", name: "Premium tea", unit: "500 g", price: 260, mrp: 290, icon: "cup", k: "chai patti" },
  { id: "d4", cat: "drinks", name: "Instant coffee", unit: "100 g jar", price: 320, mrp: 345, icon: "jar" },
  { id: "d5", cat: "drinks", name: "Packaged water", unit: "1 L", price: 20, mrp: 20, icon: "water", k: "pani bisleri" },

  { id: "m1", cat: "dairy", name: "Toned milk", unit: "500 ml", price: 29, mrp: 29, icon: "milk", best: true, k: "doodh" },
  { id: "m2", cat: "dairy", name: "Fresh paneer", unit: "200 g", price: 90, mrp: 95, icon: "block" },
  { id: "m3", cat: "dairy", name: "Salted butter", unit: "100 g", price: 62, mrp: 62, icon: "block", k: "makhan" },
  { id: "m4", cat: "dairy", name: "Fresh curd", unit: "400 g", price: 40, mrp: 40, icon: "tub", k: "dahi" },
  { id: "m5", cat: "dairy", name: "Corn flakes", unit: "475 g", price: 185, mrp: 210, icon: "cereal", k: "breakfast" },

  { id: "p1", cat: "care", name: "Bathing soap", unit: "Pack of 4", price: 160, mrp: 180, icon: "soap", best: true, k: "sabun" },
  { id: "p2", cat: "care", name: "Anti-dandruff shampoo", unit: "340 ml", price: 299, mrp: 340, icon: "pump", k: "hair" },
  { id: "p3", cat: "care", name: "Toothpaste", unit: "200 g", price: 105, mrp: 115, icon: "tube", k: "manjan" },
  { id: "p4", cat: "care", name: "Face wash", unit: "100 ml", price: 165, mrp: 185, icon: "tube", k: "skincare" },
  { id: "p5", cat: "care", name: "Moisturising cream", unit: "100 ml", price: 199, mrp: 225, icon: "cream", k: "skincare lotion cosmetics" },
  { id: "p6", cat: "care", name: "Coconut hair oil", unit: "300 ml", price: 140, mrp: 150, icon: "flask", k: "nariyal tel" },
  { id: "p7", cat: "care", name: "Matte lipstick", unit: "4 g", price: 199, mrp: 225, icon: "lipstick", k: "makeup cosmetics" },

  { id: "h1", cat: "home", name: "Detergent powder", unit: "1 kg", price: 125, mrp: 140, icon: "powder", best: true, k: "surf washing" },
  { id: "h2", cat: "home", name: "Liquid detergent", unit: "1 L", price: 230, mrp: 260, icon: "jug", k: "washing" },
  { id: "h3", cat: "home", name: "Dishwash bar", unit: "Pack of 3", price: 60, mrp: 66, icon: "sponge", k: "bartan" },
  { id: "h4", cat: "home", name: "Floor cleaner", unit: "1 L", price: 199, mrp: 220, icon: "spray", k: "phenyl" },
  { id: "h5", cat: "home", name: "Toilet cleaner", unit: "500 ml", price: 105, mrp: 115, icon: "spray" },
  { id: "h6", cat: "home", name: "Handwash refill", unit: "750 ml", price: 99, mrp: 120, icon: "pump" }
];

/* ---------- Line icons (48 × 48 grid, drawn in gold) ---------- */
const ICONS = {
  /* groceries & food */
  sack: '<path d="M15 11c3 1.6 15 1.6 18 0l-1.5 4.5C35.5 19.5 38 25 38 31c0 6.5-4.5 11-14 11s-14-4.5-14-11c0-6 2.5-11.5 6.5-15.5z"/><path d="M16.5 15.5h15"/><path d="M18 28h12M20 33h8"/>',
  pouch: '<path d="M13 8h22l-2 4.5c2.8 3 4 7.5 4 13.5v12a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4V26c0-6 1.2-10.5 4-13.5z"/><path d="M15 12.5h18"/><circle cx="24" cy="28" r="5"/>',
  oil: '<rect x="19.5" y="5" width="9" height="5" rx="1"/><path d="M19 10h10l3 6v23a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3V16z"/><path d="M16 25h16"/><path d="M21 31h6"/>',
  jar: '<rect x="13" y="6" width="22" height="7" rx="2"/><path d="M14 13h20a3 3 0 0 1 3 3v22a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4V16a3 3 0 0 1 3-3z"/><path d="M11 23h26M11 34h26"/>',
  packet: '<path d="M12 14h24V9l-3 2.5-3-2.5-3 2.5-3-2.5-3 2.5-3-2.5-3 2.5-3-2.5z"/><path d="M12 14c-1 9-1 17 0 27h24c1-10 1-18 0-27"/><circle cx="24" cy="27" r="5"/>',
  noodles: '<path d="M7 25h34c0 8.8-7.6 15-17 15S7 33.8 7 25z"/><path d="M14 25c0-4 4-4 4-8M21 25c0-4 4-4 4-8M28 25c0-4 4-4 4-8"/><path d="M31 5l9 15M36 5l6 14"/>',
  bowl: '<path d="M7 25h34c0 8.8-7.6 15-17 15S7 33.8 7 25z"/><circle cx="16.5" cy="21" r="3"/><circle cx="24" cy="19" r="3"/><circle cx="31.5" cy="21" r="3"/>',
  bar: '<path d="M13 26V8.5A2.5 2.5 0 0 1 15.5 6h17A2.5 2.5 0 0 1 35 8.5V26"/><path d="M24 6v20M13 16h22"/><path d="M10 26h28v14a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3z"/><path d="M16 34.5h16"/>',
  box: '<rect x="7" y="18" width="34" height="22" rx="2"/><rect x="5" y="13" width="38" height="5" rx="1.5"/><path d="M24 13v27"/><path d="M24 13c-3-6-10-7-10-3s7 3 10 3zM24 13c3-6 10-7 10-3s-7 3-10 3z"/>',
  candy: '<ellipse cx="24" cy="24" rx="9" ry="7.5"/><path d="M15 24l-9-6v12zM33 24l9-6v12z"/><path d="M21 17.5c2 4 2 9 0 13M27 17.5c-2 4-2 9 0 13"/>',
  tub: '<rect x="8" y="11" width="32" height="7" rx="2"/><path d="M10 18h28l-3 22H13z"/><path d="M15 27h18"/>',
  bread: '<path d="M11 22a7 7 0 0 1 3-13h20a7 7 0 0 1 3 13v17a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2z"/><path d="M20 15l-3 5M27 15l-3 5M34 15l-3 5"/>',
  tin: '<ellipse cx="24" cy="14" rx="15" ry="5"/><path d="M9 14v20c0 2.8 6.7 5 15 5s15-2.2 15-5V14"/><path d="M9 19c0 2.8 6.7 5 15 5s15-2.2 15-5"/><path d="M19 30h10"/>',
  sandwich: '<rect x="8" y="13" width="32" height="8" rx="3"/><rect x="8" y="27" width="32" height="8" rx="3"/><path d="M10 24h28"/><g class="f"><circle cx="15" cy="17" r="1"/><circle cx="24" cy="17" r="1"/><circle cx="33" cy="17" r="1"/></g>',
  cookie: '<circle cx="24" cy="24" r="16"/><g class="f"><circle cx="18" cy="19" r="1.7"/><circle cx="28" cy="17" r="1.7"/><circle cx="30.5" cy="28" r="1.7"/><circle cx="19" cy="30" r="1.7"/><circle cx="24.5" cy="24" r="1.3"/></g>',
  slice: '<path d="M7 37h34V23L7 31z"/><path d="M7 34h34"/><circle cx="33" cy="19.5" r="3"/><path d="M34 16.6c.8-1.8 2.4-3 4.2-3.3"/>',
  bottle: '<path d="M20.5 5h7v5c0 3 4.5 5 4.5 10v3c0 2-2 3-2 5s2 3 2 5v10a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V33c0-2 2-3 2-5s-2-3-2-5v-3c0-5 4.5-7 4.5-10z"/><path d="M16 23h16M16 33h16"/>',
  carton: '<path d="M14 17h20v26H14z"/><path d="M14 17l4-6h12l4 6"/><path d="M28 11l3-7h4"/><path d="M14 25h20"/>',
  cup: '<path d="M10 18h24v12a10 10 0 0 1-10 10h-4a10 10 0 0 1-10-10z"/><path d="M34 21h3a4 4 0 0 1 0 8h-3"/><path d="M18 5c-2 3 2 5 0 8M25 5c-2 3 2 5 0 8"/><path d="M8 44h28"/>',
  water: '<rect x="20.5" y="4.5" width="7" height="4.5" rx="1"/><path d="M20 9h8c3 3 4 5 4 9v22a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3V18c0-4 1-6 4-9z"/><path d="M16 24h16M16 32h16"/>',
  milk: '<path d="M12 15l12-9 12 9v23a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4z"/><path d="M12 15h24"/><path d="M17 27c2.3-2 4.7-2 7 0s4.7 2 7 0"/>',
  block: '<path d="M7 23l9-8h25v12l-9 8H7z"/><path d="M7 23h25v12M32 23l9-8"/>',
  cereal: '<rect x="12" y="6" width="24" height="36" rx="2"/><path d="M12 13h24"/><path d="M17 29h14a7 7 0 0 1-14 0z"/><path d="M20 25l2-3M25 24l1-3M29 25l1.5-2.5"/>',
  /* personal care */
  soap: '<rect x="7" y="20" width="34" height="17" rx="8.5"/><path d="M15 28.5h18"/><circle cx="33" cy="11" r="3.5"/><circle cx="25" cy="9" r="2"/>',
  pump: '<path d="M19 6h10M24 6v6"/><rect x="20" y="12" width="8" height="4" rx="1"/><path d="M17 16h14a4 4 0 0 1 4 4v19a3 3 0 0 1-3 3H16a3 3 0 0 1-3-3V20a4 4 0 0 1 4-4z"/><path d="M13 27h22"/>',
  tube: '<path d="M13 6h22"/><path d="M14 9h20l-4 25H18z"/><path d="M18 34h12v4a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3z"/><path d="M17 17h14"/>',
  cream: '<rect x="9" y="15" width="30" height="8" rx="2"/><path d="M11 23h26v13a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4z"/><path d="M17 31h14"/>',
  flask: '<rect x="20" y="5" width="8" height="5" rx="1"/><path d="M21 10h6v4l6 5v20a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V19l6-5z"/><path d="M15 26h18"/><path d="M21 33h6"/>',
  lipstick: '<rect x="16" y="26" width="16" height="16" rx="1.5"/><path d="M19 26V15l10-6v17"/><path d="M16 32h16"/>',
  /* household */
  powder: '<path d="M9 13h30v29H9z"/><path d="M17 13V8h14v5"/><circle cx="24" cy="28" r="7.5"/><path d="M17 29c2.3 1.6 4.7 1.6 7 0s4.7-1.6 7 0"/>',
  jug: '<rect x="15" y="5" width="9" height="5" rx="1"/><path d="M13 10h13l6 7v22a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3z"/><path d="M32 17h2.5a3.5 3.5 0 0 1 3.5 3.5v7a3.5 3.5 0 0 1-3.5 3.5H32"/><path d="M10 26h22"/>',
  sponge: '<rect x="8" y="22" width="32" height="15" rx="3"/><path d="M8 28h32"/><circle cx="15" cy="14" r="3"/><circle cx="24" cy="11" r="2.2"/><circle cx="32" cy="15" r="2.6"/>',
  spray: '<path d="M18 21h12l3 6v13a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2V27z"/><path d="M20 21v-5h8v5"/><path d="M17 16V9h14l5 3.5h-5V16z"/><path d="M15 31h18"/>',
  gift: '<rect x="8" y="20" width="32" height="20" rx="1.5"/><rect x="6" y="14" width="36" height="6" rx="1.5"/><path d="M24 14v26"/><path d="M24 14c-2-5-9-8-10-4s6 4 10 4zM24 14c2-5 9-8 10-4s-6 4-10 4z"/>',
  /* interface */
  bag: '<path d="M10 16h28l-2 26H12z"/><path d="M18 20v-6a6 6 0 0 1 12 0v6"/>',
  basket: '<path d="M6 19h36l-4 21H10z"/><path d="M15 19l7-11M33 19l-7-11"/><path d="M18 26v8M24 26v8M30 26v8"/>',
  home: '<path d="M8 22L24 9l16 13"/><path d="M12 19v21h24V19"/><path d="M20 40V30h8v10"/>',
  crate: '<rect x="6" y="16" width="36" height="24" rx="2"/><path d="M6 24h36M18 16v24M30 16v24"/><path d="M14 16V9h20v7"/>',
  pin: '<path d="M24 43s13-12.5 13-23a13 13 0 0 0-26 0c0 10.5 13 23 13 23z"/><circle cx="24" cy="20" r="4.5"/>',
  clock: '<circle cx="24" cy="24" r="17"/><path d="M24 14v10l7 4"/>',
  phone: '<path d="M16 7h-5a3 3 0 0 0-3 3c0 17 13 30 30 30a3 3 0 0 0 3-3v-5l-8-3.5-4 4c-5-2.2-9.3-6.5-11.5-11.5l4-4z"/>',
  scooter: '<circle cx="12" cy="35" r="5"/><circle cx="36" cy="35" r="5"/><path d="M17 35h13l4-15h-5"/><path d="M8 25h14v10"/><path d="M8 25v-7h11v7"/>',
  cash: '<rect x="6" y="14" width="36" height="20" rx="2"/><circle cx="24" cy="24" r="4.5"/><path d="M11.5 19v10M36.5 19v10"/>',
  mobile: '<rect x="15" y="6" width="18" height="36" rx="3"/><path d="M21 37h6"/>',
  search: '<circle cx="21" cy="21" r="12"/><path d="M30 30l10 10"/>',
  locate: '<circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="3"/><path d="M24 6v8M24 34v8M6 24h8M34 24h8"/>',
  check: '<circle cx="24" cy="24" r="17"/><path d="M16 24.5l5.5 5.5L32.5 19"/>',
  list: '<path d="M12 6h24a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M17 15h14M17 23h14M17 31h9"/>',
  camera: '<path d="M8 15h7l3-5h12l3 5h7a2 2 0 0 1 2 2v21a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V17a2 2 0 0 1 2-2z"/><circle cx="24" cy="27" r="7"/>',
  repeat: '<path d="M10 20a14 14 0 0 1 24-6l4 4"/><path d="M38 10v8h-8"/><path d="M38 28a14 14 0 0 1-24 6l-4-4"/><path d="M10 38v-8h8"/>',
  diya: '<path d="M8 27h32c-2 7.5-8 11.5-16 11.5S10 34.5 8 27z"/><path d="M40 27l3.5-3"/><path d="M24 23c-3.2-3-3.2-7.4 0-12.5 3.2 5.1 3.2 9.5 0 12.5z"/>',
  balloon: '<path d="M24 32c-7 0-11-7-11-13a11 11 0 0 1 22 0c0 6-4 13-11 13z"/><path d="M22 32h4l-2 3z"/><path d="M24 35c-2.5 3 2.5 5 0 9"/>',
  calendar: '<rect x="7" y="10" width="34" height="31" rx="2"/><path d="M7 19h34M16 6v8M32 6v8"/><path d="M14 27h4M22 27h4M30 27h4M14 34h4M22 34h4"/>',
  snow: '<path d="M24 6v36M8.4 15l31.2 18M8.4 33l31.2-18"/><path d="M19 9.5l5 4 5-4M19 38.5l5-4 5 4"/>',
  tag: '<path d="M8 8h16l17 17-16 16L8 24z"/><circle cx="16" cy="16" r="2.5"/>',
  store: '<path d="M7 18l3-10h28l3 10"/><path d="M7 18c0 3 2 5 5.7 5S18 21 18 18c0 3 2 5 6 5s6-2 6-5c0 3 1.7 5 5.3 5S41 21 41 18"/><path d="M10 23v17h28V23"/><path d="M20 40v-9h8v9"/>',
  whatsapp: '<path d="M24 6a18 18 0 0 0-15.5 27.2L6 42l9-2.4A18 18 0 1 0 24 6z"/><path d="M17.5 16.5c-.8 1-1 2.6 0 4.6 1.8 3.6 4.8 6.6 8.4 8.4 2 1 3.6.8 4.6 0l1-1.6-3.6-2-1.8 1.6c-2-1-3.6-2.6-4.6-4.6l1.6-1.8-2-3.6z"/>'
};

function icon(name, cls = "") {
  return `<svg class="ico ${cls}" viewBox="0 0 48 48" aria-hidden="true" focusable="false">${ICONS[name] || ICONS.bag}</svg>`;
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

function fmtHour(h) {
  const hh = Math.floor(h), mm = Math.round((h - hh) * 60);
  const h12 = hh % 12 || 12, ap = hh >= 12 && hh < 24 ? "PM" : "AM";
  return mm ? `${h12}:${String(mm).padStart(2, "0")} ${ap}` : `${h12} ${ap}`;
}
CONFIG.hours = `Open daily, ${fmtHour(CONFIG.openAt)} to ${fmtHour(CONFIG.closeAt)}`;

function openStatus() {
  const d = new Date(), t = d.getHours() + d.getMinutes() / 60;
  const open = t >= CONFIG.openAt && t < CONFIG.closeAt;
  const text = open
    ? `Open now, closes at ${fmtHour(CONFIG.closeAt)}`
    : `Closed now, opens at ${fmtHour(CONFIG.openAt)}${t >= CONFIG.closeAt ? " tomorrow" : ""}`;
  return { open, text };
}
function statusHTML() {
  const s = openStatus();
  return `<span class="status ${s.open ? "is-open" : "is-closed"}"><i aria-hidden="true"></i>${s.text}</span>`;
}

/* ---------- Cart (saved in the browser) ---------- */
const CART_KEY = "jc_cart_v2";
const LAST_KEY = "jc_last_order_v2";
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
  add(id, n = 1) { this.items[id] = this.qty(id) + n; this.save(); },
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

function readLastOrder() {
  try {
    const o = JSON.parse(localStorage.getItem(LAST_KEY));
    if (!o || !o.items) return null;
    const lines = Object.entries(o.items).filter(([id]) => byId(id));
    return lines.length ? { ...o, lines } : null;
  } catch { return null; }
}

/* ---------- Shared chrome: announcement, header, tab bar, footer ---------- */
const NAV = [
  { href: "index.html", page: "home", label: "Home", short: "Home", icon: "home" },
  { href: "shop.html", page: "shop", label: "Shop", short: "Shop", icon: "bag" },
  { href: "bulk.html", page: "bulk", label: "Bulk orders", short: "Bulk", icon: "crate" },
  { href: "visit.html", page: "visit", label: "Visit us", short: "Visit", icon: "pin" }
];

function monogram(size = 40) {
  const id = "mg" + size;
  return `<svg class="monogram" width="${size}" height="${size}" viewBox="0 0 40 40" aria-hidden="true">
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#7A5C1C"/><stop offset=".45" stop-color="#D9BC74"/><stop offset=".7" stop-color="#A9853A"/><stop offset="1" stop-color="#7A5C1C"/>
    </linearGradient></defs>
    <circle cx="20" cy="20" r="19" fill="#fff" stroke="url(#${id})" stroke-width="1.4"/>
    <circle cx="20" cy="20" r="15.8" fill="none" stroke="url(#${id})" stroke-width=".7"/>
    <text x="20" y="27.6" text-anchor="middle" font-family="Playfair Display, Georgia, serif" font-size="21" font-weight="600" fill="url(#${id})">J</text>
  </svg>`;
}

function announcements() {
  return [
    `Free delivery on orders from ${rupee(CONFIG.freeDeliveryMin)} within ${CONFIG.freeRadiusKm} km`,
    `${CONFIG.hours}`,
    `Send your shopping list on WhatsApp and we’ll pack it for you`,
    `Prices never above MRP`
  ];
}

function renderChrome() {
  const page = document.body.dataset.page;
  const cur = p => (p === page ? ' aria-current="page"' : "");

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <nav class="wrap nav" aria-label="Main">
      <a class="brand" href="index.html">
        ${monogram(42)}
        <span class="brand-name">${esc(CONFIG.shopName)}<small>General store, ${esc(CONFIG.city)}</small></span>
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

  const ann = document.createElement("div");
  ann.className = "announce";
  const msgs = announcements();
  ann.innerHTML = `<div class="wrap announce-row"><span class="announce-msg">${esc(msgs[0])}</span><span class="announce-status" data-status></span></div>`;
  document.body.prepend(ann);
  let i = 0, paused = false;
  ann.addEventListener("mouseenter", () => (paused = true));
  ann.addEventListener("mouseleave", () => (paused = false));
  setInterval(() => {
    if (paused || document.hidden) return;
    const el = $(".announce-msg", ann);
    el.classList.add("out");
    setTimeout(() => { i = (i + 1) % msgs.length; el.textContent = msgs[i]; el.classList.remove("out"); }, reduceMotion ? 0 : 380);
  }, 4200);

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
    `<a href="cart.html" class="tab-cart"${cur("cart")}>${icon("basket")}<span>Cart</span><span class="badge" data-cart-count hidden>0</span></a>`
  ].join("");
  document.body.append(tabbar);

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="wrap foot-grid">
      <div class="foot-brand">
        ${monogram(52)}
        <div>
          <strong>${esc(CONFIG.shopName)}</strong>
          <p>${esc(CONFIG.address)}<br>${esc(CONFIG.hours)}</p>
          <p class="foot-status" data-status></p>
        </div>
      </div>
      <div class="foot-col">
        <h2>Shop</h2>
        ${CATEGORIES.map(c => `<a href="shop.html?cat=${c.id}">${c.name}</a>`).join("")}
      </div>
      <div class="foot-col">
        <h2>Store</h2>
        ${NAV.filter(n => n.page !== "shop").map(n => `<a href="${n.href}">${n.label}</a>`).join("")}
        <a href="cart.html">Your cart</a>
        <a href="tel:+${CONFIG.whatsapp}">Call ${esc(CONFIG.phoneDisplay)}</a>
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

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 8);
    document.body.classList.toggle("show-wa", window.scrollY > 480);
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

/* Fill static placeholders: icons, config values, delivery terms, years, live status */
function fillStatic() {
  $$("[data-icon]").forEach(el => { el.innerHTML = icon(el.dataset.icon); });
  $$("[data-config]").forEach(el => (el.textContent = CONFIG[el.dataset.config]));
  $$("[data-free-min]").forEach(el => (el.textContent = rupee(CONFIG.freeDeliveryMin)));
  $$("[data-free-km]").forEach(el => (el.textContent = CONFIG.freeRadiusKm + " km"));
  $$("[data-eta]").forEach(el => (el.textContent = CONFIG.deliveryTime));
  $$("[data-years]").forEach(el => (el.textContent = years()));
  $$("[data-since]").forEach(el => (el.textContent = CONFIG.since));
  $$("[data-product-count]").forEach(el => (el.textContent = PRODUCTS.length));
  $$("[data-shelf-count]").forEach(el => (el.textContent = CATEGORIES.length));
  $$("[data-wa]").forEach(a => (a.href = waLink(a.dataset.wa)));
  $$("[data-tel]").forEach(a => (a.href = "tel:+" + CONFIG.whatsapp));
  $$("[data-status]").forEach(el => (el.innerHTML = statusHTML()));
}

/* ---------- Motion: scroll reveal + number count-up ---------- */
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

function initCounters() {
  const els = $$("[data-count]");
  if (reduceMotion || !("IntersectionObserver" in window)) return;
  const run = el => {
    const target = parseInt(el.textContent, 10);
    if (!target) return;
    const start = performance.now(), dur = 1600;
    const tick = now => {
      const t = Math.min(1, (now - start) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(tick);
    };
    el.textContent = 0;
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
  }, { threshold: 0.5 });
  els.forEach(el => io.observe(el));
}

/* Gold dot that flies from the Add button into the cart */
function flyToCart(fromRect) {
  if (reduceMotion || !fromRect) return;
  const target = $$(".site-header .cart-link, .tabbar .tab-cart").find(el => el.getBoundingClientRect().width > 0);
  if (!target) return;
  const b = target.getBoundingClientRect();
  const sx = fromRect.left + fromRect.width / 2, sy = fromRect.top + fromRect.height / 2;
  const dx = b.left + b.width / 2 - sx, dy = b.top + b.height / 2 - sy;
  const dot = document.createElement("span");
  dot.className = "fly-dot";
  dot.style.left = sx - 9 + "px";
  dot.style.top = sy - 9 + "px";
  document.body.append(dot);
  const anim = dot.animate([
    { transform: "translate(0, 0) scale(1)", opacity: 1 },
    { transform: `translate(${dx * 0.55}px, ${dy * 0.5 - 90}px) scale(.85)`, opacity: 1, offset: 0.55 },
    { transform: `translate(${dx}px, ${dy}px) scale(.3)`, opacity: 0.4 }
  ], { duration: 780, easing: "cubic-bezier(.45, 0, .25, 1)" });
  anim.onfinish = () => {
    dot.remove();
    target.classList.remove("ping"); void target.offsetWidth; target.classList.add("ping");
  };
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
      <p class="p-cat">${esc(catOf(p.cat).name)}</p>
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
    const rect = btn.getBoundingClientRect();
    const wasEmpty = !Cart.qty(id);
    Cart.add(id);
    flyToCart(rect);
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
        <stop offset="0" stop-color="#7A5C1C"/><stop offset=".3" stop-color="#CDAE63"/>
        <stop offset=".45" stop-color="#EFDCA4"/><stop offset=".62" stop-color="#B8954A"/>
        <stop offset="1" stop-color="#6F5419"/>
      </linearGradient>
      <linearGradient id="sg-silver" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#F6F7F8"/><stop offset=".35" stop-color="#BFC5CC"/>
        <stop offset=".55" stop-color="#F1F2F4"/><stop offset=".8" stop-color="#A3AAB2"/>
        <stop offset="1" stop-color="#E4E7EA"/>
      </linearGradient>
      <radialGradient id="sg-face" cx=".38" cy=".32" r=".8">
        <stop offset="0" stop-color="#FFFFFF"/><stop offset=".7" stop-color="#F3F4F6"/><stop offset="1" stop-color="#DDE1E5"/>
      </radialGradient>
      <path id="sg-ring" d="M200,200 m-152,0 a152,152 0 1,1 304,0 a152,152 0 1,1 -304,0"/>
    </defs>
    <circle cx="200" cy="200" r="190" fill="url(#sg-silver)"/>
    <circle cx="200" cy="200" r="178" fill="url(#sg-face)"/>
    <circle class="s-draw" cx="200" cy="200" r="178" fill="none" stroke="url(#sg-gold)" stroke-width="1.8" pathLength="1"/>
    <circle class="s-draw d2" cx="200" cy="200" r="126" fill="none" stroke="url(#sg-gold)" stroke-width="1.4" pathLength="1"/>
    <circle class="s-draw d3" cx="200" cy="200" r="120" fill="none" stroke="url(#sg-gold)" stroke-width=".8" pathLength="1"/>
    <g class="s-ring">
      <text font-family="Playfair Display, Georgia, serif" font-size="17.5" font-weight="600" fill="url(#sg-gold)">
        <textPath href="#sg-ring" textLength="945" lengthAdjust="spacing">${esc(ring)}</textPath>
      </text>
    </g>
    <g class="s-core">
      <text x="200" y="236" text-anchor="middle" font-family="Playfair Display, Georgia, serif" font-size="150" font-weight="600" fill="url(#sg-gold)">J</text>
      <path d="M160 262h80" stroke="url(#sg-gold)" stroke-width="1.2"/>
      <text x="200" y="289" text-anchor="middle" font-family="Playfair Display, Georgia, serif" font-size="18" font-style="italic" font-weight="500" fill="#7A5C1C">Since ${CONFIG.since}</text>
    </g>
  </svg>
  <span class="seal-sheen" aria-hidden="true"></span>`;
}

function initHome() {
  const seal = $("#seal");
  if (seal) seal.innerHTML = sealHTML();

  const cats = $("#home-cats");
  if (cats) {
    cats.innerHTML = CATEGORIES.map(c => {
      const n = PRODUCTS.filter(p => p.cat === c.id).length;
      return `<a class="cat-tile" href="shop.html?cat=${c.id}">
        <span class="cat-ico">${icon(c.icon)}</span>
        <strong>${c.name}</strong>
        <span class="cat-blurb">${c.blurb}</span>
        <span class="count">${n} items</span>
      </a>`;
    }).join("");
  }

  const best = $("#home-best");
  if (best) best.innerHTML = PRODUCTS.filter(p => p.best).map(productCard).join("");

  // Welcome-back card for repeat customers
  const again = $("#order-again");
  const last = readLastOrder();
  if (again && last) {
    const count = last.lines.reduce((n, [, q]) => n + q, 0);
    const total = last.lines.reduce((n, [id, q]) => n + byId(id).price * q, 0);
    const when = new Date(last.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" });
    $("#again-text").textContent = `Your order on ${when} had ${count} item${count === 1 ? "" : "s"} worth ${rupee(total)}. Add the same items to your cart in one tap.`;
    again.hidden = false;
    $("#again-btn").addEventListener("click", () => {
      last.lines.forEach(([id, q]) => { Cart.items[id] = Cart.qty(id) + q; });
      Cart.save();
      location.href = "cart.html";
    });
  }

  // "Send your list" — the parchi
  const listForm = $("#list-form");
  if (listForm) {
    listForm.addEventListener("submit", e => {
      e.preventDefault();
      const list = listForm.elements.list.value.trim();
      if (!list) { listForm.elements.list.focus(); toast("Write a few items first"); return; }
      const msg = [`*Shopping list for ${CONFIG.shopName}*`, "", list, "", "Please confirm the total and delivery time."].join("\n");
      window.open(waLink(msg), "_blank", "noopener");
    });
  }
}

/* ---------- Shop ---------- */
function initShop() {
  const params = new URLSearchParams(location.search);
  let active = CATEGORIES.some(c => c.id === params.get("cat")) ? params.get("cat") : "all";
  let query = (params.get("q") || "").trim().toLowerCase();
  let sort = "popular";
  const searchEl = $("#search");
  searchEl.value = params.get("q") || "";

  const chips = $("#chips");
  chips.innerHTML = [{ id: "all", name: "All" }, ...CATEGORIES]
    .map(c => {
      const n = c.id === "all" ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === c.id).length;
      return `<button class="chip" data-cat="${c.id}" aria-pressed="${c.id === active}">${c.name}<span>${n}</span></button>`;
    })
    .join("");
  requestAnimationFrame(() => $(`.chip[aria-pressed="true"]`, chips)?.scrollIntoView({ inline: "center", block: "nearest" }));

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

  searchEl.addEventListener("input", e => { query = e.target.value.trim().toLowerCase(); render(); });
  $("#sort").addEventListener("change", e => { sort = e.target.value; render(); });

  const matches = p => {
    if (!query) return true;
    const hay = `${p.name} ${catOf(p.cat).name} ${p.k || ""}`.toLowerCase();
    return query.split(/\s+/).every(w => hay.includes(w));
  };

  function render() {
    let list = PRODUCTS.filter(p => (active === "all" || p.cat === active) && matches(p));
    const order = PRODUCTS.map(p => p.id);
    const save = p => (p.mrp - p.price) / p.mrp;
    list = [...list].sort({
      popular: (a, b) => (b.best ? 1 : 0) - (a.best ? 1 : 0) || order.indexOf(a.id) - order.indexOf(b.id),
      low: (a, b) => a.price - b.price,
      high: (a, b) => b.price - a.price,
      savings: (a, b) => save(b) - save(a)
    }[sort]);

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
           <p>The shop stocks much more than the website shows. Ask on WhatsApp and we’ll check the shelf.</p>
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

  // delivery-time options that are still possible today
  const when = $("#when");
  if (when) {
    const now = new Date().getHours();
    const slots = [[9, 12, "morning, 9 AM to 12 PM"], [12, 16, "afternoon, 12 to 4 PM"], [16, 19, "evening, 4 to 7 PM"], [19, CONFIG.closeAt, `night, 7 to ${fmtHour(CONFIG.closeAt)}`]];
    const opts = ["As soon as possible", ...slots.filter(([, end]) => end > now + 1).map(s => `Today ${s[2]}`), ...slots.map(s => `Tomorrow ${s[2]}`)];
    when.innerHTML = opts.map(o => `<option>${esc(o)}</option>`).join("");
  }

  function render() {
    if (!done.hidden) return;
    const lines = Cart.lines();
    const has = lines.length > 0;
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
      f.extra?.trim() ? `\n*Also need (not on website):*\n${f.extra.trim()}` : null,
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
      `Deliver: ${f.when}`,
      `Payment: ${f.pay}`,
      f.note?.trim() ? `Note: ${f.note.trim()}` : null
    ].filter(l => l !== null).join("\n");

    try { localStorage.setItem(LAST_KEY, JSON.stringify({ items: Cart.items, date: Date.now() })); } catch { /* ignore */ }
    window.open(waLink(msg), "_blank", "noopener");
    $("#cart-layout").hidden = true;
    done.hidden = false;
    done.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  });

  $("#new-order").addEventListener("click", () => { Cart.clear(); location.href = "shop.html"; });
}

/* ---------- Bulk orders ---------- */
function initBulk() {
  const form = $("#enquiry");
  const date = $("#e-date");
  if (date) date.min = new Date().toISOString().slice(0, 10);
  $$("[data-pick]").forEach(btn => btn.addEventListener("click", () => {
    $("#e-type").value = btn.dataset.pick;
    form.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    setTimeout(() => $("#e-name").focus({ preventScroll: true }), reduceMotion ? 0 : 600);
  }));
  form.addEventListener("submit", e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(form));
    if (!f.name?.trim()) { form.elements.name.focus(); toast("Enter your name to send the enquiry"); return; }
    const msg = [
      `*Bulk order enquiry for ${CONFIG.shopName}*`,
      `Name: ${f.name.trim()}`,
      `Order type: ${f.type}`,
      f.date ? `Date needed: ${f.date}` : null,
      f.qty?.trim() ? `Quantity or budget: ${f.qty.trim()}` : null,
      f.details?.trim() ? `Details: ${f.details.trim()}` : null
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  });
}

/* ---------- Visit ---------- */
function initVisit() {
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
  bulk: initBulk,
  visit: initVisit
})[document.body.dataset.page]?.();

initReveal();
initCounters();
requestAnimationFrame(() => document.body.classList.add("ready"));
setInterval(() => $$("[data-status]").forEach(el => (el.innerHTML = statusHTML())), 60000);
