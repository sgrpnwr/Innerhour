import React from "react";
import style from "./css/Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={style.homebox}>
    <h1 className={style.typing}>Hey Recruiter :)</h1>
    <h1 >Please find my submission below</h1>
      <Link style={{ textDecoration: "none" }} to="/lists">
        <button className={style.assignment}>Lists</button>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/pomodoro">
        <button className={style.assignment}>Pomodore Clock</button>
      </Link>
    </div>
  );
}

export default Home;
