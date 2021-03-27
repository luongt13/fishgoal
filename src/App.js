import './App.css';
import {Route} from "react-router-dom"
import {useState} from "react"
import Nav from "./components/Nav"
import Goals from "./components/Goals"
import Caught from "./components/Caught"
import Missed from "./components/Missed"

function App() {
  const [complete, setComplete] = useState([])
  const [incomplete, setIncomplete] = useState([])

  return (
    <div className="App">
      <Route path="/">
        <Nav />
      </Route>
      <Route exact path="/goals">
        <Goals setIncomplete={setIncomplete} setComplete={setComplete}/>
      </Route>
      <Route exact path="/caught">
        {complete.map((complete)=> {
          return <Caught key={complete.id} complete={complete}/>
      })}
      </Route>
      <Route exact path="/missed">
        {incomplete.map((incomplete)=> {
                  return <Missed key={incomplete.id} incomplete={incomplete}/>
              })}
      </Route>
      </div>
  );
}

export default App;
