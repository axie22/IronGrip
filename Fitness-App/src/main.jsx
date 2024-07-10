import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import Workout from './Pages/WorkoutInput/Workout.jsx';
import SetCard from './Pages/WorkoutInput/SetCard.jsx';
import UserProfile from './Pages/UserProfile/UserProfile.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="workout" element={<Workout />} />
          <Route path="set-card" element={<SetCard />} />
          <Route path="user-profile" element={<UserProfile />} />
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
