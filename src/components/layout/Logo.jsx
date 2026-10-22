import { Link } from 'react-router';
import { site } from '../../config/site';
import logoMark from '../../assets/logo-mark.svg';

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className="h-11 w-11 shrink-0 transition duration-300 group-hover:scale-110"
      />
      <span className="whitespace-nowrap font-display text-lg font-bold tracking-wide text-white">{site.name}</span>
    </Link>
  );
}
