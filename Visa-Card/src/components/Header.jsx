import React from 'react';

const Header = ({ title, showGraph, isDetailPage }) => {
  return (
    <header className={isDetailPage ? 'header detail-header' : 'header'}>
      <span className="header-icon">
        {isDetailPage ? <i className="fas fa-arrow-left"></i> : <i className="fas fa-bars"></i>}
      </span>
      <span className="header-text">{title}</span>
      <span className="header-icon">
        {showGraph ? <i className="fas fa-chart-bar"></i> : <i className="fas fa-camera"></i>}
      </span>
    </header>
  );
};

export default Header;