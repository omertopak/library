import { ThemeProvider } from 'styled-components';
import AppRouter from './router/AppRouter';
import GlobalStyles from "./styles/Global.styles"
import { useThemeContext } from './context/ThemeContext';
import { lightTheme, darkTheme } from './styles/theme';
import LoginContextProvider from './context/LoginContext';
import BookContextProvider from './context/BookContext';
function App() {
  const { myTheme } = useThemeContext();
  const themes = myTheme === "light" ? lightTheme : darkTheme


  return (
    <div className="App">
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <LoginContextProvider>
          <BookContextProvider>
            <AppRouter />
          </BookContextProvider>
        </LoginContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
