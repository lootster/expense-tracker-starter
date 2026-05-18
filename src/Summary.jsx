import { fmtAmount } from './format';

function Summary({ transactions }) {
  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="summary">
      <div className="summary-card terminal-card">
        <h3>INFLOW</h3>
        <p className="income-amount">+{fmtAmount(Math.abs(totalIncome))}</p>
      </div>
      <div className="summary-card terminal-card">
        <h3>OUTFLOW</h3>
        <p className="expense-amount">-{fmtAmount(Math.abs(totalExpenses))}</p>
      </div>
      <div className="summary-card terminal-card">
        <h3>NET</h3>
        <p className={"balance-amount" + (balance < 0 ? " negative" : "")}>
          {balance >= 0 ? '+' : '-'}{fmtAmount(Math.abs(balance))}
        </p>
      </div>
    </div>
  );
}

export default Summary;
