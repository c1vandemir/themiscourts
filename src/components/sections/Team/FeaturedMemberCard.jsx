/** Fotoğraflı büyük portre kartı; isim ve rol fotoğrafın alt kısmında, lacivert geçiş üzerinde. */
export default function FeaturedMemberCard({ name, role, photo }) {
  return (
    <li className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-navy-100 shadow-xl shadow-navy-900/10 ring-1 ring-line">
      <img
        src={photo}
        alt={name}
        loading="lazy"
        className="h-full w-full object-cover object-[center_35%] transition duration-700 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <span aria-hidden="true" className="mb-3 block h-0.5 w-8 bg-white/80 transition-all duration-500 group-hover:w-14" />
        <p className="font-display text-xl font-semibold text-white">{name}</p>
        <p className="mt-1 text-xs font-medium uppercase tracking-widest text-white/80">{role}</p>
      </div>
    </li>
  );
}
