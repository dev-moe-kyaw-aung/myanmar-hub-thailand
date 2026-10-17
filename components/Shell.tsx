"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { Home, Sword, ShieldAlert, Store, Moon, Sun } from "lucide-react";

export default function Shell({ children }: { children: React.ReactNode }) {
  const { tr, lang, setLang } = useI18n();
  const { xp, level, darkMode, toggleDark } = useStore();
  const path = usePathname();

  const nav = [
    { href: "/", label: tr("home"), icon: Home },
    { href: "/journey", label: tr("journey"), icon: Sword },
    { href: "/harbor", label: tr("harbor"), icon: ShieldAlert },
    { href: "/business", label: tr("business"), icon: Store },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-[#0F1524]/80 backdrop-blur border-b border-black/5 dark:border-white/10">
        <div className="max-w-6xl mx-auto flex items-center gap-3 px-4 py-3">
          <Link href="/" className="font-extrabold text-lg tracking-tight">
            <span className="text-gold">◆</span>{" "}
            <span className="text-deepblue dark:text-white">{tr("appName")}</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 text-xs font-semibold bg-gold/15 text-gold px-2 py-1 rounded-full">
              ⭐ {tr("level")} {level} · {xp} {tr("xp")}
            </div>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              className="text-sm rounded-lg bg-white dark:bg-[#141B2D] border border-black/10 dark:border-white/15 px-2 py-1"
            >
              <option value="my">မြန်မာ</option>
              <option value="th">ไทย</option>
              <option value="en">EN</option>
            </select>
            <button onClick={toggleDark} className="btn-ghost !p-2" aria-label="theme">
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">{children}</main>

      <nav className="sticky bottom-0 z-40 bg-white/90 dark:bg-[#0F1524]/90 backdrop-blur border-t border-black/5 dark:border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-4">
          {nav.map((n) => {
            const active = path === n.href;
            const Icon = n.icon;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`flex flex-col items-center gap-1 py-3 text-xs font-medium ${
                  active ? "text-gold" : "text-black/60 dark:text-white/60"
                }`}
              >
                <Icon size={20} />
                <span>{n.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <footer className="text-center text-xs text-black/40 dark:text-white/40 py-4">
        {tr("credits")} · github.com/dev-moe-kyaw-aung
      </footer>
    </div>
  );
}
