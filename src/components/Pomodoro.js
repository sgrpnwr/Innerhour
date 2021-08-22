import React, { useState, useEffect } from "react";
import style from "./css/Pomodore.module.css";

function Pomodoro() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [breakMessage, setbreakMessage] = useState(false);
  const [cycles, setCycles] = useState(2);
  const [cycleno, setCycleNo] = useState(1);
  const [start, setStart] = useState("");
  const [button, setButton] = useState("Start Timer");
  const [isNotEnded, setIsNotEnded] = useState(true);
  const [i, setI] = useState(0);
  const timer = () => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          setCycleNo(cycleno + 1);
          if (cycleno < cycles * 2) {
            let minutes = breakMessage ? 0 : 0;
            let seconds = breakMessage ? 10 : 5;

            setSeconds(seconds);
            setMinutes(minutes);
            setbreakMessage(!breakMessage);
          } else {
            setMinutes(0);
            setSeconds(0);
            setIsNotEnded(false);
            setButton("Start Again!");

            setI(0);
          }
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  };
  useEffect(() => {
    if (start === "start") timer();
  }, [seconds, start]);

  const dropdownHandler = (e) => {
    console.log(e.target.value);
    setCycles(e.target.value);
    if(isNotEnded===false){
      console.log("ended from dropdown")

    }
  };

  const startButtonHandler = () => {
    console.log(i);
    if (i === 0) {
      if(!isNotEnded){
        console.log("ended");
        setbreakMessage(false);
        setCycleNo(1);
        setIsNotEnded(true);
        setMinutes(0);
        setSeconds(10);
        setButton("Stop Timer")
      }
      else{
      setStart("start");
      setI(1);
      setButton("Stop Timer");}
    } else {
      setStart("stop");
      setButton("Start Timer");

      setI(0);
    }
  };

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className={style.clockbox}>
      <div className={`${style.message}`}>
        {breakMessage && isNotEnded && <div>Have some rest!</div>}
        {!isNotEnded && <div>Fin!</div>}
      </div>
      <div className={`${style.message}`}>
        {!breakMessage && <div>Let's do some work!</div>}
      </div>
      <div>
        {!breakMessage && (
          <div>
            <h5 className={style.subtext}>
              (Cycle number:{Math.floor(cycleno / 2) + 1})
            </h5>
          </div>
        )}
      </div>

      <div className={`${style.worktime} ${style.box}`}>
        <div className={style.timer}>
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
      <div className={style.buttonsdiv}>
        <button className={style.startstop} onClick={startButtonHandler}>
          {button}
        </button>
        <div className={style.cyclebox}>
          <select
            className={style.dropdown}
            onChange={dropdownHandler}
            id="items"
          >
            <option value="1">1</option>
            <option selected value="2">
              2
            </option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <h5>Cycles</h5>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
