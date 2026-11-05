import { Link } from 'react-router-dom';
import { Coins, Play } from 'lucide-react';
import { heroChips } from '../data/profile';
import StageBackdrop from './StageBackdrop';

export default function Hero() {
  return (
    <StageBackdrop className="hero" aria-labelledby="hero-title">
      <div className="stage-tag">
        <span className="stage-tag__dot anim-ping" aria-hidden="true" />
        <span>STAGE 01 • 1P READY • HIGH VELOCITY BACKEND</span>
      </div>

      <div className="marquee">
        <div className="name-tag">
          <h1 id="hero-title">PARINEET KAKDE</h1>
        </div>
        <div className="terminal-strip">
          <p>BACKEND DEVELOPER • AI APPLICATION ARCHITECT</p>
        </div>
        <p className="hero__lead">
          Engineering production-grade asynchronous backends, high-concurrency microservices, and
          autonomous real-time voice AI workflows with Python and FastAPI.
        </p>
        <div className="hero__actions">
          <Link to="/projects#featured-boss" className="btn btn--green btn--lg">
            <Play size={20} aria-hidden="true" />
            <span>ENTER STAGE // BOSS RAID</span>
          </Link>
          <Link to="/achievements#contact" className="btn btn--gold btn--lg">
            <Coins size={20} aria-hidden="true" />
            <span>INSERT COIN // CONNECT</span>
          </Link>
        </div>
      </div>

      <ul className="chip-row" aria-label="Highlights">
        {heroChips.map((chip) => (
          <li key={chip} className="chip chip--white">
            {chip}
          </li>
        ))}
      </ul>
    </StageBackdrop>
  );
}
