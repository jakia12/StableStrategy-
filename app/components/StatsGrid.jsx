import { Bitcoin, Coins, Flame, TrendingUp } from "lucide-react";

const stats = [
  { label: "Protocol Treasury", value: "0", unit: "ETH", icon: Coins },
  { label: "Accumulated USDT", value: "0", unit: "USDT", icon: Bitcoin },
  { label: "Cycle Target", value: "5", unit: "%", icon: TrendingUp },
  { label: "Total $STBLSTR Burned", value: "0", unit: "STBLSTR", icon: Flame },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ label, value, unit, icon: Icon }) => (
        <div
          key={label}
          className="relative card px-5 pb-6 pt-12 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Floating icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="relative">
              <span className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-lg bg-primary/25" />
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/15 backdrop-blur-sm">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Top accent line */}
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Label */}
          <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-zinc-300">
            {label}
          </p>

          {/* Value */}
          <div className="mt-2 flex items-baseline justify-center gap-2">
            <span className="text-4xl sm:text-5xl font-semibold leading-none text-white">
              {value}
            </span>
            {unit && <span className="text-sm text-zinc-200">{unit}</span>}
          </div>

          {/* Divider */}
          <div className="mx-auto my-4 h-px w-10 bg-white/10" />

          {/* Helper row */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-200">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            updated live • on-chain verified
          </div>

          {/* Corner sheen */}
          <span className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rotate-45 bg-gradient-to-tr from-primary/0 via-primary/10 to-primary/0" />
        </div>
      ))}
    </div>
  );
}
