"use client";
import { createContext, useContext, useEffect, useState } from "react";

type State = {
  xp: number;
  level: number;
  completedQuests: string[];
  badges: string[];
  darkMode: boolean;
  addXp: (n: number) => void;
  completeQuest: (id: string, xp: number, badge?: string) => void;
  toggleDark: () => void;
};

const Ctx = createContext<State | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [xp, setXp] = useState(120);
  const [completedQuests, setCompleted] = useState<string[]>([]);
  const [badges, setBadges] = useState<string[]>(["Newcomer"]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const raw = typeof window !== "undefined" && localStorage.getItem("store");
    if (raw) {
      try {
        const p = JSON.parse(raw);
        setXp(p.xp ?? 120);
        setCompleted(p.completedQuests ?? []);
        setBadges(p.badges ?? ["Newcomer"]);
        setDarkMode(!!p.darkMode);
      } catch {}
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("store", JSON.stringify({ xp, completedQuests, badges, darkMode }));
      document.documentElement.classList.toggle("dark", darkMode);
    }
  }, [xp, completedQuests, badges, darkMode]);

  const level = Math.max(1, Math.floor(xp / 100) + 1);

  const addXp = (n: number) => setXp((v) => v + n);
  const completeQuest = (id: string, xpAmt: number, badge?: string) => {
    if (completedQuests.includes(id)) return;
    setCompleted((c) => [...c, id]);
    setXp((v) => v + xpAmt);
    if (badge) setBadges((b) => (b.includes(badge) ? b : [...b, badge]));
  };
  const toggleDark = () => setDarkMode((d) => !d);

  return (
    <Ctx.Provider value={{ xp, level, completedQuests, badges, darkMode, addXp, completeQuest, toggleDark }}>
      {children}
    </Ctx.Provider>
  );
}

export function useStore() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useStore within StoreProvider");
  return c;
}
