import React from "react";
import "./history.css";
import { Link } from 'react-router-dom';
const FinBuddyHome = () => {
  return (
    <div className="history-page">
      <div className="navbar">
        <div className="navbar-left">
      
          <Link to="/dashboard" className="nav-link">Finbuddy</Link>
        </div>
        <div className="navbar-right">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/history" className="nav-link">History</Link>
          <Link to="/lending" className="nav-link">Lending</Link>
          <Link to="/request" className="nav-link">Request Loan</Link>
        </div>
      </div>
      <div className="container">
        
        <div className="history-container">
          <h2>Transaction History</h2>
          <div className="transaction-list">
            <div className="transaction">
              <img
                src="https://img.freepik.com/free-vector/vintage-bike-design_1268-347.jpg?t=st=1738690128~exp=1738693728~hmac=6872117ed19f1bc31fb6fc1a01121a277f64aead1a0ab9e7013fa485cd3bb1fb&w=740"
                alt="Transaction Item Photo"
              />
              <div className="transaction-details">
                <p><strong>Transaction 1</strong></p>
                <p>Item: Vintage Bike</p>
                <p>Type: Borrowed</p>
                <p>Date: January 5, 2023</p>
              </div>
              <div className="transaction-details">
                <p><strong>Price:</strong> $50/day</p>
                <p><strong>Description:</strong> A vintage bike in excellent condition, perfect for rides around the city.</p>
                <a href="profile.html" className="profile-link">
                  <img src="https://thispersondoesnotexist.com/" alt="Lender/Borrower Photo" />
                  View Profile &gt;&gt;
                </a>
              </div>
            </div>
            <div className="transaction">
              <img
                src="https://i.pinimg.com/736x/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg"
                alt="Transaction Item Photo"
              />
              <div className="transaction-details">
                <p><strong>Transaction 2</strong></p>
                <p>Item: Camera</p>
                <p>Type: Lent</p>
                <p>Date: February 10, 2023</p>
              </div>
              <div className="transaction-details">
                <p><strong>Price:</strong> $30/day</p>
                <p><strong>Description:</strong> A high-quality DSLR camera with multiple lenses and accessories included.</p>
                <a href="profile.html" className="profile-link">
                  <img src="https://thispersondoesnotexist.com/" alt="Lender/Borrower Photo" />
                  View Profile &gt;&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinBuddyHome;
