//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  // home score state 


  const homeScore = 0;
  const [hScore, sethomeScore] = useState(homeScore);

  // away socre state 


  const awayScore = 0;
  const [aScore, setawayScore] = useState(awayScore);

  const down = 0;
  const [dV, setDown] = useState(down);
  
  const ToGo = 0;
  const [tGV, setToGo] = useState(ToGo);

  const ballON = 0;
  const [bV, setballON] = useState(ballON);

  const quarter = 0;
  const [qV, setQuarter] = useState(quarter);

  const [seconds, setSeconds] = useState(900);
  const [isRunning, setIsRunning] = useState(false);

 useEffect(() => {
   if (isRunning) {
     window.setInterval(() => {
       setSeconds(seconds => seconds-1);
     }, 1000);
   }
   else { 
     window.clearInterval();
   };
 }, [isRunning]);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Colts</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
  <div className="home__score">{hScore} </div>
          </div>
          <div className="timer">{seconds}</div>
          <div className="away">
            <h2 className="away__name">Chiefs</h2>
  <div className="away__score">{aScore}</div>
          </div>
        </div>
        <BottomRow dV = {dV} tGV = {tGV} bV = {bV} qV = {qV} />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown "  onClick={() => sethomeScore(hScore + 6)}>Home Touchdown</button>
          <button className="homeButtons__extraPoint" onClick={() => sethomeScore(hScore + 1)}>Home Extra Point</button>
          <button className="homeButtons__fieldGoal" onClick={() => sethomeScore(hScore + 3)}>Home Field Goal</button>
          <button className='homeButtons__safety' onClick={() => sethomeScore(hScore + 2)}>Home Safety</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setawayScore(aScore + 6)}>Away Touchdown</button>
          <button className="awayButtons__extraPoint" onClick={() => setawayScore(aScore + 1)}>Away Extra Point</button>
          <button className="awayButtons__fieldGoal" onClick={() => setawayScore(aScore + 3)}>Away Field Goal</button>
          <button className='awayButtons__safety' onClick={() => setawayScore(aScore + 2)}>Away Safety</button>
        </div>
        <div className= 'otherButtons'>
          
          <button className = 'otherButtons__down' onClick={() => setDown(dV + 1)}> Down</button>
          <button className = 'otherButtons__yardsToGo'  onClick={() => setToGo(tGV + 1)}> Yards To Go</button>
          <button className = 'otherButtons__ballON' onClick={() => setballON(bV + 1)}> ballOn</button>
          <button className = 'otherButtons__Quarter' onClick={() => setQuarter(qV + 1)}> Quarter</button>
      </div>
      <div className = 'timer__Buttons'>
        <button className= 'Timer_Start' onClick={() => {
          setIsRunning(true);
        }}>Start Timer</button>
        <button className= 'pause_button' onClick={() => {
          setIsRunning(false);
        }}>Pause Timer</button>

      </div>
      </section>
    </div>
  );
}

export default App;
