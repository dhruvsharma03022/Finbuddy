import "./home.css"
import React, { useState } from 'react';
import './home.css'; // Import the CSS file
import { Link } from 'react-router-dom';


const Home = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted:', email);
    // You can add your email sending logic here
    alert('App link will be sent to your email!');
    setEmail('');
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left"></div>
        <div className="navbar-right">
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/history" className="nav-link">History</Link>
          <Link to="/lending" className="nav-link">Lending</Link>
          <Link to="/request" className="nav-link">Request Loan</Link>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="welcome-section">
        <p><h1>Welcome to FinBuddy!</h1></p>
        <p style={{marginBottom: '30px'}}>
          FinBuddy is your go-to platform for lending and borrowing money and valuable items. 
          Connect, lend, and borrow effortlessly while managing all transactions with ease. 
          Join us today and be part of a supportive financial community!
        </p>
        <p><a href="#login" className="signup-btn">Sign Up</a></p>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>What We Do</h2>
        <div className="feature-item">
          <h3>Lend Money and Items</h3>
          <p>Securely lend money or valuable items to trusted individuals within the community.</p>
        </div>
        <div className="feature-item">
          <h3>Borrow Money and Items</h3>
          <p>Borrow money or items you need from reliable members with confidence.</p>
        </div>
        <div className="feature-item">
          <h3>Connect with Lenders and Borrowers</h3>
          <p>Find and connect with other users who are looking to lend or borrow.</p>
        </div>
        <div className="feature-item">
          <h3>Manage Your Transactions</h3>
          <p>Track and manage all your lending and borrowing activities in one place.</p>
        </div>
        <div className="feature-item">
          <h3>Transaction History</h3>
          <p>Keep a detailed history of all your transactions for transparency and accountability.</p>
        </div>
      </div>

      {/* Download Section */}
      <div className="download-section">
        <h2>Download the FinBuddy Mobile App</h2>
        <p>Get the app link sent to your email:</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button type="submit">Send App Link</button>
        </form>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2025 FinBuddy. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;