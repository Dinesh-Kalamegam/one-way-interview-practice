import React from 'react'
import './App.scss';
import QuestionPage from './components/QuestionPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1> One Way Interview Practice</h1>
        <a href="https://github.com/Dinesh-Kalamegam/one-way-interview-practice" target="_blank"> See Repo</a>
      </header>

        <div className="app-content">
            <QuestionPage />
        </div>
    </div>
  )
}

export default App;
