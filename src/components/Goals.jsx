import React from 'react'
import Add from "./Add"
import GoalItem from "./GoalItem"
import {baseURL, config} from "../service"
import {useEffect, useState} from "react"
import axios from "axios"

function Goals() {

    const [goals, setGoals] = useState([])
    const [toggle, setToggle] = useState(false)

    //invoke handleRequest when toggle changes
    useEffect(() => {
        handleRequest()
    }, [toggle])

    //axios get API data
    async function handleRequest(){
        let resp = await axios.get(baseURL, config)
        setGoals(resp.data.records)
    }
 
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