import React from 'react'
import './App.scss';
import { BrowserRouter as Router, HashRouter, Route, Link } from 'react-router-dom';
import QuestionPage from './components/QuestionPage';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <div className="questions">
        <Router >

          <Route exact path={process.env.PUBLIC_URL + "/"}>
            <LandingPage/>
          </Route>

          <Route exact path={process.env.PUBLIC_URL + "/question"}>
            <QuestionPage />
          </Route>

        </Router>
      </div>
    </div>
  )
}

export default App;
