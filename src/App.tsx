import { Header } from "./components/Header";
import { GlobalStyle } from "./global/styles";
import { ThemeProvider } from "styled-components";
import theme from "./global/theme/theme";
import { Dashboard } from "./components/Dashboard";
import { Summary } from "./components/Summary";
import { TransactionsTable } from "./components/TransactionsTable";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Dashboard />
      <Summary />
      <TransactionsTable />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
