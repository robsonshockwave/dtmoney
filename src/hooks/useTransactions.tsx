import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

// interface TransactionInput {
//   title: string;
//   type: string;
//   category: string;
//   amount: number;
//   createdAt: string;
// }

// type TransactionInput = Omit<Transaction, "id" | "createdAt">;

export type TransactionInput = Pick<
  Transaction,
  "title" | "amount" | "type" | "category"
>;

interface TransactionsProviderProps {
  children: React.ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const createTransaction = async (newTransaction: TransactionInput) => {
    const response = await api.post("/transactions", {
      ...newTransaction,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  };

  const getTransactions = async () => {
    const response = await api.get("/transactions");

    setTransactions(response.data.transactions);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
