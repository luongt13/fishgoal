import React from 'react'
import Goals from './Goals'
import Edit from "./Edit"

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
            <Edit goalDetails={goalDetails} id={props.goal.id}/>
        </div>
    )
}

export default GoalItem
