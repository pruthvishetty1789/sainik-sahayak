// src/components/Layout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">Sainik Sahayak</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/schemes">Schemes</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/grievances">Grievances</Link>
          <Link to="/sos">SOS</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

// No need for this line. The component is already exported as default above.
// Remove: export default Layout;
