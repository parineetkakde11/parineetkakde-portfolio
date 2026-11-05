import PageBanner from '../components/PageBanner';
import ArcadeDivider from '../components/ArcadeDivider';
import TrophyRoom from '../components/TrophyRoom';
import StatusCallout from '../components/StatusCallout';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Reveal from '../components/Reveal';
import { certificates } from '../data/certificates';
import { usePageMeta } from '../hooks/usePageMeta';

const JUMP_LINKS = [
  { to: '/achievements#trophies', label: 'HIGH SCORES' },
  ...(certificates.length ? [{ to: '/achievements#certificates', label: 'CERTIFICATES' }] : []),
  { to: '/achievements#contact', label: 'START TRANSMISSION' },
];

export default function Achievements() {
  usePageMeta({
    title: 'Achievements & Contact',
    description:
      'Achievements of Parineet Kakde — Inno Hack 2.0 winner, Bharatiya Antariksh Hackathon, community and open source work — and how to get in touch.',
    path: '/achievements',
  });

  return (
    <>
      <PageBanner
        stageLabel="STAGE 03 • TROPHY ROOM • INSERT COIN"
        title="ACHIEVEMENTS & CONTACT"
        subtitle="HIGH SCORES • COMMUNITY & OPEN SOURCE • START TRANSMISSION"
        jumpLinks={JUMP_LINKS}
      />
      <ArcadeDivider />

      <section id="trophies" className="loot-section loot-section--plain" aria-labelledby="trophies-title">
        <div className="container container--flush split-grid">
          <Reveal className="split-grid__main">
            <TrophyRoom />
          </Reveal>
          <div className="split-grid__side stack-col">
            <Reveal>
              <StatusCallout />
            </Reveal>
            <Certificates />
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
