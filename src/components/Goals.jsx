import React from 'react'
import Add from "./Add"
import GoalItem from "./GoalItem"
import {baseURL, config} from "../service"
import {useEffect, useState} from "react"
import axios from "axios"

function Goals() {

    const [goals, setGoals] = useState([])
    const [pending, setPending] = useState([])

    const [toggle, setToggle] = useState(false)

    //invoke handleRequest when toggle changes
    useEffect(() => {
        handleRequest()
    }, [toggle])

    useEffect(() => {
        findPending()
    }, [goals])
    //axios get API data
    async function handleRequest(){
        let resp = await axios.get(baseURL, config)
        setGoals(resp.data.records)
    }

    let anotherText = goals.map((goal) => {
        return goal.fields
    })

    function findPending() {
        let pendingArray = []

        anotherText.map((item) => {
            if(Object.values(item).includes(0)) {
                console.log(item)
                pendingArray.push(item)
                // setPending(pendingArray)
              
            }
         
        })
        setPending((prevState) => {
            return (
            [...prevState], 
            pendingArray
        )})
    }
   console.log(pending)
    return (
        <div>
            <Add setToggle={setToggle}/>
            {goals.map((goal)=> {
                
                return <GoalItem goal={goal}/>

            })}
        </div>
    )
}

export default Goals