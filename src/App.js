import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import QuestionPage from './components/QuestionPage';
import HomeHero from './components/HomeHero';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


function App() {
  const questions = require("./questions.json")
  const general = questions["General"]

  // Object.entries(questions).map(([k,v])=>console.log(k,v))
  return (
    <div className="App">
      <div className="questions">
        <Router>

          <Route exact path={process.env.PUBLIC_URL + "/"}>
            {/* Hero Row of the Homepage */}
            <HomeHero />

            {/* The Question and Links */}
            <Accordion allowMultipleExpanded allowZeroExpanded >
              {
                Object.entries(questions).map(([k, v]) => (
                  <AccordionItem key={k}>
                    <AccordionItemHeading>
                      <AccordionItemButton>{k}</AccordionItemButton>
                    </AccordionItemHeading>
                    {
                      v.map((x, index) =>
                        <AccordionItemPanel key={index}>
                          <Link className="question-link" key={index} to={process.env.PUBLIC_URL + "/" + k + "/" + index}>
                            <p >({index}) {x}</p>
                          </Link>
                        </AccordionItemPanel>
                      )
                    }
                  </AccordionItem>
                ))
              }
            </Accordion>
          </Route>

          {/* Generate All the Pages here */}
          {
            Object.entries(questions).map(([k, v]) => (
              v.map((x, index) =>
                <Route key={index} exact path={process.env.PUBLIC_URL + "/" + k + "/" + index}>
                  <QuestionPage key={index} question={x} />
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
