/**
 * Sonsuz kayan şerit. İçerik iki kez render edilir; animasyon %50 kaydırıp başa sarar.
 * Üzerine gelindiğinde durur.
 */
export default function Marquee({ children, duration = '40s', reverse = false }) {
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: duration, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        <div className="flex shrink-0 gap-6 pr-6">{children}</div>
        <div className="flex shrink-0 gap-6 pr-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
