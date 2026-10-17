"use client";
import Shell from "@/components/Shell";
import { useI18n } from "@/lib/i18n";
import { businessKpis, inventory, staff } from "@/lib/data";
import { Wallet, ShoppingCart, AlertTriangle, Users } from "lucide-react";

export default function BusinessPage() {
  const { tr } = useI18n();

  const kpis = [
    { label: tr("todayRevenue"), value: `฿${businessKpis.todayRevenue.toLocaleString()}`, icon: Wallet, color: "text-emerald-500" },
    { label: "Orders", value: businessKpis.orders, icon: ShoppingCart, color: "text-sky-500" },
    { label: tr("lowStock"), value: businessKpis.lowStock, icon: AlertTriangle, color: "text-amber-500" },
    { label: tr("staffOnShift"), value: businessKpis.staffOnShift, icon: Users, color: "text-teal-500" },
  ];

  return (
    <Shell>
      <section className="rounded-2xl p-6 bg-gradient-to-br from-teal to-emerald-600 text-white">
        <h1 className="text-2xl font-extrabold">🏪 {tr("business")}</h1>
        <p className="text-white/80 text-sm mt-1">{tr("businessSub")}</p>
      </section>

      {/* KPIs */}
      <section className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {kpis.map((k) => {
          const Icon = k.icon;
          return (
            <div key={k.label} className="card">
              <div className="flex items-center justify-between">
                <div className="text-xs text-black/50 dark:text-white/50">{k.label}</div>
                <Icon size={18} className={k.color} />
              </div>
              <div className="text-2xl font-extrabold mt-2">{k.value}</div>
            </div>
          );
        })}
      </section>

      {/* Inventory */}
      <section className="card mt-4">
        <div className="flex items-center justify-between">
          <div className="font-bold">📦 {tr("inventory")}</div>
          <button className="btn-ghost text-xs">+ Add</button>
        </div>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-black/50 dark:text-white/50">
                <th className="py-2">SKU</th>
                <th>Item</th>
                <th>Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((i) => (
                <tr key={i.sku} className="border-t border-black/5 dark:border-white/10">
                  <td className="py-2 font-mono text-xs">{i.sku}</td>
                  <td>{i.name}</td>
                  <td>{i.stock}</td>
                  <td>
                    <span
                      className={`chip ${
                        i.status === "low"
                          ? "bg-red-100 text-red-600"
                          : "bg-emerald-100 text-emerald-600"
                      }`}
                    >
                      {i.status === "low" ? tr("lowStock") : "OK"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Staff */}
      <section className="card mt-4">
        <div className="font-bold">👥 {tr("staff")}</div>
        <div className="mt-3 grid sm:grid-cols-2 gap-2">
          {staff.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between p-3 rounded-xl border border-black/5 dark:border-white/10"
            >
              <div>
                <div className="font-semibold text-sm">{s.name}</div>
                <div className="text-xs text-black/50 dark:text-white/50">
                  {s.role} · {s.shift}
                </div>
              </div>
              <span
                className={`chip ${
                  s.permit.includes("Renew")
                    ? "bg-amber-100 text-amber-700"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {s.permit}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Finance Preview */}
      <section className="card mt-4">
        <div className="font-bold">💵 {tr("finance")}</div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
          <div className="rounded-xl bg-emerald-50 dark:bg-emerald-900/20 p-3">
            <div className="text-xs text-black/50 dark:text-white/50">Income</div>
            <div className="font-extrabold text-emerald-600">฿12,840</div>
          </div>
          <div className="rounded-xl bg-red-50 dark:bg-red-900/20 p-3">
            <div className="text-xs text-black/50 dark:text-white/50">Expense</div>
            <div className="font-extrabold text-red-500">฿4,210</div>
          </div>
          <div className="rounded-xl bg-gold/15 p-3">
            <div className="text-xs text-black/50 dark:text-white/50">Profit</div>
            <div className="font-extrabold text-gold">฿8,630</div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
