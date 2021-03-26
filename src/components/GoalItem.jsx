import React from 'react'
import Edit from "./Edit"


function GoalItem(props) {
    let goalDetails = props.goal.fields

console.log(Object.values(goalDetails))

    // goalDetails.map((status) => {
    //     console.log(status)
    // })
    // status.find((complete) => {
    //     console.log(complete)
    // })

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
                <Edit key={props.goal.id} goalDetails={goalDetails} id={props.goal}/>
        </div>
    )
}

export default GoalItem
