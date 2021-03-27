import React from 'react'
import Edit from "./Edit"
import {useState} from "react"
import axios from "axios"
import {baseURL, config} from "../service"

function GoalItem(props) {
    let pendingDetails = props.pending.fields
    console.log(props.pending.id)
    //toggle to show input or text
    const [showEdit, setShowEdit] = useState(false)
    const [status, setStatus] = useState({})
    //display either input to edit to goal text
    function displayEdit() {
        if(showEdit){
            return (
                //to edit page
                    <Edit key={props.pending.id} goalDetails={pendingDetails} id={props.pending.id} setShowEdit={setShowEdit} setToggle={props.setToggle}/>
            )
        } else {
            return (
                <div className="goal-text">
                    <p>What? {pendingDetails.what}</p>
                    <p>Amount? {pendingDetails.amount}</p>
                    <p>By when? {pendingDetails.when}</p>
                    <p>How? {pendingDetails.how}</p>
                </div>
            )
        }
    }

    //mark compete
    async function handleComplete(event) {
        // let update = setStatus((prevState) => prevState = 1)
        let value = Number(event.target.value)
        setStatus((prevState) => {
            return ( {
                ...prevState,
                status: value
            })
        })
        let newURL = `${baseURL}/${props.pending.id}`
        // console.log(event.target.id)
        // if(event.target.id === "complete") {
        //     let updateBody = {
        //         fields: {
        //             what: pendingDetails.what,
        //             amount: pendingDetails.amount,
        //             when: pendingDetails.when,
        //             how: pendingDetails.how,
        //             status: 1,
        //         }
        //     }
        //     await axios.put(newURL, updateBody , config)
        // props.setToggle(prevState => !prevState)
        // }
    }
    console.log(status)

    return (
        <div>
            <div className="goal-item">
                <button id="complete" value="1" onClick={handleComplete}>Reel it in</button>
                {displayEdit()}
                <button id="incomplete" value="2"onClick={handleComplete}>Fish got away</button>
                <button onClick={() => setShowEdit(prevState => !prevState)}>Change Bait</button>
            </div>
        </div>
    )
}

export default GoalItem
