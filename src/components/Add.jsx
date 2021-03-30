//react and data
import {baseURL, config} from "../service"
import {useState} from "react"
import axios from "axios"
//styling
import {Button, Card, CardContent, CardActions, Typography, IconButton, TextField, Tooltip} from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close'
import "./styles/Add.css"
//add new goal
function Add(props) {
    const userId = localStorage.getItem("username")
    //storing new goal data
    const [newGoal, setNewGoal] = useState({
        what: "",
        when: "",
        amount: "",
        how: "",
        status: 0,
        username: userId,
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
        props.setClose((prevState) => !prevState)
    }
    return (
        //form to add new goal 
        <form>
            <Card className="form-container">
                <CardContent className="form-head">
                    <Typography component="h2">Add A New Goal</Typography> 
                    <Tooltip title="Close" aria-label="close" >
                        <IconButton onClick={() => props.setClose(prevState => !prevState)}>
                            <CloseIcon />
                        </IconButton>
                    </Tooltip>
                </CardContent>
                <CardContent className="form-item">
                    <TextField variant="outlined" type="text" id="what" value={newGoal.what} onChange={handleChange} required label="What is your goal?"/>
                </CardContent>
                <CardContent className="form-item">  
                    <TextField variant="outlined" type="text" id="amount" value={newGoal.amount} onChange={handleChange} required label="How many? How much? How long?"/>
                </CardContent>
                <CardContent className="form-item">  
                    <TextField variant="outlined" type="text" id="when" value={newGoal.when} onChange={handleChange} required label="When will you finish this by?"/>
                </CardContent>
                <CardContent className="form-item">  
                    <TextField variant="outlined" type="text" id="how" value={newGoal.how} onChange={handleChange} required label="How will you reach your goal?"/>
                </CardContent>
                <CardActions className="button">
                    <Button size="small" type="submit" variant="contained" color="primary" onClick={handleSubmit}>Set Bait</Button>
                </CardActions>
            </Card>
        </form>
    )
}
export default Add
