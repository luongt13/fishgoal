import axios from "axios"
import {baseURL, config} from "../service"
import {useState} from "react"

function Edit(props) {
    console.log(props.goalDetails)
    console.log(props.id)

    const [update, setUpdate] = useState({
        what: "",
        when: "",
        how: "",
        amount: "",
    })
    
    function handleChange() {

    }
    // function handleUpdate() {

    // }
    // const updateURL = `${baseURL}/${id}`
    return (
        <form>
            <label htmlFor="what">What?</label>
            <input type="text" id="what" value={props.goalDetails.what} onChange={handleChange}/>
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" value={props.goalDetails.amount} onChange={handleChange}/>
            <label htmlFor="when">By when?</label>
            <input type="text" id="when" value={props.goalDetails.when} onChange={handleChange}/>
            <label htmlFor="how">How?</label>
            <input type="text" id="how"  value={props.goalDetails.how} onChange={handleChange}/>
            <input type="submit" value={props.id}/>
        </form>
    )
}

export default Edit