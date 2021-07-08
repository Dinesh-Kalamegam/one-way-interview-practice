import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import VideoRecorder from 'react-video-recorder'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.scss';
import './QuestionPage.scss';

// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
//   AccordionItemState
// } from 'react-accessible-accordion';
// import './AccordionStyle.scss';

function QuestionPage() {
  const questions = require("../questions.json")
  const [questionAsked, setQuestionAsked] = useState("Tell Me About Yourself")

  const [userTimeLimit, setUserTimeLimit] = useState(30000)
  const [userCountDown, setUserCountDown] = useState(3000)

  return (
    <section className="QuestionPage" >

      <div className="question-title-area">
        {/* <Link to={process.env.PUBLIC_URL + "/"}>GO BACK</Link> */}
        <h2 >  {questionAsked} </h2>
      </div>

      <div className="question-area" >
        <div className="question-area-video">
          <VideoRecorder
            countdownTime={userCountDown}
            timeLimit={userTimeLimit}
            showReplayControls={true}
          />
          <select className="recording-option" onClick={e => setUserTimeLimit(parseInt(e.target.value))}>
            <option value="10000">Time Limit: 10 seconds</option>
            <option value="30000">Time Limit: 30 seconds</option>
            <option value="60000">Time Limit: 1 minute</option>
            <option value="120000">Time Limit: 2 minutes</option>
            <option defaultValue value="180000">Time Limit: 3 minutes</option>
          </select>

          <select className="recording-option" onClick={e => setUserCountDown(parseInt(e.target.value))}>
            <option defaultValue value="3000">Countdown: 3 seconds</option>
            <option value="10000">Countdown: 10 seconds</option>
            <option value="30000">Countdown: 30 seconds</option>
            <option value="60000">Countdown: 1 minute</option>
            <option value="120000">Countdown: 2 minutes</option>
            <option value="180000">Countdown: 3 minutes</option>
          </select>
        </div>

        <Tabs className="question-area-selection" >
        <TabList>
          {
            Object.entries(questions).map(([k, v]) => (
              <Tab>{k}</Tab>
            ))
          }
        </TabList>
        {
          Object.entries(questions).map(([k, v]) => (
            <TabPanel >
              {v.map(q => (<button className="question-selection-button" value={q} onClick={e => setQuestionAsked(e.target.value)}>{q}</button>))}
            </TabPanel>
          ))
        }
      </Tabs>

        {/* <Accordion allowMultipleExpanded allowZeroExpanded >
          {
            Object.entries(questions).map(([k, v]) => (
              <AccordionItem key={k}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {k}
                  </AccordionItemButton>
                </AccordionItemHeading>
                {
                  v.map((x, index) =>
                    <AccordionItemPanel key={index}>
                      <p >({index}) {x}</p>
                    </AccordionItemPanel>
                  )
                }
              </AccordionItem>
            ))
          }
        </Accordion> */}
      </div>

    </section>
  );
}

export default QuestionPage;
