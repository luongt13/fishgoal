import {baseURL, config} from "../service"
import {useState} from "react"
import axios from "axios"
import {Button, TextField, Card, CardContent} from "@material-ui/core"
import "./styles/Add.css"
//add new goal
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
        let {value, name} = event.target
        setNewGoal((prevState) => {
            return {...prevState, [name]: value}
        })
    }
    //post form data to API then re-render
    async function handleSubmit(event) {
        event.preventDefault()
        await axios.post(baseURL, {fields: newGoal}, config)
        setNewGoal({
            what: "",
            when: "",
            amount: "",
            how: "",
            status: 0,
        })
        props.setToggle((prevState) => !prevState)
    }
    return (
        //form to add new goal
        <form onSubmit={handleSubmit}>
            {/* <Card variant="outlined" class="inputs">
                <CardContent>
                    <div className="card">
                        <TextField fullWidth name="what" label="What is your goal?" id="outlined-textarea" variant="outlined" value={newGoal.what} onChange={handleChange}/>
                    </div>
                    <div className="card">
                        <TextField fullWidth name="amount" label="How many? How much? How long?" id="outlined-textarea" variant="outlined" value={newGoal.amount} onChange={handleChange}/>
                    </div>
                    <div className="card">
                        <TextField fullWidth name="when" label="When will you finish this by?" id="outlined-textarea" variant="outlined" value={newGoal.when} onChange={handleChange}/>
                    </div>
                    <div className="card">
                        <TextField fullWidth name="how" label="How will you reach your goal?" id="outlined-textarea" variant="outlined" value={newGoal.how} onChange={handleChange} />
                    </div>
                </CardContent>
            </Card> */}
            <Card >
                <CardContent className="card">
                    <label htmlFor="what">What is your goal? </label>
                    <input type="text" name="what" value={newGoal.what} onChange={handleChange}/>
                {/* </CardContent> */}
                {/* <CardContent className="card">   */}
                    <label htmlFor="amount">How many? How much? How long? </label>
                    <input type="text" name="amount" value={newGoal.amount} onChange={handleChange}/>
                {/* </CardContent> */}
                {/* <CardContent className="card">   */}
                    <label htmlFor="when">When will you finish this by? </label>
                    <input type="text" name="when" value={newGoal.when} onChange={handleChange}/>
                {/* </CardContent> */}
                {/* <CardContent className="card">   */}
                    <label htmlFor="how">How will you reach your goal? </label>
                    <input type="text" name="how" value={newGoal.how} onChange={handleChange}/>
                </CardContent>
            </Card>
           
            <Button type="submit" variant="contained" color="primary">Set Bait</Button>
        </form>
    )
}

export default Add
