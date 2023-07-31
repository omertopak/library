import { ThemeProvider } from 'styled-components';
import AppRouter from './router/AppRouter';
import GlobalStyles from "./styles/Global.styles"
import { useThemeContext } from './context/ThemeContext';
import { lightTheme, darkTheme } from './styles/theme';
function App() {
  const {myTheme} = useThemeContext();
  const themes= myTheme === "light" ? lightTheme : darkTheme


    return (
    <div className="App">
      <ThemeProvider theme={themes}>
        <GlobalStyles/>
        <AppRouter/>
      </ThemeProvider>
    </div>
  );
}

export default App;
