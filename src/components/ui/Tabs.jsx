/**
 * Kontrollü sekme çubuğu.
 * tabs: [{ id, label }], value: aktif id, onChange: (id) => void
 */
export default function Tabs({ tabs, value, onChange, idPrefix, className = '' }) {
  return (
    <div role="tablist" className={`inline-flex flex-wrap justify-center gap-1 rounded-full bg-page-alt p-1 ring-1 ring-line ${className}`}>
      {tabs.map((tab) => {
        const active = tab.id === value;
        return (
          <button
            key={tab.id}
            id={`${idPrefix}-tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={active}
            aria-controls={`${idPrefix}-panel`}
            onClick={() => onChange(tab.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              active ? 'bg-accent text-on-accent shadow-md' : 'text-ink/70 hover:text-ink'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export function TabPanel({ idPrefix, activeId, className = '', children }) {
  return (
    <div id={`${idPrefix}-panel`} role="tabpanel" aria-labelledby={`${idPrefix}-tab-${activeId}`} className={className}>
      {children}
    </div>
  );
}
