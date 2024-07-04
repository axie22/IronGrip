import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css';

function App() {
  return (
    <div id="root">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
