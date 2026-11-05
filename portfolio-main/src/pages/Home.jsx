import Hero from '../components/Hero';
import ArcadeDivider from '../components/ArcadeDivider';
import About from '../components/About';
import StageSelect from '../components/StageSelect';
import { usePageMeta } from '../hooks/usePageMeta';

const NEXT_STAGES = [
  {
    to: '/projects',
    level: 'STAGE 02',
    tone: 'gold',
    title: 'PROJECTS & SKILLS',
    description: 'AI Voice Sales Calling System, TransitOps, QR Scanner Mobile, REST Microservice Core and the full tech arsenal.',
  },
  {
    to: '/achievements',
    level: 'STAGE 03',
    tone: 'green',
    title: 'ACHIEVEMENTS & CONTACT',
    description: 'Hackathon high scores, open source work, and a direct line to start a project together.',
  },
];

export default function Home() {
  usePageMeta({
    description:
      'Parineet Kakde — Backend Developer and AI Application Developer building asynchronous Python/FastAPI backends, microservices and real-time voice AI workflows.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <ArcadeDivider />
      <About />
      <section className="section section--tight container" aria-label="Continue to other pages">
        <StageSelect stages={NEXT_STAGES} />
      </section>
    </>
  );
}
