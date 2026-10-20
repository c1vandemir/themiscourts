import { Link } from 'react-router';
import { Scale } from 'lucide-react';
import { site } from '../../config/site';

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/60 text-white transition group-hover:bg-white group-hover:text-navy-950">
        <Scale className="h-4.5 w-4.5" aria-hidden="true" />
      </span>
      <span className="whitespace-nowrap font-display text-lg font-bold tracking-wide text-white">{site.name}</span>
    </Link>
  );
}
