import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Workout from "./Components/Pages/WorkoutInput/Workout.jsx";
import SetCard from "./Components/Pages/WorkoutInput/SetCard.jsx";
import LandingPage from './Components/Pages/LandingPage/LandingPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  /* <Route path="/" element={<LandingPage />} /> */
  return (
      <>
        <Header />
        
        <Routes>  
          <Route path="/" element={<h1>Landing Page</h1>} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/set-card" element={<SetCard />} />
        </Routes>
        
        <Footer />
      </>
  );
  /* 
    Later on we're going to want to add id attributes to the paths so they aren't hardcoded
    <Route path="/myprofile/:id" element={<Workout />} />

  */
}

export default App;

