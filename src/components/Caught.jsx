import Delete from "./Delete"
//display completed goals
function Caught(props) {
    // console.log(props.complete)
    let completeDetails = props.complete.fields

    return (
        <div className="goal-item">
            test
            <p>What? {completeDetails.what}</p>
            <p>Amount? {completeDetails.amount}</p>
            <p>By when? {completeDetails.when}</p>
            <p>How? {completeDetails.how}</p>
            <Delete id={props.complete.id}/>
        </div>
    )
}

export default Caught
