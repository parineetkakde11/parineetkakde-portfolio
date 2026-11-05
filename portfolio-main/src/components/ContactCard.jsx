import ExternalLink from './ExternalLink';

/** One of the three "direct action channel" tiles (email / GitHub / LinkedIn). */
export default function ContactCard({ href, icon: Icon, tone, kicker, value, external = false, ariaLabel }) {
  const content = (
    <>
      <span className={`channel__icon tone-bg--${tone}`} aria-hidden="true">
        <Icon size={20} />
      </span>
      <span className="channel__kicker">{kicker}</span>
      <span className="channel__value">{value}</span>
    </>
  );

  return external ? (
    <ExternalLink href={href} className="channel" aria-label={ariaLabel}>
      {content}
    </ExternalLink>
  ) : (
    <a href={href} className="channel" aria-label={ariaLabel}>
      {content}
    </a>
  );
}
