
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Common/Header';
// import Sidebar from './components/Common/Sidebar';
import DashboardPage from './pages/DashboardPage';
import InsightsPage from './pages/InsightsPage';
import ComparisonPage from './pages/ComparisonPage';
import RecommendationPage from './pages/RecommendationPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
          <Header />
          <Box sx={{ display: 'flex', flex: 1 }}>
            {/* <Sidebar /> */}
            <Box component="main" sx={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/insights" element={<InsightsPage />} />
                <Route path="/comparison" element={<ComparisonPage />} />
                <Route path="/recommendation" element={<RecommendationPage />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;