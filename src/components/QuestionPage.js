import React from 'react'
import { useState } from 'react'
import './QuestionPage.scss';
import VideoRecorder from 'react-video-recorder'
import { Link } from 'react-router-dom'

function QuestionPage(props) {
  const [userTimeLimit, setUserTimeLimit] = useState(30000)
  const [userCountDown, setUserCountDown] = useState(3000)

  return (
    <React.Fragment>
      <h2 className="question-title">
        <Link className="go-back-arrow" to={process.env.PUBLIC_URL + "/"}></Link>
        {props.question}
      </h2>

      <div className="QuestionPage">
        <div className="video-container">
          <VideoRecorder
            countdownTime={userCountDown}
            timeLimit={userTimeLimit}
            showReplayControls={true}
          />
          <select className="selection-option" onClick={e => setUserTimeLimit(parseInt(e.target.value))}>
            <option value="10000">Time Limit: 10 seconds</option>
            <option value="30000">Time Limit: 30 seconds</option>
            <option value="60000">Time Limit: 1 minute</option>
            <option value="120000">Time Limit: 2 minutes</option>
            <option defaultValue value="180000">Time Limit: 3 minutes</option>
          </select>

          <select className="selection-option" onClick={e => setUserCountDown(parseInt(e.target.value))}>
            <option defaultValue value="3000">Countdown: 3 seconds</option>
            <option value="10000">Countdown: 10 seconds</option>
            <option value="30000">Countdown: 30 seconds</option>
            <option value="60000">Countdown: 1 minute</option>
            <option value="120000">Countdown: 2 minutes</option>
            <option value="180000">Countdown: 3 minutes</option>
          </select>
        </div>

      </div>
    </React.Fragment>
  );
}

export default QuestionPage;
