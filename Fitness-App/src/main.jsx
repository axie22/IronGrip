import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import LandingPage from './Components/Pages/LandingPage/LandingPage.jsx'; 
import Workout from "./Components/Pages/WorkoutInput/Workout.jsx";
import SetCard from "./Components/Pages/WorkoutInput/SetCard.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="workout" element={<Workout />} />
          <Route path="set-card" element={<SetCard />} />
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
