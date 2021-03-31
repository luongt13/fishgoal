//react and data
import {useState, useEffect} from "react"
import {baseURL, config} from "../service"
import axios from "axios"
//component
import Edit from "./Edit"
import Delete from "./Delete"
//styling
import {Button, ButtonGroup, Card, CardContent, CardActions, Typography, Paper, Grid, Tooltip} from "@material-ui/core"
// import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import NotInterestedIcon from "@material-ui/icons/NotInterested"
import EditIcon from "@material-ui/icons/Edit"
import "./styles/GoalItem.css"
// import { DeleteOutlined } from "@material-ui/icons"


//display goals and buttons to mark complete or incomplete
function GoalItem(props) {
    let pendingDetails = props.pending.fields
    //toggle to show input or text
    const [showEdit, setShowEdit] = useState(false)
    //change state of status to move to caught or missed list
    const [status, setStatus] = useState(pendingDetails)
    //put when status state is changed
    useEffect(() => {
        setChange()
    }, [status])
    //axios call to update info
    async function setChange() {
        let newURL = `${baseURL}/${props.pending.id}`
        //update with new status
        await axios.put(newURL, {fields: status }, config)
        props.setToggle(prevState => !prevState)
    }
    //mark compete or incomplete
    function handleComplete(event) {
        //update state based on the value from the button click
        let value = Number(event.currentTarget.value)
        setStatus((prevState) => {
            return ( {
                ...prevState,
                what: pendingDetails.what,
                when: pendingDetails.when,
                how: pendingDetails.how,
                amount: pendingDetails.amount,
                status: value,
                username: props.userId,
            })
        })
    }
    //display either input to edit to goal text, pass toggle to rerender, pass status to set status
    function displayEdit() {
        if(showEdit){
            return (
                //to edit page
                <Edit key={props.pending.id} goalDetails={pendingDetails} id={props.pending.id} setShowEdit={setShowEdit} setStatus={setStatus} setToggle={props.setToggle} userId={props.userId}/> 
            )
        } else {
            return (
                // <div className="goal-list">
                <div>
                    <Card className="card" id="flex">
                        {/* <Grid container>
                            <Grid item xs={12}> */}
                                <CardContent className="goal-item">
                                    <Typography component="p" className="label">What? </Typography>
                                    <Typography component="p">{pendingDetails.what}</Typography>
                                    <Typography component="p" className="label">Amount? </Typography>
                                    <Typography component="p">{pendingDetails.amount}</Typography>
                                    <Typography component="p" className="label">When? </Typography>
                                    <Typography component="p">{pendingDetails.when}</Typography>
                                    <Typography component="p" className="label">How?</Typography> 
                                    <Typography component="p">{pendingDetails.how}</Typography>
                                </CardContent>
                            {/* </Grid> */}
                        {/* <Grid item xs={1}>
                            <CardActions  className="button delete">
                                <Delete id={props.pending.id} setToggle={props.setToggle}/>
                            </CardActions>
                        </Grid> */}
                    {/* </Grid> */}
                    <CardActions className="selectButtons">   
                        <Tooltip aria-label="Reel It In" title="Reel It In">
                            <Button size="large" id="complete" value="1" onClick={handleComplete}><CheckBoxIcon/></Button>
                        </Tooltip>    
                        <Tooltip aria-label="Fish Got Away" title="Fish Got Away">
                            <Button size="large" id="complete" value="2" onClick={handleComplete}><NotInterestedIcon/></Button>
                        </Tooltip>   
                        <Tooltip aria-label="Change Bait" title="Change Bait">
                            <Button size="large" onClick={() => setShowEdit(prevState => !prevState)}><EditIcon/></Button>
                        </Tooltip>
                        <Delete id={props.pending.id} setToggle={props.setToggle}/>
                        {/* <ButtonGroup variant="contained" color="primary" size="small" className="flex-buttons">
                            <Button id="complete" value="1" onClick={handleComplete} startIcon={<CheckBoxIcon/>}>Reel it in</Button>
                            <Button id="incomplete" value="2" onClick={handleComplete} startIcon={<NotInterestedIcon/>}>Fish got away</Button>
                            <Button onClick={() => setShowEdit(prevState => !prevState)} startIcon={<EditIcon/>}>Change Bait</Button>
                        </ButtonGroup> */}
                    </CardActions>
                </Card>
            </div>
            )
        }
    }
    return (
        <div>{displayEdit()}</div>
    )
}
export default GoalItem