//react and data
import {Route} from "react-router-dom"
import {baseURL, config} from "./service"
import {useEffect, useState} from "react"
import axios from "axios"
//components
import Nav from "./components/Nav"
import Form from "./components/Form"
import GoalItem from "./components/GoalItem"
import Add from "./components/Add"
import Welcome from "./components/Welcome"
import RemovedGoals from "./components/RemovedGoals"
//styling
import AddIcon from '@material-ui/icons/Add'
import {Fab, Tooltip} from "@material-ui/core"
import './App.css';

function App() {
    const userId = localStorage.getItem("username")
    console.log(userId)

    const [goals, setGoals] = useState([])
    const [pending, setPending] = useState([])
    const [complete, setComplete] = useState([])
    const [incomplete, setIncomplete] = useState([])
    const [toggle, setToggle] = useState(false)
    const [close, setClose] = useState(false)
    //get data when toggle changes
    useEffect(() => {
        handleRequest()
    }, [toggle])
    //pass the props accordingly when goals change
    useEffect(() => {
        findStatus()
    }, [goals])
    //axios get API data
    async function handleRequest(){
        let resp = await axios.get(baseURL, config)
        setGoals(resp.data.records)
        console.log(resp.data.records)
    }
    //display add form 
    function displayAdd() {
        if(close) {
            return  <Add setToggle={setToggle} setClose={setClose}/>
        } else {
            return (
                <div className="add-container">
                    <Tooltip title="Add" aria-label="add">
                        <Fab color="primary" onClick={() => setClose(prevState => !prevState)}>
                            <AddIcon/>
                        </Fab>
                    </Tooltip>
                </div>
            )
        }
    }
    //find the status and pass it accordingly to be displayed in the correct list
    function findStatus() {
        //empty array to put filtered items
        let pendingArray = []
        let completeArray = []
        let incompleteArray = []
        //map through array and push only if there is a value of 0
        goals.map((goal) => {
            if(Object.values(goal.fields).includes(0) && Object.values(goal.fields).includes(userId)) {
                pendingArray.push({id: goal.id, fields: goal.fields})
            } else if (Object.values(goal.fields).includes(1) && Object.values(goal.fields).includes(userId)) {
                completeArray.push({id: goal.id, fields: goal.fields})
            } else if (Object.values(goal.fields).includes(2) && Object.values(goal.fields).includes(userId)) {
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
            <Route exact path="/">
                <Welcome />
            </Route>
            <Route path="/form/:title">
            <Form />
            </Route>
            <Route exact path="/goals">
                <Nav />
                <h2>FishGoals</h2>
                {displayAdd()}
                {pending.map((pending)=> {
                    return <GoalItem key={pending.id} pending={pending} setToggle={setToggle}/>
                })}
            </Route>
            {/* <Route exact path="/caught">
                <Nav />
                <h2>Caught Fish</h2>
                {complete.map((complete)=> {
                    return <Caught key={complete.id} complete={complete} setToggle={setToggle}/>
                })}
            </Route>
            <Route exact path="/missed">
                <Nav />
                <h2>Fish That Got Away</h2>
                {incomplete.map((incomplete)=> {
                    return <Missed key={incomplete.id} incomplete={incomplete} setToggle={setToggle}/>
                })}
            </Route> */}
            <Route exact path="/remove/:type">
                <Nav />
                <RemovedGoals incomplete={incomplete} complete={complete} setToggle={setToggle}/>
            </Route>
        </div>
    );
}
export default App;