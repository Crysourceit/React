import { useContext } from "react";
import DataContext from "../Data/DataContext";

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const balance = income - expense;
  const balanceClass = balance >= 0 ? "positive" : "negative";

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="mb-2" style={{ fontSize: '2.5rem', fontWeight: 700 }}>Financial Overview</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Track your income and expenses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card text-center">
          <h3 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Current Balance</h3>
          <div className={`balance-amount ${balanceClass}`}>
            ฿{formatNumber(balance.toFixed(2))}
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            {balance >= 0 ? 'Financially Healthy' : 'Needs Attention'}
          </p>
        </div>

        <div className="card text-center">
          <h3 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Total Income</h3>
          <div className="amount positive">
            ฿{formatNumber(income)}
          </div>
          <p style={{ color: 'var(--success)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            +{income > 0 ? ((income / (income + expense)) * 100).toFixed(1) : 0}% of total
          </p>
        </div>

        <div className="card text-center">
          <h3 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Total Expenses</h3>
          <div className="amount negative">
            ฿{formatNumber(expense)}
          </div>
          <p style={{ color: 'var(--danger)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            {expense > 0 ? ((expense / (income + expense)) * 100).toFixed(1) : 0}% of total
          </p>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '1.5rem' }}>Financial Summary</h3>
        <div className="summary-stats">
          <div className="stat-item">
            <span className="stat-label">Net Cash Flow</span>
            <span className={`stat-value ${balance >= 0 ? 'positive' : 'negative'}`}>
              {balance >= 0 ? '+' : ''}฿{formatNumber(balance.toFixed(2))}
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Savings Rate</span>
            <span className="stat-value">
              {income > 0 ? ((balance / income) * 100).toFixed(1) : 0}%
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Total Transactions</span>
            <span className="stat-value">0</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .balance-amount {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0.5rem 0;
        }

        .amount {
          font-size: 2rem;
          font-weight: 600;
          margin: 0.5rem 0;
        }

        .positive {
          color: var(--success);
          text-shadow: 0 0 10px rgb(16 185 129 / 0.3);
        }

        .negative {
          color: var(--danger);
          text-shadow: 0 0 10px rgb(239 68 68 / 0.3);
        }

        .summary-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .stat-value {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
};

export default ReportComponent;
