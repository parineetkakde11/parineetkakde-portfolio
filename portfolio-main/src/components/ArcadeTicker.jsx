/** Retro bottom ticker shown above the footer on every page. */
export default function ArcadeTicker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__inner">
        <div className="ticker__left">
          <span className="ticker__dot anim-ping" />
          <span>1P CONNECTED</span>
        </div>
        <div className="ticker__middle">
          <span>FRAMEWORK: FASTAPI / PYTHON</span>
          <span>•</span>
          <span>LOCATION: PUNE, MH</span>
          <span>•</span>
          <span>UPTIME: 99.98%</span>
        </div>
        <div className="ticker__right">PRESS START [ENTER]</div>
      </div>
    </div>
  );
}
