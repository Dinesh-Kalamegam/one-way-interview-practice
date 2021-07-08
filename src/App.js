import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './components/Nav'
import LandingPage from './components/LandingPage';
import QuestionPage from './components/QuestionPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router >
        {/* <Nav /> */}
        <div className="app-content">

          <Route exact path={process.env.PUBLIC_URL + "/"}>
            <QuestionPage />
          </Route>

          <Route exact path={process.env.PUBLIC_URL + "/question"}>
            <QuestionPage />
          </Route>

        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
