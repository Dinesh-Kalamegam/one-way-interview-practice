import React from 'react'
import './App.scss';
import QuestionPage from './components/QuestionPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <div className="app-content">
            <QuestionPage />
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default App;
