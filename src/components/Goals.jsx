import React from 'react'
import Add from "./Add"
import GoalItem from "./GoalItem"
import {baseURL, config} from "../service"
import {useEffect, useState} from "react"
import axios from "axios"

function Goals() {

    const [goals, setGoals] = useState([])
    useEffect(() => {
        handleRequest()
    }, [])

    async function handleRequest(){
        let resp = await axios.get(baseURL, config)
        console.log(resp.data.records)
    }
 
    return (
        <div>
            <Add />

        </div>
    )
}

export default Goals