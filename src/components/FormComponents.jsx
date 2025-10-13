import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FormComponents = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("expense");
  const [formValid, setFormValid] = useState(false);

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };

  const inputAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleTypeChange = (type) => {
    setTransactionType(type);
  };

  const saveItem = (event) => {
    event.preventDefault();
    const numericAmount = Number(amount);
    const finalAmount = transactionType === "expense" ? -Math.abs(numericAmount) : Math.abs(numericAmount);

    const itemData = {
      id: uuidv4(),
      title: title,
      amount: finalAmount,
    };

    props.onAddItem(itemData);
    setTitle("");
    setAmount("");
    setTransactionType("expense");
  };

  useEffect(() => {
    const checkData = title.trim().length > 0 && amount !== "" && Number(amount) !== 0;
    setFormValid(checkData);
  }, [title, amount]);

  return (
    <form onSubmit={saveItem} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: 500,
          color: 'var(--text-primary)'
        }}>
          Transaction Description
        </label>
        <input
          type="text"
          placeholder="Enter description..."
          onChange={inputTitle}
          value={title}
          className="input"
          style={{ fontSize: '1rem' }}
        />
      </div>

      <div>
        <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: 500,
          color: 'var(--text-primary)'
        }}>
          Amount
        </label>
        <input
          type="number"
          placeholder="0.00"
          onChange={inputAmount}
          value={amount}
          className="input"
          style={{ fontSize: '1rem' }}
          step="0.01"
        />
      </div>

      <div>
        <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: 500,
          color: 'var(--text-primary)'
        }}>
          Transaction Type
        </label>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            type="button"
            onClick={() => handleTypeChange("income")}
            className={`btn-secondary ${transactionType === "income" ? "active" : ""}`}
            style={{
              flex: 1,
              padding: '0.75rem',
              border: transactionType === "income" ? '2px solid var(--success)' : '1px solid var(--border-color)',
              backgroundColor: transactionType === "income" ? 'var(--success)' : 'var(--bg-card)',
              color: transactionType === "income" ? 'white' : 'var(--text-primary)',
              fontWeight: 500,
              boxShadow: transactionType === "income" ? '0 0 20px rgb(16 185 129 / 0.3)' : 'none'
            }}
          >
            Income
          </button>
          <button
            type="button"
            onClick={() => handleTypeChange("expense")}
            className={`btn-secondary ${transactionType === "expense" ? "active" : ""}`}
            style={{
              flex: 1,
              padding: '0.75rem',
              border: transactionType === "expense" ? '2px solid var(--danger)' : '1px solid var(--border-color)',
              backgroundColor: transactionType === "expense" ? 'var(--danger)' : 'var(--bg-card)',
              color: transactionType === "expense" ? 'white' : 'var(--text-primary)',
              fontWeight: 500,
              boxShadow: transactionType === "expense" ? '0 0 20px rgb(239 68 68 / 0.3)' : 'none'
            }}
          >
            Expense
          </button>
        </div>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <button
          type="submit"
          className="btn-primary"
          disabled={!formValid}
          style={{
            width: '100%',
            padding: '1rem',
            fontSize: '1rem',
            fontWeight: 600,
            opacity: formValid ? 1 : 0.5,
            cursor: formValid ? 'pointer' : 'not-allowed'
          }}
        >
          Add Transaction
        </button>
      </div>

      <style jsx>{`
        .btn-secondary.active {
          transform: translateY(-1px);
          box-shadow: var(--shadow-lg);
        }
      `}</style>
    </form>
  );
};

export default FormComponents;
