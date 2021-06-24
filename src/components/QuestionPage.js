import React from 'react'
import { useState } from 'react'
import './QuestionPage.scss';
import VideoRecorder from 'react-video-recorder'
import { Link } from 'react-router-dom'

function QuestionPage(props) {
  const [userTimeLimit, setUserTimeLimit] = useState(3000)
  const [userCountDown, setUserCountDown] = useState(3000)

  return (
    <React.Fragment>
        <h2>Question</h2>
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
          <p>Question Time Limit: {userTimeLimit}ms</p>
          <p>Countdown : {userCountDown}ms</p>
          <Link to={process.env.PUBLIC_URL + "/"}>GO BACK</Link>

          <h3> Options</h3>

          <p>Set the Time Limit of an answer</p>
          <React.Fragment>
            <button value={2000} onClick={e => setUserTimeLimit(parseInt(e.target.value))}>2s</button>
            <button value={3000} onClick={e => setUserTimeLimit(parseInt(e.target.value))}>3s</button>
            <button value={5000} onClick={e => setUserTimeLimit(parseInt(e.target.value))}>5s</button>
            <button value={10000} onClick={e => setUserTimeLimit(parseInt(e.target.value))}>10s</button>
            <button value={15000} onClick={e => setUserTimeLimit(parseInt(e.target.value))}>15s</button>
            <button value={25000} onClick={e => setUserTimeLimit(parseInt(e.target.value))}>25s</button>
          </React.Fragment>

          <p> Set the Countdown before recording </p>

          <React.Fragment>
            <button value={2000} onClick={e => setUserCountDown(parseInt(e.target.value))}>2s</button>
            <button value={3000} onClick={e => setUserCountDown(parseInt(e.target.value))}>3s</button>
            <button value={5000} onClick={e => setUserCountDown(parseInt(e.target.value))}>5s</button>
            <button value={10000} onClick={e => setUserCountDown(parseInt(e.target.value))}>10s</button>
            <button value={15000} onClick={e => setUserCountDown(parseInt(e.target.value))}>15s</button>
            <button value={25000} onClick={e => setUserCountDown(parseInt(e.target.value))}>25s</button>
          </React.Fragment>
        </div>

      </div>
    </React.Fragment>
  );
}

export default QuestionPage;
