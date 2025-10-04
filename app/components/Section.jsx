export default function Section({
  id,
  className = "",
  children,
  title,
  subtitle,
}) {
  return (
    <section id={id} className={`py-14 sm:py-18 ${className}`}>
      <div className="container-max">
        {title && (
          <header className="mb-6 sm:mb-8">
            <p className="text-xs tracking-[0.25em] uppercase text-zinc-400">
              {subtitle}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-1">
              <span className="text-primary">›</span> {title}
            </h2>
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
