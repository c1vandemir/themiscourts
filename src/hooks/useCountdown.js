import { useSyncExternalStore } from 'react';

function getRemaining(target, now) {
  const ms = Math.max(new Date(target).getTime() - now, 0);
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor(ms / 3_600_000) % 24,
    minutes: Math.floor(ms / 60_000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
    isOver: ms === 0,
  };
}

const FROZEN = { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: false };

// Saniyede bir değişen saat kaynağı. Saniyeye yuvarlanmış değer, aynı saniye içinde sabit kalır.
const subscribe = (onTick) => {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
};
const noopSubscribe = () => () => {};
const getNowSeconds = () => Math.floor(Date.now() / 1000);
// Önceden render edilen HTML'de build anının saati donmasın: sunucuda ve hydration sırasında
// değer "bilinmiyor" (null) kabul edilir, tarayıcı hemen ardından gerçek süreyi gösterir.
const getServerNow = () => null;

/**
 * Hedef tarihe kalan süreyi saniyede bir günceller. `enabled` false ise 00'da sabit kalır.
 * Sunucuda/hydration'da süre bilinmediğinden null döner.
 */
export function useCountdown(target, enabled = true) {
  const nowSeconds = useSyncExternalStore(enabled ? subscribe : noopSubscribe, getNowSeconds, getServerNow);

  if (!enabled) return FROZEN;
  if (nowSeconds === null) return null;
  return getRemaining(target, nowSeconds * 1000);
}
