import React from 'react'
import Add from "./Add"
import GoalItem from "./GoalItem"
// import Missed from "./Missed"
// import Caught from "./Caught"
import {baseURL, config} from "../service"
import {useEffect, useState} from "react"
import axios from "axios"

function Goals(props) {

    const [goals, setGoals] = useState([])
    const [pending, setPending] = useState([])
    // const [complete, setComplete] = useState([])
    // const [incomplete, setIncomplete] = useState([])

    const [toggle, setToggle] = useState(false)

    //invoke handleRequest when toggle changes
    useEffect(() => {
        handleRequest()
    }, [toggle])

    useEffect(() => {
        findStatus()
    }, [goals])
    //axios get API data
    async function handleRequest(){
        let resp = await axios.get(baseURL, config)
        setGoals(resp.data.records)
    }

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
        //set the array to state
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
                return <GoalItem key={pending.id} pending={pending}/>
            })}

            {/* {complete.map((complete)=> {
                return <Caught key={complete.id} complete={complete}/>
            })}
            
            {incomplete.map((incomplete)=> {
                return <Missed key={incomplete.id} incomplete={incomplete}/>
            })} */}

        </div>
    )
}

export default Goals