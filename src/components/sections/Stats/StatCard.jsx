import { CalendarDays, GraduationCap, Scale, Users } from 'lucide-react';
import { useCountUp } from '../../../hooks/useCountUp';

// JSON'daki "icon" alanını bileşene eşler
const icons = {
  users: Users,
  university: GraduationCap,
  calendar: CalendarDays,
  scale: Scale,
};

export default function StatCard({ icon, value, suffix, label, start }) {
  const count = useCountUp(value, { start });
  const Icon = icons[icon] ?? Scale;

  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition hover:-translate-y-1 hover:border-white/50">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white transition group-hover:bg-white group-hover:text-navy-950">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <p className="mt-6 font-display text-5xl font-bold tabular-nums text-white">
        {count}
        <span className="text-white">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-widest text-white/80">{label}</p>
    </div>
  );
}
