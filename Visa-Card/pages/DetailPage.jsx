import React from 'react';
import Header from '../components/Header';
import TransactionList from '../components/TransactionList';
import '../App.css';

const DetailPage = () => {
  const allTransactions = [
    { name: 'Restaurant Manhattan', date: 'June 10, 2018', amount: '170', type: 'expense' },
    { name: 'Deposit Freelance', date: 'June 7, 2018', amount: '800', type: 'income' },
    { name: 'Central Market', date: 'June 6, 2018', amount: '50', type: 'expense' },
    // ...ข้อมูล transaction ทั้งหมด
  ];

  return (
    <div className="screen-container">
      <header className="detail-header">
        <div className="header" style={{ background: 'none' }}>
          {/* โค้ดสำหรับไอคอนลูกศรกลับ */}
        </div>
        {/* โค้ดสำหรับ Available Balance */}
      </header>
      <section className="summary-container detail-summary">
        {/* โค้ดสำหรับ Income/Expense */}
      </section>
      <section>
        <div className="detail-movements-header">
          <span>Detail of movements</span>
          <select className="weekly-dropdown">
            <option>Weekly</option>
          </select>
        </div>
        <TransactionList transactions={allTransactions} />
      </section>
    </div>
  );
};

export default DetailPage;