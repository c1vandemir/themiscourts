import { useEffect, useState } from 'react';

function getRemaining(target) {
  const ms = Math.max(new Date(target).getTime() - Date.now(), 0);
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor(ms / 3_600_000) % 24,
    minutes: Math.floor(ms / 60_000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
    isOver: ms === 0,
  };
}

const FROZEN = { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: false };

/** Hedef tarihe kalan süreyi saniyede bir günceller. `enabled` false ise 00'da sabit kalır. */
export function useCountdown(target, enabled = true) {
  const [remaining, setRemaining] = useState(() => (enabled ? getRemaining(target) : FROZEN));

  useEffect(() => {
    if (!enabled) {
      setRemaining(FROZEN);
      return;
    }
    setRemaining(getRemaining(target));
    const id = setInterval(() => {
      const next = getRemaining(target);
      setRemaining(next);
      if (next.isOver) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [target, enabled]);

  return remaining;
}
