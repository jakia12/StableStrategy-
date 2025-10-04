import { Wallet } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* faint gradient bars */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-[999px] bg-primary/15 blur-3xl" />
      </div>

      <div className="container-max pt-10 sm:pt-16 pb-10">
        {/* Logo */}
        <div className="flex items-center justify-center pt-[80px] pb-[50px]">
          <img
            src="/logo.png"
            alt="StableStrategy Logo"
            className="w-full md:w-[70%] max-w-[720px]"
          />
        </div>

        {/* Tagline */}
        <p className="mt-2 text-center text-lg font-medium text-zinc-300 tracking-wide">
          Perpetual Stable Machine
        </p>

        {/* Description */}
        <p className="mt-4 text-center text-sm sm:text-base text-zinc-400 max-w-[680px] mx-auto">
          StableStrategy is a perpetual stability engine — automating Bitcoin
          accumulation through smart volume taxation and strategic treasury
          mechanics. Trade, burn, and build lasting value in every transaction.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-3">
          <button className="btn-primary">
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </button>
          <a href="#how" className="btn-ghost">
            Learn How It Works
          </a>
        </div>
      </div>
    </div>
  );
}
