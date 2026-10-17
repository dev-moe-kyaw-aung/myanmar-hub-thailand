"use client";
import { useState } from "react";
import Shell from "@/components/Shell";
import { useI18n } from "@/lib/i18n";
import { hospitals } from "@/lib/data";
import { HeartPulse, Scale, ShieldAlert, FileText, Users, Phone } from "lucide-react";

export default function HarborPage() {
  const { tr } = useI18n();
  const [sos, setSos] = useState(false);

  const cards = [
    {
      icon: HeartPulse,
      title: tr("health"),
      desc: "ကျန်းမာရေး၊ ဆေးရုံ၊ ဆေးဝါး၊ Telemedicine",
      color: "from-rose-400 to-red-500",
    },
    {
      icon: Scale,
      title: tr("legal"),
      desc: "Work Permit, Visa, စာချုပ်၊ ဥပဒေအခွင့်အရေး",
      color: "from-indigo-400 to-blue-600",
    },
    {
      icon: ShieldAlert,
      title: tr("safety"),
      desc: "SOS, Scam Alerts, ရဲစခန်း၊ လုံခြုံသောလမ်းကြောင်း",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: FileText,
      title: tr("documents"),
      desc: "Passport, TM30, 90-day report, Encryption Vault",
      color: "from-emerald-400 to-teal-600",
    },
    {
      icon: Users,
      title: tr("family"),
      desc: "မိသားစု dashboard, နေ့စဉ် check-in",
      color: "from-pink-400 to-fuchsia-600",
    },
  ];

  return (
    <Shell>
      <section className="rounded-2xl p-6 bg-gradient-to-br from-sky-50 to-teal-50 dark:from-[#0F1E2E] dark:to-[#0F1524] border border-sky-100 dark:border-white/10">
        <h1 className="text-2xl font-extrabold text-teal">🛡️ {tr("harbor")}</h1>
        <p className="text-sm text-black/60 dark:text-white/60 mt-1">
          {tr("harborSub")} · Emergency-ready · Offline-first
        </p>
      </section>

      {/* SOS */}
      <button
        onClick={() => setSos(true)}
        className="fixed bottom-20 right-4 z-30 w-16 h-16 rounded-full bg-danger text-white shadow-xl flex items-center justify-center text-xs font-extrabold animate-pulse"
      >
        SOS
      </button>

      {sos && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="card max-w-md w-full">
            <h3 className="text-lg font-extrabold text-danger">🚨 Emergency</h3>
            <p className="text-sm mt-2">အောက်ပါနံပါတ်များကို ခေါ်ဆိုနိုင်ပါသည်:</p>
            <div className="mt-3 space-y-2">
              <a className="btn-primary w-full" href="tel:191">📞 191 — Police</a>
              <a className="btn-primary w-full" href="tel:1669">📞 1669 — Ambulance</a>
              <a className="btn-primary w-full" href="tel:1155">📞 1155 — Tourist Police</a>
            </div>
            <button onClick={() => setSos(false)} className="btn-ghost w-full mt-3">
              ပိတ်မည်
            </button>
          </div>
        </div>
      )}

      {/* Modules */}
      <section className="mt-4 grid md:grid-cols-3 gap-3">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="card hover:-translate-y-0.5 transition cursor-pointer">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} text-white flex items-center justify-center`}>
                <Icon size={18} />
              </div>
              <div className="mt-3 font-bold">{c.title}</div>
              <div className="text-xs text-black/60 dark:text-white/60 mt-1">{c.desc}</div>
            </div>
          );
        })}
      </section>

      {/* Hospitals */}
      <section className="card mt-6">
        <div className="font-bold">🏥 အနီးဆုံး ဆေးရုံများ (Myanmar-friendly)</div>
        <div className="mt-3 space-y-2">
          {hospitals.map((h) => (
            <div
              key={h.name}
              className="flex items-center justify-between p-3 rounded-xl border border-black/5 dark:border-white/10"
            >
              <div>
                <div className="font-semibold text-sm">{h.name}</div>
                <div className="text-xs text-black/50 dark:text-white/50">
                  {h.area} · {h.note}
                </div>
              </div>
              <a href={`tel:${h.phone}`} className="btn-ghost text-xs">
                <Phone size={14} /> {h.phone}
              </a>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
