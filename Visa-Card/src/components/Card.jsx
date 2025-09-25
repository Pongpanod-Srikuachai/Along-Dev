import React from 'react';

const Card = () => {
  return (
    <section className="visa-card-container">
      <div className="visa-card">
        <div className="card-header">
          <span className="card-type">VISA</span>
          <div className="available-balance">
            <div className="balance-label">Available Balance</div>
            <div className="balance-amount">$ 7,392.00</div>
          </div>
        </div>
        <div className="card-number">
          <span>42012</span>
          <span>3049</span>
          <span>2800</span>
          <span>9815</span>
        </div>
        <div className="card-details">
          <span>EXPIRE • 02/22</span>
          <span>CVC CODE • 230</span>
        </div>
      </div>
    </section>
  );
};

export default Card;