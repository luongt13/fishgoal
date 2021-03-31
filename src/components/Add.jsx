//react and data
import {baseURL, config} from "../service"
import {useState} from "react"
import axios from "axios"
//styling
import {Button, Card, CardContent, CardActions, Typography, IconButton, TextField, Tooltip, Snackbar} from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import CloseIcon from "@material-ui/icons/Close"
import "./styles/Add.css"
import { ContactSupportOutlined } from "@material-ui/icons"
//add new goal
function Add(props) {
    const [open, setOpen] = useState(false)
    //storing new goal data
    const [newGoal, setNewGoal] = useState({
        what: "",
        when: "",
        amount: "",
        how: "",
        status: 0,
        username: props.userId,
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
        console.log(event.target)
        event.preventDefault()
        await axios.post(baseURL, {fields: newGoal}, config)
        setNewGoal({
            what: "",
            when: "",
            amount: "",
            how: "",
            status: 0,
            username: props.userId,
        })
        setOpen(true)
        props.setToggle((prevState) => !prevState)
        props.setClose((prevState) => !prevState)
    }
    console.log(newGoal)
    return (
        //form to add new goal 
        <form onSubmit={handleSubmit}>
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
                    <TextField variant="outlined" type="text" id="what" value={newGoal.what} onChange={handleChange} label="What is your goal?" required/>
                </CardContent>
                <CardContent className="form-item">  
                    <TextField variant="outlined" type="text" id="amount" value={newGoal.amount} onChange={handleChange} label="How many? How much? How long?" required/>
                </CardContent>
                <CardContent className="form-item">  
                    <TextField variant="outlined" type="text" id="when" value={newGoal.when} onChange={handleChange} label="When will you finish this by?" required/>
                </CardContent>
                <CardContent className="form-item">  
                    <TextField variant="outlined" type="text" id="how" value={newGoal.how} onChange={handleChange} label="How will you reach your goal?" required/>
                </CardContent>
                <CardActions className="button">
                    <Button size="small" type="submit" variant="contained" color="primary">Set Bait</Button>
                </CardActions>
            </Card>
            <Snackbar open={open} message="Bait Set" >
                <Alert severity="success">Set Bait</Alert>
            </Snackbar>
        </form>
    )
}
export default Add
