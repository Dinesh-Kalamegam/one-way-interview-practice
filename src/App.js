import React from 'react'
import './App.scss';
import { BrowserRouter as Router, HashRouter, Route, Link } from 'react-router-dom';
import QuestionPage from './components/QuestionPage';
import HomeHero from './components/HomeHero';
import HomeHowWorks from './components/HomeHowWorks';

function App() {
  return (
    <div className="App">
      <div className="questions">
        <Router >

          <Route exact path={process.env.PUBLIC_URL + "/"}>
            {/* Hero Row of the Homepage */}
            <HomeHero />
            <HomeHowWorks/>
          <Link to={process.env.PUBLIC_URL + "/question" }>
            <h2> Try it  </h2>
          </Link>

            

          </Route>



          <Route exact path={process.env.PUBLIC_URL + "/question" }>
            <QuestionPage/>
          </Route>

        </Router>
      </div>
    </div>
  )
}

export default App;
