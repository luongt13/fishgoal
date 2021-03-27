import './App.css';
import {Route} from "react-router-dom"
import {baseURL, config} from "./service"
import {useEffect, useState} from "react"
import axios from "axios"
import Nav from "./components/Nav"
// import Goals from "./components/Goals"
import Caught from "./components/Caught"
import Missed from "./components/Missed"
import GoalItem from "./components/GoalItem"
import Add from "./components/Add"

function App() {
  const [complete, setComplete] = useState([])
  const [incomplete, setIncomplete] = useState([])

  const [goals, setGoals] = useState([])
  const [pending, setPending] = useState([])
  // const [complete, setComplete] = useState([])
  // const [incomplete, setIncomplete] = useState([])
  const [toggle, setToggle] = useState(false)
  //get data when toggle changes
  useEffect(() => {
      handleRequest()
      // findStatus()
  }, [toggle])
  //pass the props accordingly when goals change
  useEffect(() => {
      findStatus()
  }, [goals])
  //axios get API data
  async function handleRequest(){
      let resp = await axios.get(baseURL, config)
      setGoals(resp.data.records)
  }
  //find the status and pass it accordingly to be displayed in the correct list
  function findStatus() {
      //empty array to put filtered items
      let pendingArray = []
      let completeArray = []
      let incompleteArray = []
      //map through array and push only if there is a value of 0
      goals.map((goal) => {
          if(Object.values(goal.fields).includes(0)) {
              pendingArray.push({id: goal.id, fields: goal.fields})
          } else if (Object.values(goal.fields).includes(1)) {
              completeArray.push({id: goal.id, fields: goal.fields})
          } else if (Object.values(goal.fields).includes(2)) {
              incompleteArray.push({id: goal.id, fields: goal.fields})
          } 
      })
      //set the array to state to pass props
      setPending((prevState) => {
          return (
          [...prevState], 
          pendingArray
      )})
       setComplete((prevState) => {
          return (
          [...prevState], 
          completeArray
      )})
      setIncomplete((prevState) => {
          return (
          [...prevState], 
          incompleteArray
      )})
  }

  return (
    <div className="App">
      <Route path="/">
        <Nav />
      </Route>
      <Route exact path="/goals">
      <Add setToggle={setToggle}/>
      {pending.map((pending)=> {
                return <GoalItem key={pending.id} pending={pending} setToggle={setToggle}/>
            })}
        {/* <Goals setIncomplete={setIncomplete} setComplete={setComplete}/> */}
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
