import {useState, useEffect} from "react"
import {baseURL, config} from "../service"
import axios from "axios"
import Edit from "./Edit"
import {Button, ButtonGroup, Card, CardContent, CardActions, Typography, Grid} from "@material-ui/core"
import "../App.css"

  
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
            })
        })
    }
    //display either input to edit to goal text, pass toggle to rerender, pass status to set status
    function displayEdit() {
        if(showEdit){
            return (
                //to edit page
                <Edit key={props.pending.id} goalDetails={pendingDetails} id={props.pending.id} setShowEdit={setShowEdit} setStatus={setStatus} setToggle={props.setToggle}/> 
            )
        } else {
            return (
                <div className="goal-list">
                    <Card className="card">
                        <CardContent className="goal-item">
                            <Grid container>
                                <Grid item xs={6} sm={3}>
                                <Typography component="p" className="label">
                                What? 
                            </Typography>
                            <Typography component="p">
                                {pendingDetails.what}
                            </Typography>
                                </Grid>
                            <Grid item xs={6} sm={3}>
                            <Typography component="p" className="label">
                                Amount? 
                            </Typography>
                            <Typography component="p">
                               {pendingDetails.amount}
                            </Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                            <Typography component="p" className="label">
                                By when? 
                            </Typography>
                            <Typography component="p">
                                {pendingDetails.when}
                            </Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                            <Typography component="p" className="label">
                                How? 
                            </Typography> 
                            <Typography component="p">
                                {pendingDetails.how}
                            </Typography>
                            </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions className="selectButtons">
                            <ButtonGroup variant="contained" color="primary" size="small">
                                <Button id="complete" value="1" onClick={handleComplete}>Reel it in</Button>
                                <Button id="incomplete" value="2" onClick={handleComplete}>Fish got away</Button>
                                <Button onClick={() => setShowEdit(prevState => !prevState)}>Change Bait</Button>
                            </ButtonGroup> 
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }
    
    return (
        <div>
                {displayEdit()}
                {/* <CardActions className="selectButtons">
                            <ButtonGroup variant="contained" color="primary" size="small">
                                <Button id="complete" value="1" onClick={handleComplete}>Reel it in</Button>
                                <Button id="incomplete" value="2" onClick={handleComplete}>Fish got away</Button>
                                <Button onClick={() => setShowEdit(prevState => !prevState)}>Change Bait</Button>
                            </ButtonGroup> 
                        </CardActions> */}
            
            </div>

    )
}

export default GoalItem