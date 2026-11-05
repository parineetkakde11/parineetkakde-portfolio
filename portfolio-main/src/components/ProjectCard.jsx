import { codeLink } from '../data/projects';
import { icons } from './icons';
import ExternalLink from './ExternalLink';
import SmartImage from './SmartImage';
import Reveal from './Reveal';

/** Gold "quest" card for a project. */
export default function ProjectCard({ project }) {
  const Icon = icons[project.icon];
  const code = codeLink(project);

  return (
    <Reveal as="article" className="quest-card" aria-labelledby={`${project.id}-title`}>
      <span className={`quest-card__badge tone-bg--${project.badge.tone}`}>{project.badge.label}</span>
      <div>
        <div className="quest-card__head">
          <div>
            <h3 id={`${project.id}-title`} className="quest-card__title">
              {project.title}
            </h3>
            <span className="quest-card__subtitle">{project.subtitle}</span>
          </div>
          {Icon && (
            <span className="quest-card__icon" aria-hidden="true">
              <Icon size={18} />
            </span>
          )}
        </div>

        <div className="quest-card__media">
          <SmartImage src={project.image.src} alt={project.image.alt} className="quest-card__img" />
          <span className="quest-card__tag">{project.imageTag}</span>
        </div>

        <p className="quest-card__desc">{project.description}</p>

        <ul className="quest-card__tech" aria-label="Technologies">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="quest-card__footer">
        <ExternalLink
          href={code.href}
          className="mini-btn"
          aria-label={code.isRepo ? `${project.title} source code` : 'Parineet Kakde GitHub profile'}
        >
          {code.label}
        </ExternalLink>
        <span className="quest-card__note">{project.footnote}</span>
      </div>
    </Reveal>
  );
}
