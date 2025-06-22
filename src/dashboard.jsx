import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="nav-link">FinBuddy</Link>
        </div>
        <div className="navbar-right">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/history" className="nav-link">History</Link>
          <Link to="/lending" className="nav-link">Lending</Link>
          <Link to="/request" className="nav-link">Request Loan</Link>
        </div>
      </nav>

      {/* Dashboard Container */}
      <div className="container">
        {/* Profile Section */}
        <div className="card profile">
          <img 
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" 
            alt="User Photo"
          />
          <h3>John Doe</h3>
          <p>Mobile: 123-456-7890</p>
          <p>Joined: January 1, 2022</p>
          <p>Total Transactions: 50</p>
          <p>Total People Transacted With: 20</p>
          
          <h4 className="section-title">Top Interacted Users</h4>
          <div className="item-list top-users">
            <img src="https://thispersondoesnotexist.com/" alt="User 1" />
            <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*3Q2Ek1UIyaz_lowodJ6nUg.jpeg" alt="User 2" />
            <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="User 3" />
          </div>
        </div>

        {/* Lending and Borrowing Sections */}
        <div className="horizontal-card">
          {/* Lending History */}
          <div className="card">
            <div className="details">
              <h3 className="section-title">Lending History</h3>
              <p>Total Lent: 10 items</p>
              <h4 className="section-title">Recent Items Lent</h4>
            </div>
            <div className="item-list recent-items">
              <img 
                src="https://img.freepik.com/free-vector/vintage-bike-design_1268-347.jpg" 
                alt="Item 1"
              />
              <img 
                src="https://img.freepik.com/free-vector/calculating-costs_24877-49122.jpg" 
                alt="Item 2"
              />
              <img 
                src="https://img.freepik.com/free-psd/money-illustration-isolated_23-2151568528.jpg" 
                alt="Item 3"
              />
              <Link to="/history" className="view-history">
                View complete history &gt;&gt;
              </Link>
            </div>
          </div>

          {/* Borrowing History */}
          <div className="card">
            <div className="details">
              <h3 className="section-title">Borrowing History</h3>
              <p>Total Borrowed: 8 items</p>
              <h4 className="section-title">Recent Items Borrowed</h4>
            </div>
            <div className="item-list recent-items">
              <img 
                src="https://img.freepik.com/free-vector/vintage-bike-design_1268-347.jpg" 
                alt="Item 1"
              />
              <img 
                src="https://img.freepik.com/free-vector/calculating-costs_24877-49122.jpg" 
                alt="Item 2"
              />
              <img 
                src="https://img.freepik.com/free-psd/money-illustration-isolated_23-2151568528.jpg" 
                alt="Item 3"
              />
              <Link to="/history" className="view-history">
                View complete history &gt;&gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
