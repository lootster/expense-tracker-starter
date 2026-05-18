import { useState } from 'react'
import { fmtAmount } from './format';

const categories = ["food", "housing", "utilities", "transport", "entertainment", "salary", "other"];

function TransactionList({ transactions, onDelete }) {
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  let filtered = transactions;
  if (filterType !== "all") {
    filtered = filtered.filter(t => t.type === filterType);
  }
  if (filterCategory !== "all") {
    filtered = filtered.filter(t => t.category === filterCategory);
  }

  return (
    <div className="transactions terminal-card">
      <h2 className="section-heading">LEDGER.TAIL</h2>
      <div className="filters">
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="all">ALL TYPES</option>
          <option value="income">INCOME</option>
          <option value="expense">EXPENSE</option>
        </select>
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="all">ALL CATEGORIES</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat.toUpperCase()}</option>
          ))}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th style={{ textAlign: 'right' }}>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.description}</td>
              <td style={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t.category}</td>
              <td
                style={{ textAlign: 'right' }}
                className={t.type === "income" ? "income-amount" : "expense-amount"}
              >
                {t.type === "income" ? "+" : "-"}{fmtAmount(Math.abs(t.amount))}
              </td>
              <td style={{ width: 1 }}>
                <button
                  className="delete-btn"
                  onClick={() => {
                    if (window.confirm("Delete this transaction?")) {
                      onDelete(t.id);
                    }
                  }}
                >
                  del
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
