import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './theme';
import { ContextProvider } from './context';
import Router from './router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContextProvider>
        <Router />
      </ContextProvider>
    </ThemeProvider>
  );
};

export default App;
