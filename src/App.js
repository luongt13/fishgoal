import './App.css';
import {Route} from "react-router-dom"
import Nav from "./components/Nav.jsx"
import Goals from "./components/Goals.jsx"


function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/">
        <Goals />
      </Route>
    </div>
  );
}

export default App;
