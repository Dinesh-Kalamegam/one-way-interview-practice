import './App.css';
import VideoRecorder from 'react-video-recorder'
import { useState } from 'react'

function App() {
  const [userTimeLimit, setUserTimeLimit] = useState(3000)
  const [userCountDown, setUserCountDown] = useState(3000)

  return (
    <div className="App">
      <div className="video-container">
        <VideoRecorder
          countdownTime={userCountDown}
          timeLimit={userTimeLimit}
          showReplayControls={true}
        />
      </div>

      <div className="options-container">
        <h2>Question</h2>
        <p>What project are you currently working on?</p>

        <h3> Options</h3>

        <p>Set the Time Limit of an answer</p>
        <button value={2000} onClick={e => setUserTimeLimit(e.target.value)}>2s</button>
        <button value={3000} onClick={e => setUserTimeLimit(e.target.value)}>3s</button>
        <button value={5000} onClick={e => setUserTimeLimit(e.target.value)}>5s</button>
        <button value={10000} onClick={e => setUserTimeLimit(e.target.value)}>10s</button>
        <button value={15000} onClick={e => setUserTimeLimit(e.target.value)}>15s</button>
        <button value={25000} onClick={e => setUserTimeLimit(e.target.value)}>25s</button>

        <p> Set the Countdown before recording </p>

        <button value={2000} onClick={e => setUserCountDown(e.target.value)}>2s</button>
        <button value={3000} onClick={e => setUserCountDown(e.target.value)}>3s</button>
        <button value={5000} onClick={e => setUserCountDown(e.target.value)}>5s</button>
        <button value={10000} onClick={e => setUserCountDown(e.target.value)}>10s</button>
        <button value={15000} onClick={e => setUserCountDown(e.target.value)}>15s</button>
        <button value={25000} onClick={e => setUserCountDown(e.target.value)}>25s</button>
      </div>
    </div>
  );
}

export default App;
