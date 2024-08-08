
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';

import './App.css'



function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000); // increment every 1 second
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };








  


  return (
    <>
      <div className="app">
        <div className="container">
          <div className="header">
            <h1>Automatic-Counter</h1>
            <p>Let the counter do the work for you</p>
          </div>
          <div className="count">
            <h2>{count}</h2>
          </div>
          <div className="button">
          <Button variant="contained"  onClick={handleStart} color="success">
        Start
      </Button>
      <Button variant="contained" onClick={handleStop} color="error">
        Stop
      </Button>
      <Button variant="contained" onClick={handleReset} color="warning">
        Reset
      </Button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
