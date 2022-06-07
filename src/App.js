// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import './App.css';

function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Router />
    </ThemeConfig>
  );
}

export default App;
