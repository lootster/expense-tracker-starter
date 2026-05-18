import { useState } from 'react'
import './App.css'
import Summary from './Summary'
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'
import CategoryChart from './CategoryChart'

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Salary", amount: 5000, type: "income", category: "salary", date: "2025-01-01" },
    { id: 2, description: "Rent", amount: 1200, type: "expense", category: "housing", date: "2025-01-02" },
    { id: 3, description: "Groceries", amount: 150, type: "expense", category: "food", date: "2025-01-03" },
    { id: 4, description: "Freelance Work", amount: 800, type: "expense", category: "salary", date: "2025-01-05" },
    { id: 5, description: "Electric Bill", amount: 95, type: "expense", category: "utilities", date: "2025-01-06" },
    { id: 6, description: "Dinner Out", amount: 65, type: "expense", category: "food", date: "2025-01-07" },
    { id: 7, description: "Gas", amount: 45, type: "expense", category: "transport", date: "2025-01-08" },
    { id: 8, description: "Netflix", amount: 15, type: "expense", category: "entertainment", date: "2025-01-10" },
  ]);

  const handleAdd = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const now = new Date();
  const stamp = now.toISOString().replace('T', ' ').slice(0, 19);

  return (
    <div className="app">
      <div className="header-bar">
        <span className="brand">FIN-TRACK_</span>
        <span className="meta">
          <span><span className="dot"></span>LIVE</span>
          <span>{stamp} UTC</span>
          <span>v0.18.5</span>
        </span>
      </div>

      <p className="prompt-line">
        query: balance --month=current --verbose<span className="cursor"></span>
      </p>

      <Summary transactions={transactions} />
      <CategoryChart transactions={transactions} />
      <TransactionForm onAdd={handleAdd} />
      <TransactionList transactions={transactions} onDelete={handleDelete} />

      <div className="status-bar">
        <span className="pulse"></span>
        <span>SESSION OK</span>
        <span className="sep">│</span>
        <span>{transactions.length} RECORDS</span>
        <span className="sep">│</span>
        <span>ENCRYPTED · LOCAL</span>
        <span className="sep">│</span>
        <span style={{ marginLeft: 'auto' }}>READY</span>
      </div>
    </div>
  );
}

export default App
