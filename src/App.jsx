import { useEffect, useState } from "react";
import "./App.css";
import Transaction from "./components/Transaction";
import FormComponents from "./components/FormComponents";
import DataContext from "./Data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="nav-brand">
          <div className="nav-logo">
            ₿
          </div>
          <h2 className="nav-title">FinTrack</h2>
        </div>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              <svg className="nav-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Overview
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/insert" className={location.pathname === "/insert" ? "active" : ""}>
              <svg className="nav-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Transaction
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  const [items, setItem] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItem((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expens =
      amounts.filter((element) => element < 0).reduce((total, element) => (total += element), 0) *
      -1;

    setReportIncome(income.toFixed(2));
    setReportExpense(expens.toFixed(2));
  }, [items, reportIncome, reportExpense]);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navigation />

          <main style={{ flex: 1, padding: '2rem 0' }}>
            <div className="container slide-in">
              <Routes>
                <Route path="/" element={<ReportComponent />}></Route>
                <Route
                  path="/insert"
                  element={
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="slide-in">
                        <div className="card mb-6 shimmer-effect">
                          <h3 className="mb-4">Add New Transaction</h3>
                          <FormComponents onAddItem={onAddNewItem} />
                        </div>
                      </div>
                      <div className="slide-in">
                        <div className="card">
                          <h3 className="mb-4">Recent Transactions</h3>
                          <Transaction items={items} />
                        </div>
                      </div>
                    </div>
                  }
                ></Route>
              </Routes>
            </div>
          </main>

          <footer style={{
            backgroundColor: 'var(--bg-card)',
            borderTop: '1px solid var(--border-color)',
            padding: '2rem 0',
            marginTop: 'auto',
            backdropFilter: 'blur(20px)'
          }}>
            <div className="container">
              <div className="text-center">
                <p style={{
                  color: 'var(--text-muted)',
                  margin: 0,
                  fontSize: '0.875rem',
                  letterSpacing: '0.5px'
                }}>
                  © 2025 FinTrack. Built with
                  <span style={{
                    color: 'var(--primary-light)',
                    fontWeight: '600',
                    margin: '0 0.25rem'
                  }}>❤</span>
                  using React and modern design.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
