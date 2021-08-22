import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Lists from "./components/Lists";
import Pomodoro from "./components/Pomodoro";
import Home from "./components/Home";
import Info from "./components/Info";

function App() {
  <Router></Router>;
  return (
    <div className="App">
      <Router>
      <Nav/>
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/lists" component={Lists} />
          <Route path="/pomodoro" component={Pomodoro} />
          <Route path="/info" component={Info} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
