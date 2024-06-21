import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./Header.jsx";
import Footer from "./Components/Pages/WorkoutInput/Footer.jsx";
import Workout from "./Components/Pages/WorkoutInput/Workout.jsx";
import SetCard from "./Components/Pages/WorkoutInput/SetCard.jsx";
import LandingPage from './Components/Pages/LandingPage/LandingPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/workout" component={Workout} />
        <Route path="/set-card" component={SetCard} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;