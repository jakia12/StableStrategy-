import { Flame, Repeat, ShieldCheck } from "lucide-react";

const blocks = [
  {
    icon: Flame,
    title: "Perpetual Burn Engine",
    body: "Each transaction fuels the protocol’s deflationary core — burning $BTCSTR to strengthen long-term stability.",
  },
  {
    icon: ShieldCheck,
    title: "Trustless & Autonomous",
    body: "No custodians. No manual triggers. All actions execute transparently on-chain, verifiable by anyone at any time.",
  },
  {
    icon: Repeat,
    title: "Auto-Stabilizing Cycle",
    body: "Collected fees are algorithmically cycled into BTC reserves, sustaining equilibrium through continuous buybacks.",
  },
];

export default function FeatureBlocks() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {blocks.map(({ icon: Icon, title, body }) => (
        <article
          key={title}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-2/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(0,0,0,0.55)]"
        >
          {/* Left accent stripe */}
          <span className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary/70 via-primary/20 to-transparent" />

          {/* Corner sheen */}
          <span className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rotate-45 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0" />

          {/* Icon in diamond badge */}
          <div className="mb-4 flex items-center gap-4 pl-3">
            <div className="relative">
              <span className="pointer-events-none absolute inset-0 -z-10 rounded-[10px] bg-primary/20 blur-md" />
              <div className="grid h-12 w-12 place-items-center rotate-45 rounded-[10px] border border-primary/40 bg-primary/15">
                <Icon className="-rotate-45 h-5 w-5 text-primary" />
              </div>
            </div>

            <h4 className="text-lg sm:text-xl font-semibold tracking-tight text-white">
              {title}
            </h4>
          </div>

          <p className="max-w-prose pl-3 text-base leading-relaxed text-zinc-300">
            {body}
          </p>

          {/* subtle bottom rule */}
          <div className="mt-6 h-px w-16 translate-x-3 bg-white/10" />
        </article>
      ))}
    </div>
  );
}
