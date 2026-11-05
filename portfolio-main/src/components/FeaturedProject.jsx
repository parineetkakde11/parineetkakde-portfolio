
import { useRef, useState } from 'react';
import {
  CirclePlay,
  Crosshair,
  Play,
  Sparkles,
  Terminal,
} from 'lucide-react';

import { codeLink } from '../data/projects';
import ExternalLink from './ExternalLink';
import Reveal from './Reveal';

const WAVE_BARS = [
  ['cyan', 12], ['cyan', 24], ['green', 16], ['green', 28],
  ['gold', 20], ['gold', 32], ['red', 16], ['red', 24],
  ['cyan', 12], ['green', 28], ['gold', 20],
];

export default function FeaturedProject({ project }) {
  const code = codeLink(project);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Video playback failed:', error);
      });
    }
  };

  const replayVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      handlePlay();
    }
  };

  return (
    <section
      id="featured-boss"
      className="boss-section"
      aria-labelledby="boss-title"
    >
      <div className="container container--flush">
        <div className="boss-banner">
          <div className="boss-banner__main">
            <Sparkles size={20} aria-hidden="true" />
            <span>FEATURED BOSS RAID • FLAGSHIP AI SYSTEM</span>
          </div>
          <div className="boss-banner__pill">
            HIGH PRIORITY ARCHITECTURE
          </div>
        </div>

        <Reveal as="article" className="boss-card">
          <header className="boss-card__header">
            <div>
              <h2 id="boss-title" className="boss-card__title">
                {project.title}
              </h2>
              <p className="boss-card__tagline">
                {project.tagline}
              </p>
            </div>

            <button
              type="button"
              className="demo-btn"
              onClick={handlePlay}
            >
              <CirclePlay size={18} aria-hidden="true" />
              <span>PLAY DEMO</span>
            </button>
          </header>

          <div className="boss-card__body">
            <div className="boss-card__col">

              {/* VIDEO PLAYER */}
              <div className="crt">
                <div className="crt__bar">
                  <div className="crt__lights">
                    <span className="crt__light crt__light--red" />
                    <span className="crt__light crt__light--gold" />
                    <span className="crt__light crt__light--green" />
                    <span className="crt__feed">
                      {project.feedLabel}
                    </span>
                  </div>

                  <span className="crt__live anim-pulse">
                    • {isPlaying ? 'VIDEO PLAYING' : 'DEMO READY'}
                  </span>
                </div>

                <div className="crt__screen">

                  <video
                    ref={videoRef}
                    className="crt__video"
                    src={project.videoUrl}
                    poster={project.thumbnail || project.image.src}
                    controls={isPlaying}
                    playsInline
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onEnded={() => setIsPlaying(false)}
                  >
                    Your browser does not support HTML5 video.
                  </video>

                  {!isPlaying && (
                    <>
                      <div
                        className="crt__shade"
                        aria-hidden="true"
                      />

                      <button
                        type="button"
                        className="crt__play"
                        onClick={handlePlay}
                        aria-label={`Play ${project.title} demo`}
                      >
                        <Play size={36} aria-hidden="true" />
                      </button>

                      
                    </>
                  )}

                </div>

                <div className="crt__footer">
                  <span className="crt__timecode">
                    {isPlaying ? 'NOW PLAYING' : project.timecode}
                  </span>

                  <button
                    type="button"
                    className="crt__watch"
                    onClick={replayVideo}
                  >
                    REPLAY FULL DEMO →
                  </button>
                </div>
              </div>

              {/* LEAD QUALIFICATION TIERS */}
              <div className="tiers">
                <h3 className="tiers__title">
                  <Crosshair size={18} aria-hidden="true" />
                  <span>AUTOMATIC QUALIFICATION TIERS</span>
                </h3>

                <div className="tiers__grid">
                  {project.tiers.map((tier) => (
                    <div
                      key={tier.id}
                      className={`tier tier--${tier.id}`}
                    >
                      <div className="tier__label">
                        {tier.label}
                      </div>
                      <div className="tier__detail">
                        {tier.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PROJECT INFORMATION */}
            <div className="boss-card__col">
              <div>
                <h3 className="t-headline-sm boss-card__subhead">
                  SYSTEM MISSION &amp; DESIGN
                </h3>

                <p className="boss-card__mission">
                  {project.mission}
                </p>
              </div>

              <div className="pipeline">
                <h3 className="pipeline__title">
                  SYSTEM ARCHITECTURE PIPELINE
                </h3>

                <ol className="pipeline__steps">
                  {project.pipeline.map((item) => (
                    <li
                      key={item.step}
                      className="pipeline__step"
                    >
                      <span
                        className={`pipeline__num pipeline__num--${item.tone}`}
                        aria-hidden="true"
                      >
                        {item.step}
                      </span>

                      <div>
                        <span className="pipeline__name">
                          {item.title}
                        </span>
                        <span className="pipeline__text">
                          {' '}{item.text}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="stack__title">
                  DEPLOYED TECH STACK
                </h3>

                <ul className="stack">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="chip chip--grey"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* PROJECT ACTIONS */}
              <div className="boss-card__actions">
                <button
                  type="button"
                  className="btn btn--red btn--md"
                  onClick={handlePlay}
                >
                  <CirclePlay size={18} aria-hidden="true" />
                  <span>WATCH PROJECT DEMO</span>
                </button>

                <ExternalLink
                  href={code.href}
                  className="btn btn--paper btn--md"
                  aria-label={
                    code.isRepo
                      ? `${project.title} source code on GitHub`
                      : 'Parineet Kakde GitHub profile'
                  }
                >
                  <Terminal size={18} aria-hidden="true" />
                  <span>
                    {code.isRepo
                      ? 'INSPECT GITHUB CODE'
                      : 'VIEW GITHUB PROFILE'}
                  </span>
                </ExternalLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
