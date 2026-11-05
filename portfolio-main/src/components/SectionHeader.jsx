/**
 * Section title in two arcade variants:
 *  - "rule":  icon square + big heading + black rule (Player Profile style)
 *  - "tag":   gold kicker tag above the heading (Featured Quests style)
 */
export default function SectionHeader({ id, title, icon: Icon, kicker, variant = 'rule', aside }) {
  if (variant === 'tag') {
    return (
      <div className="section-header section-header--tag">
        <div>
          {kicker && <div className="kicker-tag">{kicker}</div>}
          <h2 id={id} className="t-headline-lg">
            {title}
          </h2>
        </div>
        {aside}
      </div>
    );
  }

  return (
    <div className="section-header">
      {Icon && (
        <span className="section-header__icon" aria-hidden="true">
          <Icon size={18} />
        </span>
      )}
      <h2 id={id} className="t-headline-lg">
        {title}
      </h2>
      <span className="section-header__rule" aria-hidden="true" />
    </div>
  );
}
