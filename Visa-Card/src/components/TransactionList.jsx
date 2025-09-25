import React from 'react';

const TransactionList = ({ transactions }) => {
  const getIcon = (type, name) => {
    if (type === 'income') {
      return name.includes('Salary') ? <i className="fas fa-sack-dollar"></i> : <i className="fas fa-briefcase"></i>;
    }
    if (name.includes('Restaurant')) {
      return <i className="fas fa-utensils"></i>;
    }
    if (name.includes('Market')) {
      return <i className="fas fa-store"></i>;
    }
    return <i className="fas fa-file-alt"></i>;
  };

  return (
    <ul className="transaction-list">
      {transactions.map((transaction, index) => (
        <li key={index} className="transaction-item">
          <div className="transaction-icon">{getIcon(transaction.type, transaction.name)}</div>
          <div className="transaction-details">
            <div className="transaction-name">{transaction.name}</div>
            <div className="transaction-date">{transaction.date}</div>
          </div>
          <div className={`transaction-amount amount-${transaction.type}`}>
            {transaction.type === 'expense' ? (
              <span>${transaction.amount} <i className="fas fa-arrow-up"></i></span>
            ) : (
              <span>${transaction.amount} <i className="fas fa-arrow-down"></i></span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;