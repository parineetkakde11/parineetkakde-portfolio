/** Red strip with alternating pixel diamonds, used between sections. */
export default function ArcadeDivider() {
  return (
    <div className="arcade-divider" aria-hidden="true">
      {Array.from({ length: 8 }, (_, i) => (
        <span key={i} className={`arcade-divider__gem ${i % 2 ? 'is-paper' : 'is-gold'}`} />
      ))}
    </div>
  );
}
