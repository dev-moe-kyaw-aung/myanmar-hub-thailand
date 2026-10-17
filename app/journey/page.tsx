"use client";
import Shell from "@/components/Shell";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { quests, allBadges, leaderboard } from "@/lib/data";
import { CheckCircle2, Circle, Trophy } from "lucide-react";

export default function JourneyPage() {
  const { tr } = useI18n();
  const { xp, level, badges, completedQuests, completeQuest } = useStore();

  const progressPct = Math.min(100, (xp % 100));
  const chapters = Array.from(new Set(quests.map((q) => q.chapter)));

  const lb = leaderboard
    .map((u) => (u.name === "You" ? { ...u, xp, level } : u))
    .sort((a, b) => b.xp - a.xp);

  return (
    <Shell>
      {/* Avatar / XP bar */}
      <section className="card overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/15 via-transparent to-jade/10" />
        <div className="relative flex flex-wrap gap-4 items-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-orange-500 text-4xl flex items-center justify-center glow-gold">
            🧑‍🎤
          </div>
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-baseline gap-2">
              <h2 className="text-xl font-extrabold">Ko Aung</h2>
              <span className="chip bg-deepblue text-white">LV {level}</span>
            </div>
            <div className="mt-2 h-3 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gold to-orange-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <div className="text-xs mt-1 text-black/60 dark:text-white/60">
              {xp} XP · {100 - progressPct} XP → LV {level + 1}
            </div>
          </div>
        </div>
      </section>

      {/* Chapters + quests */}
      <section className="mt-6 grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          {chapters.map((ch) => (
            <div key={ch} className="card">
              <div className="font-bold text-deepblue dark:text-gold">{ch}</div>
              <div className="mt-3 space-y-2">
                {quests
                  .filter((q) => q.chapter === ch)
                  .map((q) => {
                    const done = completedQuests.includes(q.id);
                    return (
                      <div
                        key={q.id}
                        className="flex items-start gap-3 rounded-xl p-3 border border-black/5 dark:border-white/10"
                      >
                        <div className="text-2xl">{q.icon}</div>
                        <div className="flex-1">
                          <div className="font-semibold flex items-center gap-2">
                            {done ? (
                              <CheckCircle2 size={16} className="text-jade" />
                            ) : (
                              <Circle size={16} className="text-black/30" />
                            )}
                            {q.title}
                          </div>
                          <div className="text-xs text-black/60 dark:text-white/60">
                            {q.desc}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="chip bg-gold/15 text-gold">+{q.xp} XP</span>
                          {!done && (
                            <button
                              onClick={() => completeQuest(q.id, q.xp, q.badge)}
                              className="btn-gold text-xs !py-1 !px-3"
                            >
                              Complete
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar: badges + leaderboard */}
        <div className="space-y-4">
          <div className="card">
            <div className="font-bold flex items-center gap-2">
              <Trophy size={16} className="text-gold" /> {tr("badges")}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {allBadges.map((b) => {
                const owned = badges.includes(b.id);
                return (
                  <div
                    key={b.id}
                    className={`rounded-xl p-2 text-center text-xs border ${
                      owned
                        ? "border-gold/50 bg-gold/10"
                        : "border-black/10 dark:border-white/10 opacity-40"
                    }`}
                  >
                    <div className="text-2xl">{b.icon}</div>
                    <div className="mt-1 font-semibold leading-tight">{b.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card">
            <div className="font-bold">{tr("leaderboard")}</div>
            <div className="mt-3 space-y-2">
              {lb.map((u, i) => (
                <div
                  key={u.name}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 text-center font-bold text-black/50">
                      {i + 1}
                    </span>
                    <span className={u.name === "You" ? "font-bold text-gold" : ""}>
                      {u.name}
                    </span>
                  </div>
                  <span className="text-xs">
                    LV {u.level} · {u.xp} XP
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
