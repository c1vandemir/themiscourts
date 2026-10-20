import { Link } from 'react-router';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-300 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  // primary: lacivert zemin üzerinde beyaz buton
  primary: 'bg-white text-navy-950 shadow-lg shadow-black/20 hover:bg-white/90 hover:-translate-y-0.5',
  // navy: açık temada lacivert, koyu temada beyaz (sayfa zeminine göre ters renk)
  navy: 'bg-accent text-on-accent hover:bg-accent/85',
  outlineLight: 'border border-white/50 bg-black/25 text-white backdrop-blur-sm hover:border-white hover:bg-black/40',
  outlineDark: 'border border-line text-ink hover:border-ink hover:bg-page-alt',
  ghost: 'text-ink/80 hover:text-ink',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

/** `to` verilirse router <Link>, `href` verilirse <a>, hiçbiri yoksa <button> render eder. */
export default function Button({ variant = 'primary', size = 'md', className = '', to, href, children, ...props }) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a href={href} className={classes} {...(external && { target: '_blank', rel: 'noopener noreferrer' })} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
