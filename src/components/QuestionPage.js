import React, { useState } from 'react'
import VideoRecorder from 'react-video-recorder'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.scss';
import './QuestionPage.scss';
import { useModal, Modal } from 'react-morphing-modal';
import './react-modal-custom.scss';


function QuestionPage() {
  const questions = require("../questions.json")
  const [questionAsked, setQuestionAsked] = useState("Tell Me About Yourself")
  const [userTimeLimit, setUserTimeLimit] = useState(30000)
  const [userCountDown, setUserCountDown] = useState(3000)

  const { modalProps, getTriggerProps } = useModal({
  });

  return (
    <React.Fragment>
      {/* <section className="header-section">
        <h1> One Way Interview Practice</h1>
      </section> */}
      <section className="QuestionPage" >
        <div className="question-area" >
          <div className="question-area-video question-page-section">
            <div className="question-title-area question-page-section">
              <h2 className="question">  {questionAsked} </h2>
              <button className="change-question" {...getTriggerProps()}>Change Question</button>
            </div>
            <VideoRecorder
              countdownTime={userCountDown}
              timeLimit={userTimeLimit}
              showReplayControls={true}
            />
            <div className="recording-option-container">
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
          </div>

          <div className="question-area-notes question-page-section">
            <p>Some Space to gather your thoughts</p>
            <textarea placeholder="click here and start typing" label="notes" className="question-area-notes-input" type="text"></textarea>

          </div>
        </div>

        <Modal className="question-selection-modal" {...modalProps}>
          <Tabs>
            <div><p className="current-question">CURRENT QUESTION :  {questionAsked} </p> </div>
            <TabList>
              {
                Object.keys(questions).map(k => (
                  <Tab key={k}>{k}</Tab>
                ))
              }
            </TabList>
            {
              Object.values(questions).map((v, ind) => (
                <TabPanel className="question-area-selection-panel" key={ind} >
                  {v.map((q, qInd) => (<button key={qInd} className="question-selection-button" value={q} onClick={e => setQuestionAsked(e.target.value)}>{q}</button>))}

                </TabPanel>
              ))
            }
          </Tabs>
        </Modal>

      </section>
    </React.Fragment>
  );
}

export default QuestionPage;
