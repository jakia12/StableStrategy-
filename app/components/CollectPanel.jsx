import { ArrowRight, Wallet } from "lucide-react";

export default function CollectPanel() {
  return (
    <div className="relative mx-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-ink-2/70 p-8 text-center shadow-[0_8px_35px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_50px_rgba(0,0,0,0.6)]">
      {/* top accent glow */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* floating wallet icon */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2">
        <div className="relative">
          <span className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-md bg-primary/25" />
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/15 backdrop-blur-md">
            <Wallet className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-2 text-2xl font-semibold text-primary tracking-wide ">
        executeStableStrategy()
      </h3>

      {/* Description */}
      <p className="mt-3 text-[16px] text-zinc-200 leading-relaxed">
        Execute StableStrategy’s on-chain logic to swap ETH for USDT once
        treasury thresholds are met and earn 0.1 eth as a reward— fueling
        perpetual deflation.
      </p>

      {/* Button */}
      <div className="mt-8">
        <button className="btn-primary px-6 py-2.5 text-sm font-medium">
          Execute StableStrategy
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>

      {/* Divider */}
      <div className="my-6 h-px w-16 mx-auto bg-white/10" />

      {/* Comment hint */}
      <p className="text-[11px] leading-relaxed text-zinc-300 font-mono opacity-80">
        // Permissionless execution — wallet required // Auto-compounds USDT &
        burns $STBLSTR proportionally
      </p>

      {/* bottom glow */}
      <div className="pointer-events-none absolute -bottom-12 left-1/2 h-24 w-48 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl opacity-50" />
    </div>
  );
}
