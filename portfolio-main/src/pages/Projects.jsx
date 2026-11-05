import PageBanner from '../components/PageBanner';
import ArcadeDivider from '../components/ArcadeDivider';
import FeaturedProject from '../components/FeaturedProject';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import Skills from '../components/Skills';
import StageSelect from '../components/StageSelect';
import Reveal from '../components/Reveal';
import { allReposLinked, featuredProject, projects } from '../data/projects';
import { usePageMeta } from '../hooks/usePageMeta';

const JUMP_LINKS = [
  { to: '/projects#featured-boss', label: 'FLAGSHIP AI SYSTEM' },
  { to: '/projects#quests', label: 'FEATURED QUESTS' },
  { to: '/projects#skills', label: 'TECHNICAL ARSENAL' },
];

export default function Projects() {
  usePageMeta({
    title: 'Projects & Skills',
    description:
      'Projects by Parineet Kakde: an AI Voice Sales Calling System, TransitOps fleet logistics, a Kotlin QR scanner and an async FastAPI microservice core — plus technical skills.',
    path: '/projects',
  });

  return (
    <>
      <PageBanner
        stageLabel="STAGE 02 • MISSION SELECT • BUILD LOG"
        title="PROJECTS & SKILLS"
        subtitle="FLAGSHIP AI SYSTEM • FEATURED QUESTS • TECHNICAL ARSENAL"
        jumpLinks={JUMP_LINKS}
      />
      <ArcadeDivider />
      <FeaturedProject project={featuredProject} />

      <section id="quests" className="section section--quests container" aria-labelledby="quests-title">
        <SectionHeader
          id="quests-title"
          variant="tag"
          kicker="SELECT YOUR MISSION"
          title="FEATURED QUESTS & BUILDS"
          aside={
            <div className="repo-status">
              <span className="repo-status__dot" aria-hidden="true" />
              <span>{allReposLinked ? 'ALL REPOSITORIES VERIFIED' : 'SOURCE ON GITHUB'}</span>
            </div>
          }
        />
        <div className="quest-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="skills" className="loot-section" aria-labelledby="skills-title">
        <div className="container container--flush split-grid">
          <Reveal className="split-grid__main">
            <Skills />
          </Reveal>
          <Reveal className="split-grid__side">
            <StageSelect
              title="NEXT STAGE"
              stages={[
                {
                  to: '/achievements',
                  level: 'STAGE 03',
                  tone: 'green',
                  title: 'TROPHY ROOM',
                  description: 'Hackathon high scores, community work and open source.',
                },
                {
                  to: '/achievements#contact',
                  level: 'INSERT COIN',
                  tone: 'red',
                  title: 'START A PROJECT',
                  description: 'Send a message straight to my terminal.',
                },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
