import React from "react";
import Giftme from "./Giftme";
import "./Transaction.css";

function Transaction(props) {
  const { items } = props;

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  if (items.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '3rem 1rem',
        color: 'var(--text-muted)'
      }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No transactions yet</p>
        <p style={{ fontSize: '0.875rem' }}>Add your first transaction to get started</p>
      </div>
    );
  }

  return (
    <div className="transaction-list">
      {items.map((item) => (
        <Giftme {...item} key={item.id} formatNumber={formatNumber} />
      ))}
    </div>
  );
}

export default Transaction;
