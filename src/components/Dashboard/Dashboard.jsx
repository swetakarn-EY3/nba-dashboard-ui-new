import { Box, Grid, CircularProgress, Container} from '@mui/material';

// import SelectField from '../Common/SelectField';
import Section from '../Common/Section';
import PlayerCard from '../Common/PlayerCard';
import GameCard from '../Common/GameCard';
import StandingsTable from '../Common/StandingsTable';
import DoughnutChart from '../Charts/DoughnutChart';
import BarChart from '../Charts/BarChart';
import LineChart from '../Charts/LineChart';
import dashboardData from '../../mock/dashboard.json';
import React from  'react';

export default function Dashboard() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setData(dashboardData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (!data) {
    return <Container maxWidth="lg" sx={{ py: 4 }}>No data available</Container>;
  }

  // Plan Distribution Chart
  const planDistributionData = {
    labels: ['Plan A', 'Plan B', 'Plan C'],
    datasets: [
      {
        data: [35, 25, 40],
        backgroundColor: ['#3f51b5', '#e91e63', '#9c27b0'],
        borderColor: ['#3f51b5', '#e91e63', '#9c27b0'],
        borderWidth: 2,
      },
    ],
  };

  // Geo Distribution Chart
  const geoDistributionData = {
    labels: ['CA', 'NY', 'TX', 'FL', 'Others'],
    datasets: [
      {
        label: 'Geo Distribution',
        data: [20, 25, 20, 15, 20],
        backgroundColor: [
          'rgba(25, 118, 210, 0.6)',
          'rgba(56, 142, 60, 0.6)',
          'rgba(230, 124, 115, 0.6)',
          'rgba(253, 213, 79, 0.6)',
          'rgba(156, 39, 176, 0.6)',
        ],
        borderColor: [
          'rgba(25, 118, 210, 1)',
          'rgba(56, 142, 60, 1)',
          'rgba(230, 124, 115, 1)',
          'rgba(253, 213, 79, 1)',
          'rgba(156, 39, 176, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Surrender Charge Chart
  const surrenderChargeData = {
    labels: ['High', 'Medium', 'Low/None'],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ['#f44336', '#ff9800', '#4caf50'],
        borderColor: ['#f44336', '#ff9800', '#4caf50'],
        borderWidth: 2,
      },
    ],
  };

  // Portfolio Risk Chart
  const portfolioRiskData = {
    labels: ['External', 'Internal'],
    datasets: [
      {
        label: 'High',
        data: [30, 25],
        backgroundColor: 'rgba(244, 67, 54, 0.6)',
        borderColor: 'rgba(244, 67, 54, 1)',
        borderWidth: 1,
      },
      {
        label: 'Medium',
        data: [40, 35],
        backgroundColor: 'rgba(255, 193, 7, 0.6)',
        borderColor: 'rgba(255, 193, 7, 1)',
        borderWidth: 1,
      },
      {
        label: 'Low',
        data: [30, 40],
        backgroundColor: 'rgba(76, 175, 80, 0.6)',
        borderColor: 'rgba(76, 175, 80, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Team Performance Chart
  const teamPerformanceData = {
    labels: ['PPG', 'Rebounds', 'Assists', 'Steals', 'Blocks'],
    datasets: [
      {
        label: 'Avg Performance',
        data: [25, 8, 6, 2, 1.5],
        backgroundColor: 'rgba(25, 118, 210, 0.2)',
        borderColor: 'rgba(25, 118, 210, 1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      


      {/* Charts Row 1 */}
      <Section title="Plan Distribution & Portfolio Overview">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <DoughnutChart data={planDistributionData} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DoughnutChart data={surrenderChargeData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <BarChart data={geoDistributionData} />
          </Grid>
        </Grid>
      </Section>

      {/* Charts Row 2 */}
      <Section title="Risk Analysis & Performance Metrics">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: 'white', p: 3, borderRadius: 2 }}>
              <h3 style={{ marginTop: 0, marginBottom: 20, color: '#333' }}>Portfolio Risk Overview</h3>
              <BarChart data={portfolioRiskData} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: 'white', p: 3, borderRadius: 2 }}>
              <h3 style={{ marginTop: 0, marginBottom: 20, color: '#333' }}>Team Performance Radar</h3>
              <LineChart data={teamPerformanceData} />
            </Box>
          </Grid>
        </Grid>
      </Section>

      {/* Top Players Section */}
      <Section title="Top Players" showMore>
        <Grid container spacing={2}>
          {data.topPlayers.map((player) => (
            <Grid item xs={12} sm={6} md={4} key={player.id}>
              <PlayerCard player={player} />
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Recent Games Section */}
      <Section title="Recent Games" showMore>
        <Grid container spacing={2}>
          {data.recentGames.map((game) => (
            <Grid item xs={12} sm={6} key={game.id}>
              <GameCard game={game} />
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Standings Section */}
      <Section title="Standings">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StandingsTable data={data.standings.east} title="Eastern Conference" />
          </Grid>
          <Grid item xs={12} md={6}>
            <StandingsTable data={data.standings.west} title="Western Conference" />
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
}
