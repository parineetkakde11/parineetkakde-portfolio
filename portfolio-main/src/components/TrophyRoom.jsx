import { Trophy } from 'lucide-react';
import { achievements } from '../data/achievements';
import AchievementCard from './AchievementCard';

export default function TrophyRoom() {
  return (
    <div className="card card--trophy">
      <span className="float-tag float-tag--right float-tag--gold">TROPHY ROOM</span>
      <div className="trophy-room__head">
        <Trophy size={24} className="tone-text--gold" aria-hidden="true" />
        <h2 id="trophies-title" className="t-headline-md">
          HIGH SCORES
        </h2>
      </div>
      <ul className="trophy-room__list">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </ul>
    </div>
  );
}
