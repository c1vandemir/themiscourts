const sizes = {
  gold: 'h-32 px-10 text-2xl',
  silver: 'h-24 w-56 px-6 text-lg',
  bronze: 'h-20 w-48 px-5 text-base',
};

/** Logo görseli yoksa sponsor adını zarif bir wordmark olarak gösterir. */
export default function SponsorLogo({ name, logo, url, tier }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`grid shrink-0 place-items-center rounded-2xl border border-line bg-card transition hover:border-ink/60 hover:shadow-lg ${sizes[tier]}`}
    >
      {logo ? (
        <img src={logo} alt={name} className="max-h-[60%] max-w-full object-contain grayscale transition hover:grayscale-0" loading="lazy" />
      ) : (
        <span className="text-center font-display font-semibold text-ink">{name}</span>
      )}
    </a>
  );
}
