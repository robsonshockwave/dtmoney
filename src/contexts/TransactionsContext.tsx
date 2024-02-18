import { createContext, useEffect, useState } from 'react';

interface Transaction {
  id: number;
  description: string;
  price: number;
  type: 'income' | 'outcome';
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function loadTransactions() {
      const response = await fetch('http://localhost:3000/transactions');
      const data = await response.json();

      setTransactions(data);
    }

    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions: transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
