export default function SiteFooter() {
  return (
    <footer className="relative mt-16 border-t border-white/10 bg-ink/80 py-10 text-center text-sm text-zinc-400 backdrop-blur-sm">
      {/* subtle top glow */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container-max flex flex-col items-center gap-3">
        {/* logo or brand name */}
        <h4 className="text-lg font-semibold tracking-wide text-white">
          $BTCSTR
        </h4>

        {/* divider */}
        <div className="h-px w-16 bg-white/10" />

        {/* info line */}
        <p className="text-[13px] text-zinc-500">
          CA:{" "}
          <span className="text-primary/80 font-mono tracking-tight">
            0xAbc...Def
          </span>{" "}
          •{" "}
          <a
            href="#"
            className="underline decoration-dotted hover:text-primary transition-colors"
          >
            Twitter
          </a>
        </p>

        {/* copyright */}
        <p className="text-xs text-zinc-600 mt-2">
          © {new Date().getFullYear()} BTCStrategy.fi — All rights reserved.
        </p>
      </div>

      {/* bottom subtle glow */}
      <div className="pointer-events-none absolute -bottom-16 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl opacity-60" />
    </footer>
  );
}
