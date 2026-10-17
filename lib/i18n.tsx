"use client";
import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "my" | "th" | "en";

type Dict = Record<string, Record<Lang, string>>;

export const t: Dict = {
  appName: { my: "မြန်မာ ဟပ် ထိုင်းလန်", th: "เมียนมาร์ ฮับ ไทยแลนด์", en: "Myanmar Hub Thailand" },
  tagline: {
    my: "ထိုင်းရောက် မြန်မာများအတွက် ဘဝလမ်းညွှန် စူပါအက်ပ်",
    th: "ซูเปอร์แอปสำหรับคนเมียนมาในประเทศไทย",
    en: "The super-app for Myanmar people in Thailand",
  },
  journey: { my: "ရွှေခရီး", th: "โกลเดน เจอร์นีย์", en: "Golden Journey" },
  journeySub: {
    my: "ဘဝကို Game ကစားသလို အဆင့်ဆင့် တက်လှမ်းပါ",
    th: "ใช้ชีวิตเหมือนเล่นเกม ไต่ระดับทีละขั้น",
    en: "Level up your life, one quest at a time",
  },
  harbor: { my: "ဘေးကင်းဆိပ်ကမ်း", th: "เซฟ ฮาร์เบอร์", en: "Safe Harbor" },
  harborSub: {
    my: "ကျန်းမာရေး၊ ဥပဒေ၊ ဘေးကင်းရေး ကာကွယ်စောင့်ရှောက်သူ",
    th: "ผู้พิทักษ์สุขภาพ กฎหมาย และความปลอดภัย",
    en: "Guardian for health, legal & safety",
  },
  business: { my: "စီးပွားရေးစက်ဝိုင်း", th: "ไมแอนมาร์ บิซิเนส เซอร์เคิล", en: "Business Circle" },
  businessSub: {
    my: "မြန်မာစီးပွားရေးလုပ်ငန်းများအတွက် Operating System",
    th: "ระบบปฏิบัติการสำหรับธุรกิจเมียนมา",
    en: "The OS for Myanmar-owned businesses",
  },
  open: { my: "ဖွင့်မည်", th: "เปิด", en: "Open" },
  lang: { my: "ဘာသာ", th: "ภาษา", en: "Language" },
  credits: {
    my: "Ideas by DeepSeek · Development by Moekyawaung",
    th: "Ideas by DeepSeek · Development by Moekyawaung",
    en: "Ideas by DeepSeek · Development by Moekyawaung",
  },
  xp: { my: "XP", th: "XP", en: "XP" },
  level: { my: "အဆင့်", th: "เลเวล", en: "Level" },
  quests: { my: "တာဝန်များ", th: "เควสต์", en: "Quests" },
  badges: { my: "တံဆိပ်များ", th: "แบดจ์", en: "Badges" },
  leaderboard: { my: "အဆင့်ဇယား", th: "ลีดเดอร์บอร์ด", en: "Leaderboard" },
  sos: { my: "SOS အရေးပေါ်", th: "SOS ฉุกเฉิน", en: "SOS Emergency" },
  health: { my: "ကျန်းမာရေး", th: "สุขภาพ", en: "Health" },
  legal: { my: "ဥပဒေ", th: "กฎหมาย", en: "Legal" },
  safety: { my: "ဘေးကင်းရေး", th: "ความปลอดภัย", en: "Safety" },
  documents: { my: "စာရွက်စာတမ်း", th: "เอกสาร", en: "Documents" },
  family: { my: "မိသားစု", th: "ครอบครัว", en: "Family" },
  dashboard: { my: "ဒက်ရှ်ဘုတ်", th: "แดชบอร์ด", en: "Dashboard" },
  pos: { my: "POS", th: "POS", en: "POS" },
  inventory: { my: "ကုန်ပစ္စည်း", th: "สินค้าคงคลัง", en: "Inventory" },
  staff: { my: "ဝန်ထမ်း", th: "พนักงาน", en: "Staff" },
  finance: { my: "ငွေကြေး", th: "การเงิน", en: "Finance" },
  home: { my: "ပင်မ", th: "หน้าหลัก", en: "Home" },
  todayRevenue: { my: "ယနေ့ အရောင်း", th: "ยอดขายวันนี้", en: "Today's Revenue" },
  lowStock: { my: "ကုန်နည်း", th: "สต็อกต่ำ", en: "Low Stock" },
  staffOnShift: { my: "အလုပ်ခွင်ရှိ ဝန်ထမ်း", th: "พนักงานเข้ากะ", en: "Staff on shift" },
  expiring: { my: "သက်တမ်းကုန်မည်", th: "ใกล้หมดอายุ", en: "Expiring soon" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; tr: (k: keyof typeof t) => string };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("my");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved) setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const tr = (k: keyof typeof t) => t[k]?.[lang] ?? String(k);
  return <I18nCtx.Provider value={{ lang, setLang, tr }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
