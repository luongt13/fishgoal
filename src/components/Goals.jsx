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

    function findPending() {
        //empty array to put filtered items
        let pendingArray = []
        //map through array and push only if there is a value of 0
        goals.map((ugh) => {
            if(Object.values(ugh.fields).includes(0))
                pendingArray.push({id: ugh.id, fields: ugh.fields})
        })
        //set the spending array to state
        setPending((prevState) => {
            return (
            [...prevState], 
            pendingArray
        )})
    }
    return (
        <div>
            <Add setToggle={setToggle}/>
            {pending.map((pending)=> {
                return <GoalItem key={pending.id} pending={pending}/>

            })}
        </div>
    )
}

export default Goals