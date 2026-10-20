import { useTranslation } from 'react-i18next';
import { useCountdown } from '../../../hooks/useCountdown';

const UNITS = ['days', 'hours', 'minutes', 'seconds'];

export default function Countdown({ target, enabled = true }) {
  const { t } = useTranslation();
  const remaining = useCountdown(target, enabled);

  if (remaining.isOver) {
    return <p className="text-lg font-medium text-white">{t('hero.started')}</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 sm:gap-4" role="timer" aria-live="off">
        {UNITS.map((unit) => (
          <div
            key={unit}
            className="min-w-0 rounded-2xl border border-white/25 bg-black/30 px-2 py-4 text-center backdrop-blur-sm sm:min-w-24 sm:px-5"
          >
            <span className="block font-display text-3xl font-bold tabular-nums text-white sm:text-5xl">
              {String(remaining[unit]).padStart(2, '0')}
            </span>
            <span className="mt-1 block text-[0.65rem] font-medium uppercase tracking-widest text-white sm:text-xs">
              {t(`hero.units.${unit}`)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
