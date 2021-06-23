import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import QuestionPage from './components/QuestionPage';
import HomeHero from './components/HomeHero';

function App() {
  const questions = require("./questions.json")
  const general = questions["General"]

  // Object.entries(questions).map(([k,v])=>console.log(k,v))
  return (
    <div className="App">
      <div className="questions">
        <Router>

          <Route exact path={process.env.PUBLIC_URL + "/"}>
            <HomeHero />

            {
              Object.entries(questions).map(([k, v]) => (
                <div>
                  <h2 className="question-type">{k}</h2>
                  {
                    v.map((x, index) =>
                    <Link key={index} to={process.env.PUBLIC_URL + "/"+k+"/"+index}>
                      <p className="question-link">({index}) {x}</p>
                    </Link>)
                  }
                </div>
              ))
            }
          </Route>

          {
            Object.entries(questions).map(([k,v])=>(
              v.map((x,index)=>
                <Route key={index} exact path={process.env.PUBLIC_URL+"/"+k+"/"+index}>
                  <QuestionPage key ={index} question={x}/>
                </Route>
              )
            ))

          }
    

        </Router>
      </div>
    </div>
  )
}

export default App;
