//react and data
import {useState, useEffect} from "react"
import {baseURL, config} from "../service"
import axios from "axios"
//component
import Edit from "./Edit"
import Delete from "./Delete"
//styling
import {Button, Card, CardContent, CardActions, Typography, Tooltip, Popover, ListItem} from "@material-ui/core"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import NotInterestedIcon from "@material-ui/icons/NotInterested"
import EditIcon from "@material-ui/icons/Edit"
import MoreVertIcon from '@material-ui/icons/MoreVert'
import "./styles/GoalItem.css"
//display goals and buttons to mark complete or incomplete
function GoalItem(props) {
    let pendingDetails = props.pending.fields
    //toggle to show input or text
    const [showEdit, setShowEdit] = useState(false)
    //change state of status to move to caught or missed list
    const [status, setStatus] = useState(pendingDetails)
    const [anchorEl, setAnchorEl] = useState(null);

    //put when status state is changed
    useEffect(() => {
        setChange()
    }, [status]) //eslint-disable-line

    //handle morevert icon
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                <Card className="card" id="flex">
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
                <CardActions className="select-buttons" id="desktop-buttons">   
                    <Tooltip aria-label="Reel It In" title="Reel It In">
                        <Button size="large" id="complete" value="1" onClick={handleComplete}><CheckBoxIcon/></Button>
                    </Tooltip>    
                    <Tooltip aria-label="Fish Got Away" title="Fish Got Away">
                        <Button size="large" id="complete" value="2" onClick={handleComplete} ><NotInterestedIcon/></Button>
                    </Tooltip>   
                    <Tooltip aria-label="Change Bait" title="Change Bait">
                        <Button size="large" onClick={() => setShowEdit(prevState => !prevState)} ><EditIcon/></Button>
                    </Tooltip>
                    <Delete id={props.pending.id} setToggle={props.setToggle}/>
                </CardActions>
                <CardActions className="select-buttons" id="mobile-buttons">
                    <Button id="three-dots" aria-describedby={id} onClick={handleClick} endIcon={<MoreVertIcon/>}>
                    </Button>
                    <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center',}} transformOrigin={{vertical: 'bottom', horizontal: 'center',}}>
                        <ListItem>
                            <Button size="small" id="complete" value="1" onClick={handleComplete}><CheckBoxIcon/></Button>
                        </ListItem>
                        <ListItem>
                            <Button size="small" id="complete" value="2" onClick={handleComplete}><NotInterestedIcon/></Button>
                        </ListItem>
                        <ListItem>
                            <Button size="small" onClick={() => setShowEdit(prevState => !prevState)}><EditIcon/></Button>
                        </ListItem>
                        <ListItem>
                            <Delete id={props.pending.id} setToggle={props.setToggle}/>
                        </ListItem>
                    </Popover>
                </CardActions>
            </Card>
            )
        }
    }
    return (
        <div>{displayEdit()}</div>
    )
}
export default GoalItem