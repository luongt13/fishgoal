import {useState, useEffect} from "react"
import {baseURL, config} from "../service"
import axios from "axios"
import Edit from "./Edit"
import {Button, ButtonGroup, Card, CardContent, Typography} from "@material-ui/core"
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
    //display either input to edit to goal text, pass toggle to rerender, pass status to set status
    function displayEdit() {
        if(showEdit){
            return (
                //to edit page
                <Card>
                    <Edit key={props.pending.id} goalDetails={pendingDetails} id={props.pending.id} setShowEdit={setShowEdit} setStatus={setStatus} setToggle={props.setToggle}/>
                </Card>
            )
        } else {
            return (
                <div className="goal-item">
                    <Card variant="outlined" className="card">
                        <CardContent>
                            <Typography component="p">
                                What? {pendingDetails.what}
                            </Typography>
                            <Typography component="p">
                                Amount? {pendingDetails.amount}
                            </Typography>
                            <Typography component="p">
                                By when? {pendingDetails.when}
                            </Typography>
                            <Typography component="p">
                                How? {pendingDetails.how}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            )
        }
    }
    //mark compete or incomplete
    function handleComplete(event) {
        //update state based on the value from the button click
        let value = Number(event.target.value)
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
    return (
        <div>
            <div className="goal-item">
                {displayEdit()}
                <ButtonGroup variant="contained" color="primary">
                    <Button id="complete" value="1" onClick={handleComplete}>Reel it in</Button>
                    <Button id="incomplete" value="2" onClick={handleComplete}>Fish got away</Button>
                    <Button onClick={() => setShowEdit(prevState => !prevState)}>Change Bait</Button>
                </ButtonGroup> 
            </div>
        </div>
    )
}

export default GoalItem