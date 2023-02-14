import { useState } from "react";
import Modal from "react-modal";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./global/styles";
import theme from "./global/theme/theme";
import { Dashboard } from "./components/Dashboard";
import { Summary } from "./components/Summary";
import { TransactionsTable } from "./components/TransactionsTable";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function toggleNewTransactionModal() {
    setIsNewTransactionModalOpen((prev) => !prev);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleNewTransactionModal={toggleNewTransactionModal} />

      <Dashboard />

      <Summary />

      <TransactionsTable />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={toggleNewTransactionModal}
      />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
