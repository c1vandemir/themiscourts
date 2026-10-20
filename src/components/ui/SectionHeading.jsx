export default function SectionHeading({ eyebrow, title, subtitle, light = false, align = 'center' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${light ? 'text-white/70' : 'text-muted'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      <span
        aria-hidden="true"
        className={`mt-5 block h-0.5 w-14 ${light ? 'bg-white' : 'bg-accent'} ${align === 'center' ? 'mx-auto' : ''}`}
      />
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed ${light ? 'text-white/80' : 'text-ink/75'}`}>{subtitle}</p>
      )}
    </div>
  );
}
