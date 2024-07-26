import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css';

function App() {
  const user = localStorage.getItem('token');

  return (
    <div id="root">
      <Navbar />
      <div className="content">
        {user ? <Outlet /> : <Navigate to="/login" />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
