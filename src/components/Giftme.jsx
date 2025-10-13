import React from "react";
import PropTypes from "prop-types";
import "./Giftme.css";

const Giftme = (props) => {
  const { title, amount, formatNumber: parentFormatNumber } = props;

  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";

  const formatNumber = (num) => {
    return parentFormatNumber ? parentFormatNumber(num) : num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className={`transaction-item ${status}`}>
      <div className="transaction-content">
        <div className="transaction-info">
          <h4 className="transaction-title">{title}</h4>
          <p className="transaction-type">{status === 'income' ? 'Income' : 'Expense'}</p>
        </div>
        <div className="transaction-amount">
          <span className="amount-symbol">{symbol}</span>
          <span className="amount-value">฿{formatNumber(Math.abs(amount))}</span>
        </div>
      </div>
    </div>
  );
};

Giftme.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  formatNumber: PropTypes.func,
};

export default Giftme;
