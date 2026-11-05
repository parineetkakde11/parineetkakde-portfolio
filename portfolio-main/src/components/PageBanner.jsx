import { Link } from 'react-router-dom';
import StageBackdrop from './StageBackdrop';

/**
 * Arcade-stage page heading for inner pages (same visual language as the hero).
 * `jumpLinks` render as chips linking to sections on the page.
 */
export default function PageBanner({ stageLabel, title, subtitle, jumpLinks = [] }) {
  return (
    <StageBackdrop className="stage--compact" aria-labelledby="page-title">
      <div className="stage-tag">
        <span className="stage-tag__dot anim-ping" aria-hidden="true" />
        <span>{stageLabel}</span>
      </div>
      <div className="marquee">
        <div className="name-tag">
          <h1 id="page-title">{title}</h1>
        </div>
        <div className="terminal-strip terminal-strip--flush">
          <p>{subtitle}</p>
        </div>
      </div>
      {jumpLinks.length > 0 && (
        <nav className="chip-row" aria-label="On this page">
          {jumpLinks.map((link) => (
            <Link key={link.to} to={link.to} className="chip chip--white chip--link">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </StageBackdrop>
  );
}
