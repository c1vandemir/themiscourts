const sizes = {
  sm: 'h-12 w-12 text-sm',
  md: 'h-16 w-16 text-lg',
  lg: 'h-32 w-32 text-3xl',
};

function initials(name) {
  return name
    .replace(/^(Prof\.|Doç\.|Dr\.|\s)+/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toLocaleUpperCase('tr');
}

/** Dairesel profil görseli; fotoğraf yoksa baş harfleri gösterir. */
export default function Avatar({ name, src, size = 'md', className = '' }) {
  const classes = `${sizes[size]} shrink-0 rounded-full ring-2 ring-navy-300 ring-offset-2 ring-offset-page ${className}`;

  if (src) {
    return <img src={src} alt={name} className={`${classes} object-cover`} loading="lazy" />;
  }
  return (
    <div
      aria-hidden="true"
      className={`${classes} grid place-items-center bg-accent font-display font-semibold text-on-accent`}
    >
      {initials(name)}
    </div>
  );
}
