import React from 'react'

function Caught(props) {
    let completeDetails = props.complete.fields
    // console.log(props.complete)
    return (
        <div className="goal-item">
            <p>What? {completeDetails.what}</p>
            <p>Amount? {completeDetails.measure}</p>
            <p>By when? {completeDetails.when}</p>
            <p>How? {completeDetails.how}</p>
        </div>
    )
}

export default Caught
