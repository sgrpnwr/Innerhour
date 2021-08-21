import React from 'react'
import "./css/Nav.css"

function Nav() {
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Inner Hour <i class="fas fa-hourglass-half"></i></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Lists</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Pomodoro Clock</a>
        </li>
        
        
      </ul>
      
    </div>
  </nav>
}

export default Nav


