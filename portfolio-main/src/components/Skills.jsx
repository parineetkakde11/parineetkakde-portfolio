import { skillGroups } from '../data/skills';
import { icons } from './icons';

/** "Player Inventory" skills panel. */
export default function Skills() {
  return (
    <div className="card card--inventory">
      <span className="float-tag float-tag--left float-tag--red">PLAYER INVENTORY // SKILLS</span>
      <div className="inventory__head">
        <h2 id="skills-title" className="t-headline-md">
          TECHNICAL ARSENAL
        </h2>
        <span className="inventory__tier">• COIN-OP TIERS</span>
      </div>
      <div className="inventory__groups">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon];
          return (
            <div key={group.id} className="inventory__group">
              <h3 className="inventory__title">
                <Icon size={16} className={`tone-text--${group.tone}`} aria-hidden="true" />
                <span>{group.title}</span>
              </h3>
              <ul className="inventory__items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
