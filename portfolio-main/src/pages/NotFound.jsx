import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';
import StageBackdrop from '../components/StageBackdrop';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found',
    description: 'This page does not exist. Head back to the portfolio of Parineet Kakde.',
    path: '/404',
  });

  return (
    <StageBackdrop className="stage--compact stage--fill" aria-labelledby="page-title">
      <div className="stage-tag">
        <span className="stage-tag__dot anim-ping" aria-hidden="true" />
        <span>ERROR 404 • STAGE NOT FOUND</span>
      </div>
      <div className="marquee">
        <div className="name-tag">
          <h1 id="page-title">GAME OVER</h1>
        </div>
        <div className="terminal-strip">
          <p>THE LEVEL YOU REQUESTED DOES NOT EXIST</p>
        </div>
        <div className="hero__actions">
          <Link to="/" className="btn btn--green btn--lg">
            <Gamepad2 size={20} aria-hidden="true" />
            <span>CONTINUE? // HOME</span>
          </Link>
          <Link to="/projects" className="btn btn--gold btn--lg">
            <span>VIEW PROJECTS</span>
          </Link>
        </div>
      </div>
    </StageBackdrop>
  );
}
