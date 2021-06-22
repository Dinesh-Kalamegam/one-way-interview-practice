import React from 'react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import QuestionPage from './components/QuestionPage';
import './App.css';

function App() {
  const questions = require("./questions.json")
  const general = questions["general"]
  return(
    <div className="App">
      <div className="questions">
        <Router>
          <Route exact path={process.env.PUBLIC_URL+"/"}>
          <h1 className="title"> One Way Interview Practice</h1>
          <h2 className="question-type">General Questions</h2>
            {general.map((x,index)=>
                <Link key={index}to={process.env.PUBLIC_URL+"/"+index}>
                  <p className="question-link">({index}) {x}</p>
                </Link>
              )}
          </Route>
        
        {general.map((x,index)=>
          <Route key={index} exact path={process.env.PUBLIC_URL+"/"+index}>
            <QuestionPage key ={index} question={x}/>
          </Route>
        )}

      </Router>
      </div>
    </div>
  )
}

export default App;
