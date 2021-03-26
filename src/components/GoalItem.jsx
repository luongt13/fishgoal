import React from 'react'
import Edit from "./Edit"


function GoalItem(props) {
    let pendingDetails = props.pending.fields
console.log(props.pending.id)

    return (
        <div>
            <div className="goal-item">
                <button>Reel it in</button>

                <p>What? {pendingDetails.what}</p>
                <p>Amount? {pendingDetails.measure}</p>
                <p>By when? {pendingDetails.when}</p>
                <p>How? {pendingDetails.how}</p>
               
                <button>Fish got away</button>
                <button>Change Bait</button>

            </div>
                <Edit key={props.pending.id} goalDetails={pendingDetails} id={props.pending.id}/>
        </div>
    )
}

export default GoalItem
