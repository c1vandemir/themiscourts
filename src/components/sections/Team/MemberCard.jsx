import Avatar from '../../ui/Avatar';

export default function MemberCard({ name, role, photo }) {
  return (
    <li className="flex items-center gap-4 rounded-2xl border border-line bg-card p-4 transition hover:border-ink/60 hover:shadow-lg hover:shadow-navy-900/5">
      <Avatar name={name} src={photo} size="sm" />
      <div className="min-w-0">
        <p className="truncate font-semibold text-ink">{name}</p>
        <p className="text-sm text-ink/60">{role}</p>
      </div>
    </li>
  );
}
