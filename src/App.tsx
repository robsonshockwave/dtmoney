import { useState } from "react";
import Modal from "react-modal";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./global/styles";
import theme from "./global/theme/theme";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function toggleNewTransactionModal() {
    setIsNewTransactionModalOpen((prev) => !prev);
  }

  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>
        <Header toggleNewTransactionModal={toggleNewTransactionModal} />

        <Dashboard />

        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={toggleNewTransactionModal}
        />

        <GlobalStyle />
      </TransactionsProvider>
    </ThemeProvider>
  );
}

export default App;
