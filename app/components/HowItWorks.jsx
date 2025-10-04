import { ArrowDownRight } from "lucide-react";

const steps = [
  {
    n: "01",
    text: "All transactions feed the Stability Engine — collecting ETH fees on every trade.",
  },
  {
    n: "02",
    text: "Treasury accumulates ETH; once threshold (1 ETH) is reached, the contract swaps it into USDC.",
  },
  {
    n: "03",
    text: "When USDC appreciates (≈ 5% ETH drop), the contract redeems it back for ETH, triggering a $STBLSTR buy-and-burn.",
  },
  {
    n: "04",
    text: "The cycle repeats indefinitely, making volatility itself the fuel for deflation.",
  },
];

export default function HowItWorks() {
  return (
    <div id="how" className="relative">
      {/* timeline spine (desktop only) */}
      <span className="pointer-events-none absolute left-6 top-0 z-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent md:block" />

      <ol className="space-y-4">
        {steps.map(({ n, text }, i) => (
          <li key={n} className="relative">
            <div className="flex items-start gap-3 md:gap-5">
              {/* === step badge area === */}
              <div className="relative shrink-0">
                {/* mask to hide spine segment under the circle (desktop only) */}
                <span
                  className="absolute left-[1.5rem] top-5 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink md:block"
                  aria-hidden
                />
                {/* soft outer glow */}
                <span
                  className="pointer-events-none absolute left-1/2 top-5 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-lg md:block"
                  aria-hidden
                />
                {/* the circle badge */}
                <div className="relative z-20 grid h-10 w-10 place-items-center rounded-full border border-primary/40 bg-gradient-to-b from-primary/10 to-transparent text-[11px] font-semibold tracking-wider text-primary shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09)]">
                  {n}
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-primary/30" />
                </div>
              </div>

              {/* === content card === */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-2/70 p-4 shadow-[0_10px_35px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(0,0,0,0.55)]">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <ArrowDownRight className="absolute -right-1 -top-1 h-4 w-4 text-primary/50" />
                <p className="text-base sm:text-lg leading-relaxed text-zinc-200">
                  {text}
                </p>
                {i < steps.length - 1 && (
                  <div className="mt-4 h-px w-12 bg-white/10" />
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
