import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Card from '../components/Card';
import TransactionList from '../components/TransactionList';
import '../App.css';

const HomePage = () => {
  const transactions = [
    { name: 'Restaurant Manhattan', date: 'June 10, 2018', amount: '170', type: 'expense' },
    { name: 'Salary Deposit', date: 'June 1, 2018', amount: '1,200', type: 'income' },
    // ...ข้อมูล transaction อื่นๆ
  ];

  return (
    <div className="screen-container">
      <Header title="All my accounts" showGraph={true} />
      <Card />
      <section className="summary-container">
        {/* โค้ดสำหรับ Income/Expense */}
      </section>
      <section>
        <div className="transaction-header">
          <span>Detail of movements</span>
          <Link to="/details"><i className="fas fa-file-invoice"></i></Link> {/* ใช้ Link สำหรับเปลี่ยนหน้า */}
        </div>
        <TransactionList transactions={transactions.slice(0, 4)} />
      </section>
    </div>
  );
};

export default HomePage;