import Delete from "./Delete"
//display incomplete goals
function Missed(props) {
    const {incomplete} = props
    return (
        <div className="goal-item">
            <p>What? {incomplete.fields.what}</p>
            <p>Amount? {incomplete.fields.amount}</p>
            <p>By when? {incomplete.fields.when}</p>
            <p>How? {incomplete.fields.how}</p>
            <Delete id={incomplete.fields.id}/>
        </div>
    )
}

export default Missed
