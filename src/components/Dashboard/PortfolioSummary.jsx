import  { useState, useEffect } from 'react';
import dashboardData from '../../mock/dashboard.json';
import Section from './Section';
import PlayerCard from './PlayerCard';
import GameCard from './GameCard';
import StandingsTable from './StandingsTable';

export default function PortfolioSummary() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(dashboardData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <span className="text-gray-600 text-lg">Loading...</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <span className="text-red-600 text-lg">No data available</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Players Section */}
      <Section title="Top Players" showMore>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.topPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </Section>

      {/* Recent Games Section */}
      <Section title="Recent Games" showMore>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.recentGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </Section>

      {/* Standings Section */}
      <Section title="Standings">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <StandingsTable data={data.standings.east} title="Eastern Conference" />
          <StandingsTable data={data.standings.west} title="Western Conference" />
        </div>
      </Section>
    </div>
  );
}