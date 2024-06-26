import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
  /* 
    Later on we're going to want to add id attributes to the paths so they aren't hardcoded
    <Route path="/myprofile/:id" element={<Workout />} />

  */

export default App;
