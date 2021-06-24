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
        <h2>Question</h2>
        <Link to={process.env.PUBLIC_URL + "/"}>GO BACK</Link>
        <p>{props.question}</p>
      <div className="QuestionPage">
        <div className="video-container">
          <VideoRecorder
            countdownTime={userCountDown}
            timeLimit={userTimeLimit}
            showReplayControls={true}
          />
        </div>

        <div className="options-container">
          {/* <p>Question Time Limit: {userTimeLimit}ms</p>
          <p>Countdown : {userCountDown}ms</p> */}
          

          <h3> Options</h3>

          <p>Set the Time Limit of an answer</p>
          <select className ="selection-option" onClick={e => setUserTimeLimit(parseInt(e.target.value))}>
            <option value="10000">10 seconds</option>
            <option value="30000">30 seconds</option>
            <option value="60000">1 minute</option>
            <option value="120000">2 minutes</option>
            <option defaultValue value="180000">3 minutes</option>
          </select> 

          <p> Set the Countdown before recording </p>

          <select className ="selection-option" onClick={e => setUserCountDown(parseInt(e.target.value))}>
            <option defaultValue value="3000">3 seconds</option>
            <option value="10000">10 seconds</option>
            <option value="30000">30 seconds</option>
            <option value="60000">1 minute</option>
            <option value="120000">2 minutes</option>
            <option value="180000">3 minutes</option>
          </select> 
        </div>

      </div>
    </React.Fragment>
  );
}

export default QuestionPage;
