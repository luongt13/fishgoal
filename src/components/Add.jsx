import {baseURL, config} from "../service"
import {useState} from "react"
import axios from "axios"
import {Button, Card, CardContent, CardActions, Typography, IconButton} from "@material-ui/core"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"
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
        let {value, id} = event.target
        setNewGoal((prevState) => {
            return {...prevState, [id]: value}
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
            <Card className="form-container">
                <CardContent className="form-item close-icon">
                    <IconButton color="secondary" onClick={() => props.setClose(prevState => !prevState)}>
                        <HighlightOffIcon fontSize="large"/>
                    </IconButton>
                </CardContent>
                <CardContent className="form-item">
                    <Typography component="h2">
                        Add A New Goal
                    </Typography> 
                </CardContent>
                <CardContent className="form-item">
                    <label htmlFor="what">What is your goal? </label>
                    <input type="text" id="what" value={newGoal.what} onChange={handleChange} required/>
                </CardContent>
                <CardContent className="form-item">  
                    <label htmlFor="amount">How many? How much? How long? </label>
                    <input type="text" id="amount" value={newGoal.amount} onChange={handleChange} required/>
                </CardContent>
                <CardContent className="form-item">  
                    <label htmlFor="when">When will you finish this by? </label>
                    <input type="text" id="when" value={newGoal.when} onChange={handleChange} required/>
                </CardContent>
                <CardContent className="form-item">  
                    <label htmlFor="how">How will you reach your goal? </label>
                    <input type="text" id="how" value={newGoal.how} onChange={handleChange} required/>
                </CardContent>
                <CardActions className="button">
                    <Button size="small" type="submit" variant="contained" color="secondary" onClick={() => props.setClose(prevState => !prevState)}>Set Bait</Button>
                </CardActions>
            </Card>
        </form>
    )
}
export default Add
