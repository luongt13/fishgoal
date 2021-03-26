import {baseURL, config} from "../service"
import {useState} from "react"
import axios from "axios"

function Add(props) {
    //storing new goal data
    const [newGoal, setNewGoal] = useState({
        what: "",
        when: "",
        amount: "",
        how: "",
        status: 0,
    })

    //update the object when the input changes
    function handleChange(event) {
        let {value, id} = event.target
        setNewGoal((prevState) => {
            return {...prevState, [id]: value}
        })
    }

    //post form data to API then change toggle 
    async function handleSubmit(event) {
        event.preventDefault()
        await axios.post(baseURL, {fields: newGoal}, config)
        props.setToggle((prevState) => !prevState)
    }

    return (
        //form to add new goal
        <form onSubmit={handleSubmit}>
            <label htmlFor="what">What is your goal?</label>
            <input type="text" id="what" value={newGoal.what} onChange={handleChange}/>
            <label htmlFor="amount">How many? How much? How long?</label>
            <input type="text" id="amount" value={newGoal.amount} onChange={handleChange}/>
            <label htmlFor="when">When will you finish this by?</label>
            <input type="text" id="when" value={newGoal.when} onChange={handleChange}/>
            <label htmlFor="how">How will you reach your goal?</label>
            <input type="text" id="how" value={newGoal.how} onChange={handleChange}/>
            <button type="submit">Set Bait</button>
        </form>
    )
}

export default Add
