export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const formatNumber = (num) => {
  return Math.round(num * 10) / 10;
};

export const calculateWinPercentage = (wins, losses) => {
  const total = wins + losses;
  return total > 0 ? formatNumber((wins / total) * 100) : 0;
};

export const sortByProperty = (array, property, ascending = true) => {
  return [...array].sort((a, b) => {
    if (ascending) {
      return a[property] > b[property] ? 1 : -1;
    }
    return a[property] < b[property] ? 1 : -1;
  });
};

export const filterByTeam = (players, team) => {
  return players.filter(player => player.team === team);
};
