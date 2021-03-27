import {baseURL, config} from "../service"
import {useEffect, useState} from "react"
import axios from "axios"
import Add from "./Add"
import GoalItem from "./GoalItem"
// import Caught from "./Caught"
// import Missed from "./Missed"
//get goals from airtable, pass props 
function Goals(props) {
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
         props.setComplete((prevState) => {
            return (
            [...prevState], 
            completeArray
        )})
        props.setIncomplete((prevState) => {
            return (
            [...prevState], 
            incompleteArray
        )})
    }
    return (
        <div>
            <Add setToggle={setToggle}/>
            {pending.map((pending)=> {
                return <GoalItem key={pending.id} pending={pending} setToggle={setToggle}/>
            })}
        </div>
    )
}

export default Goals