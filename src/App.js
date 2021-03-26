import './App.css';
import {Route} from "react-router-dom"
import Nav from "./components/Nav"
import Goals from "./components/Goals"
import Caught from "./components/Caught"
import Missed from "./components/Missed"

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Goals />
      </Route>
      <Route path="/caught">
        <Caught />
      </Route>
      <Route path="/missed">
        <Missed />
      </Route>
    </div>
  );
}

export default App;
