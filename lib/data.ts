export type Quest = {
  id: string;
  chapter: string;
  title: string;
  desc: string;
  xp: number;
  badge?: string;
  icon: string;
};

export const quests: Quest[] = [
  { id: "q1", chapter: "Ch.1 · Arrival", title: "SIM ကတ်ဝယ်ပြီး ဖုန်းနံပါတ်ရယူ", desc: "7-Eleven / AIS / True တွင် ဝယ်နိုင်သည်", xp: 40, icon: "📱" },
  { id: "q2", chapter: "Ch.1 · Arrival", title: "TM30 နေအိမ်မှတ်ပုံတင်", desc: "ပိုင်ရှင်အား ၂၄ နာရီအတွင်း တင်ခိုင်း", xp: 60, badge: "Safe Traveler", icon: "🏠" },
  { id: "q3", chapter: "Ch.2 · Work", title: "Work Permit လျှောက်ထား", desc: "နယ်စပ်/ထိုင်းအလုပ်သမား ဌာန", xp: 120, badge: "Legal Pro", icon: "🛠️" },
  { id: "q4", chapter: "Ch.2 · Work", title: "စာချုပ်ဖတ်ပြီး နားလည်", desc: "Safe Harbor ဖြင့် ဘာသာပြန်", xp: 80, icon: "📄" },
  { id: "q5", chapter: "Ch.3 · Home", title: "ဘဏ်အကောင့်ဖွင့် (Kasikorn/SCB)", desc: "Passport + Work Permit လိုအပ်", xp: 100, badge: "Money Wise", icon: "🏦" },
  { id: "q6", chapter: "Ch.4 · Health", title: "ဆေးခန်း/ဆေးရုံ မှတ်ပုံတင်", desc: "Social Security သို့မဟုတ် ကိုယ်ပိုင်ဆေးခန်း", xp: 90, icon: "🏥" },
  { id: "q7", chapter: "Ch.5 · Growth", title: "ထိုင်းစကား အခြေခံ ၅၀ ခွန်း", desc: "Golden Journey အတွင်း သင်ခန်းစာ", xp: 150, badge: "Thai Master", icon: "🗣️" },
];

export const hospitals = [
  { name: "Bangkok Christian Hospital", area: "Silom", phone: "02-235-1000", note: "Myanmar interpreter on-site" },
  { name: "Samitivej Srinakarin", area: "Srinakarin", phone: "02-022-2222", note: "24h emergency, English/Thai" },
  { name: "Thai Red Cross (Chulalongkorn)", area: "Pathumwan", phone: "1669", note: "Government-subsidized" },
  { name: "Mae Sot General Hospital", area: "Mae Sot", phone: "055-532-555", note: "Border-area, Burmese friendly" },
];

export const businessKpis = {
  todayRevenue: 12840,
  orders: 87,
  lowStock: 4,
  staffOnShift: 5,
};

export const inventory = [
  { sku: "SKU-101", name: "Myanmar Tea Leaves (Kg)", stock: 2, threshold: 5, status: "low" },
  { sku: "SKU-102", name: "Jasmine Rice 5kg", stock: 28, threshold: 10, status: "ok" },
  { sku: "SKU-103", name: "Palm Oil 1L", stock: 3, threshold: 8, status: "low" },
  { sku: "SKU-104", name: "Thai Green Curry Paste", stock: 44, threshold: 15, status: "ok" },
  { sku: "SKU-105", name: "Lahpet (Fermented Tea)", stock: 1, threshold: 4, status: "low" },
];

export const staff = [
  { name: "Ko Aung", role: "Cashier", shift: "Morning", permit: "Valid 09/2026" },
  { name: "Ma Thida", role: "Cook", shift: "Morning", permit: "Valid 11/2026" },
  { name: "Ko Zaw", role: "Delivery", shift: "Evening", permit: "Renew 10/2025" },
  { name: "Ma Hnin", role: "Cashier", shift: "Evening", permit: "Valid 03/2027" },
  { name: "Ko Min", role: "Cook", shift: "Morning", permit: "Valid 06/2026" },
];

export const leaderboard = [
  { name: "Ko Aung", xp: 820, level: 9 },
  { name: "Ma Thida", xp: 745, level: 8 },
  { name: "Ko Zaw", xp: 610, level: 7 },
  { name: "You", xp: 0, level: 1 }, // replaced dynamically
];

export const allBadges = [
  { id: "Newcomer", icon: "🌱", label: "အသစ်ရောက်" },
  { id: "Safe Traveler", icon: "🛡️", label: "ဘေးကင်းခရီးသွား" },
  { id: "Legal Pro", icon: "⚖️", label: "ဥပဒေကျွမ်းကျင်" },
  { id: "Money Wise", icon: "💰", label: "ငွေကြေးပညာရှိ" },
  { id: "Thai Master", icon: "🗣️", label: "ထိုင်းစကားဆရာ" },
  { id: "Community Helper", icon: "🤝", label: "အသိုင်းအဝိုင်းကူညီ" },
];
