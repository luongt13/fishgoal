import React from 'react'
import Edit from "./Edit"
import {Route} from "react-router-dom"

function GoalItem(props) {
    let goalDetails = props.goal.fields
    return (
        <div>
            <div className="goal-item">
                <button>Reel it in</button>

                <p>What? {goalDetails.what}</p>
                <p>Amount? {goalDetails.measure}</p>
                <p>By when? {goalDetails.when}</p>
                <p>How? {goalDetails.how}</p>
               
                <button>Fish got away</button>
                <button>Change Bait</button>

            </div>
                <Edit goalDetails={goalDetails} id={props.goal}/>
        </div>
    )
}

export default GoalItem
