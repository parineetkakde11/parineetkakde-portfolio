import { IdCard } from 'lucide-react';
import { availability, bio, stats, statusReadout } from '../data/profile';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section container" aria-labelledby="about-title">
      <SectionHeader id="about-title" title="PLAYER PROFILE // DOSSIER" icon={IdCard} />

      <div className="split-grid">
        <Reveal className="card card--bio split-grid__main">
          <span className="float-tag float-tag--right float-tag--gold">ORIGIN: PUNE, MH</span>
          <div className="bio__head">
            <span className="bio__square" aria-hidden="true" />
            <h3 className="bio__label">CORE IDENTITY SPECS</h3>
          </div>
          {bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="bio__text">
              {paragraph}
            </p>
          ))}
          <div className="readout" role="presentation">
            {statusReadout.map((line) => (
              <div key={line.text} className={`readout__line readout__line--${line.tone}`}>
                {line.text}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="card card--stats split-grid__side">
          <h3 className="red-label">ATTRIBUTES // STAT SHEET</h3>
          <dl className="stat-list">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-row">
                <dt>{stat.label}</dt>
                <dd className={stat.tone ? `is-${stat.tone}` : undefined}>{stat.value}</dd>
              </div>
            ))}
            <div className="stat-row">
              <dt>STATUS</dt>
              <dd>
                <span className="status-pill">
                  <span className="status-pill__dot anim-ping" aria-hidden="true" />
                  {availability}
                </span>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
