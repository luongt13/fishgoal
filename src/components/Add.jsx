import {baseURL, config} from "../service"
import {useState} from "react"
import axios from "axios"
import {Button, Card, CardContent, CardActions, Typography, IconButton, TextField} from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close'
import Tooltip from '@material-ui/core/Tooltip'
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
        let {value, id} = event.currentTarget
        setNewGoal((prevState) => {
            return {...prevState, [id]: value}
        })
    }
    //post form data to API then re-render
    async function handleSubmit(event) {
       console.dir(event)
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
                <Tooltip title="Close" aria-label="close">
                    <IconButton onClick={() => props.setClose(prevState => !prevState)}>
                        <CloseIcon/>
                    </IconButton>
                    </Tooltip>
                </CardContent>
                <CardContent className="form-item">
                    <Typography component="h2">
                        Add A New Goal
                    </Typography> 
                </CardContent>
                <CardContent className="form-item">
                    <TextField variant="outlined" type="text" id="what" value={newGoal.what} onChange={handleChange} required label="What is your goal?"/>
                    {/* <label htmlFor="what">What is your goal? </label>
                    <input type="text" id="what" value={newGoal.what} onChange={handleChange} required/> */}
                </CardContent>
                <CardContent className="form-item">  
                <TextField variant="outlined" type="text" id="amount" value={newGoal.amount} onChange={handleChange} required label="How many? How much? How long?"/>
                    {/* <label htmlFor="amount">How many? How much? How long? </label>
                    <input type="text" id="amount" value={newGoal.amount} onChange={handleChange} required/> */}
                </CardContent>
                <CardContent className="form-item">  
                <TextField variant="outlined" type="text" id="when" value={newGoal.when} onChange={handleChange} required label="When will you finish this by?"/>
                    {/* <label htmlFor="when">When will you finish this by? </label>
                    <input type="text" id="when" value={newGoal.when} onChange={handleChange} required/> */}
                </CardContent>
                <CardContent className="form-item">  
                <TextField variant="outlined" type="text" id="how" value={newGoal.how} onChange={handleChange} required label="How will you reach your goal?"/>
                    {/* <label htmlFor="how">How will you reach your goal? </label>
                    <input type="text" id="how" value={newGoal.how} onChange={handleChange} required/> */}
                </CardContent>
                <CardActions className="button">
                    <Button size="small" type="submit" variant="contained" color="primary" onClick={() => props.setClose(prevState => !prevState)}>Set Bait</Button>
                </CardActions>
            </Card>
        </form>
    )
}
export default Add
