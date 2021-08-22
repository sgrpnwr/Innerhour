import React from 'react'
import "./css/Nav.css"
import {NavLink} from "react-router-dom";
const style={
    activelink:{textDecoration:"none",fontWeight:"bold"}
  }

function Nav() {
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/"><img src="https://i.ibb.co/LCzw9w4/inner.png" alt="" width="120" height="auto"/></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
          <NavLink activeStyle={style.activelink} className="nav-link" exact to="/" href="/">Home</NavLink>
        </li>
        <li class="nav-item active">
          <NavLink activeStyle={style.activelink} className="nav-link" exact to="/lists" href="/">Lists</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeStyle={style.activelink} className="nav-link" to="/pomodoro" href="/">Pomodore Clock</NavLink>

        </li>
        
        
      </ul>
      
    </div>
  </nav>
}

export default Nav


