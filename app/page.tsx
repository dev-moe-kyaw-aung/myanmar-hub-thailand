"use client";
import Link from "next/link";
import Shell from "@/components/Shell";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { Sword, ShieldAlert, Store, TrendingUp } from "lucide-react";

export default function HomePage() {
  const { tr } = useI18n();
  const { xp, level, badges, completedQuests } = useStore();

  const modules = [
    {
      href: "/journey",
      icon: Sword,
      title: tr("journey"),
      sub: tr("journeySub"),
      color: "from-gold/90 to-orange-400",
      emoji: "🏆",
    },
    {
      href: "/harbor",
      icon: ShieldAlert,
      title: tr("harbor"),
      sub: tr("harborSub"),
      color: "from-sky-500 to-teal-500",
      emoji: "🛡️",
    },
    {
      href: "/business",
      icon: Store,
      title: tr("business"),
      sub: tr("businessSub"),
      color: "from-teal to-emerald-600",
      emoji: "🏪",
    },
  ];

  return (
    <Shell>
      {/* Hero */}
      <section className="rounded-3xl p-6 md:p-10 bg-gradient-to-br from-deepblue to-[#152B52] text-white shadow-lg">
        <div className="flex flex-wrap items-center gap-3">
          <span className="chip bg-gold text-deepblue">🇲🇲 × 🇹🇭</span>
          <span className="chip bg-white/10 text-white">Myanmar Hub Thailand</span>
        </div>
        <h1 className="mt-4 text-2xl md:text-4xl font-extrabold leading-snug">
          {tr("tagline")}
        </h1>
        <p className="mt-2 text-white/70 max-w-2xl">
          {tr("journey")} · {tr("harbor")} · {tr("business")} — ဒီတစ်နေရာတည်းမှာ။
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <span className="chip bg-white/10">⭐ {tr("level")} {level}</span>
          <span className="chip bg-white/10">✨ {xp} {tr("xp")}</span>
          <span className="chip bg-white/10">🏅 {badges.length} {tr("badges")}</span>
          <span className="chip bg-white/10">✅ {completedQuests.length} {tr("quests")}</span>
        </div>
      </section>

      {/* Module Cards */}
      <section className="mt-6 grid md:grid-cols-3 gap-4">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <Link
              key={m.href}
              href={m.href}
              className={`card group relative overflow-hidden hover:-translate-y-0.5 transition`}
            >
              <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${m.color}`} />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${m.color} text-white`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-lg">{m.title}</h3>
                </div>
                <p className="mt-2 text-sm text-black/60 dark:text-white/60">{m.sub}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-3xl">{m.emoji}</span>
                  <span className="text-sm font-semibold text-deepblue dark:text-gold">
                    {tr("open")} →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* Quick Tips */}
      <section className="mt-6 card">
        <div className="flex items-center gap-2 font-bold">
          <TrendingUp size={18} className="text-jade" />
          ဒီနေ့အတွက် အကြံပြုချက်
        </div>
        <ul className="mt-3 space-y-2 text-sm">
          <li>• 🛡️ သင့် Work Permit သက်တမ်းကို Safe Harbor တွင် စစ်ဆေးပါ။</li>
          <li>• 🏆 ယနေ့ Quest တစ်ခု ပြီးမြောက်အောင် လုပ်ပါ — XP ရမည်။</li>
          <li>• 🏪 သင့်ဆိုင်တွင် ကုန်ပစ္စည်း ၄ မျိုး ကုန်နည်းနေသည်။</li>
        </ul>
      </section>
    </Shell>
  );
}
