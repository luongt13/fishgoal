import React from 'react'

function Missed(props) {
    let incompleteDetails = props.incomplete.fields
    // console.log(props.complete)
    return (
        <div className="goal-item">
            <p>What? {incompleteDetails.what}</p>
            <p>Amount? {incompleteDetails.measure}</p>
            <p>By when? {incompleteDetails.when}</p>
            <p>How? {incompleteDetails.how}</p>
        </div>
    )
}

export default Missed
