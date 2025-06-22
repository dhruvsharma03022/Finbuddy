import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './login';
import History from './history';
import Dashboard from './dashboard';
import Home from './home';
import Lending from './lending';
import Request from './request';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/history" element={<History />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lending" element={<Lending />} />
        <Route path="/request" element={<Request />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
