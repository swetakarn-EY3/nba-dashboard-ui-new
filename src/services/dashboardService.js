import { fetchNBAData } from './api';

export const getDashboardData = async () => {
  try {
    const data = await fetchNBAData('/dashboard');
    return data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return null;
  }
};

export const getPlayerStats = async (playerId) => {
  try {
    const data = await fetchNBAData(`/players/${playerId}`);
    return data;
  } catch (error) {
    console.error('Error fetching player stats:', error);
    return null;
  }
};

export const getTeamStats = async (teamId) => {
  try {
    const data = await fetchNBAData(`/teams/${teamId}`);
    return data;
  } catch (error) {
    console.error('Error fetching team stats:', error);
    return null;
  }
};
