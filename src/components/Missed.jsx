import Delete from "./Delete"
//display incomplete goals
function Missed(props) {
    const incompleteDetails = props.incomplete.fields
    return (
        <div className="goal-item">
            <p>What? {incompleteDetails.what}</p>
            <p>Amount? {incompleteDetails.amount}</p>
            <p>By when? {incompleteDetails.when}</p>
            <p>How? {incompleteDetails.how}</p>
            <Delete id={props.incomplete.id} setToggle={props.setToggle}/>
        </div>
    )
}

export default Missed
