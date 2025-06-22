import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/login">Login</Link><br/>
      <Link to="/history">History</Link>
    </div>
  );
}
