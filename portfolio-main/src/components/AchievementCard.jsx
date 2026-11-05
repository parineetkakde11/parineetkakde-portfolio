/** Single "high score" entry in the Trophy Room. */
export default function AchievementCard({ achievement }) {
  return (
    <li className="trophy">
      <div className="trophy__top">
        <span className={`trophy__rank tone-text--${achievement.tone}`}>{achievement.rank}</span>
        <span className={`trophy__year ${achievement.highlightYear ? 'is-gold' : ''}`}>{achievement.year}</span>
      </div>
      <h3 className="trophy__title">{achievement.title}</h3>
      <p className="trophy__desc">{achievement.description}</p>
    </li>
  );
}
