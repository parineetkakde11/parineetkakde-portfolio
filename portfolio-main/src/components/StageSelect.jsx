import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/** Arcade "next stage" cards linking to other pages. */
export default function StageSelect({ stages, title = 'SELECT NEXT STAGE' }) {
  return (
    <div className="stage-select">
      <div className="kicker-tag">{title}</div>
      <div className="stage-select__grid">
        {stages.map((stage) => (
          <Link key={stage.to} to={stage.to} className={`stage-card stage-card--${stage.tone}`}>
            <span className="stage-card__level">{stage.level}</span>
            <span className="stage-card__title">{stage.title}</span>
            <span className="stage-card__desc">{stage.description}</span>
            <span className="stage-card__go">
              PRESS START <ArrowRight size={16} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
