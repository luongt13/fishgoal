//react and data
import {baseURL, config} from "../service"
import {useState} from "react"
import axios from "axios"
//styling
import {Button, Card, CardContent, CardActions, TextField} from "@material-ui/core"
import SaveIcon from "@material-ui/icons/Save"
//edit goals
function Edit(props) {
    //set state of variables
    const [what, setWhat] = useState(props.goalDetails.what)
    const [when, setWhen] = useState(props.goalDetails.when)
    const [how, setHow] = useState(props.goalDetails.how)
    const [amount, setAmount] = useState(props.goalDetails.amount)
    //axios to update info, change state of showedit and re-render info and set status for goalitem
    async function handleEdit(event) {
        event.preventDefault()
        const data = {
                amount,
                what,
                when,
                how,
                status: 0,
                username: props.userId,
        }
        const updateURL = `${baseURL}/${props.id}`
        await axios.put(updateURL, {fields: data }, config)
        props.setStatus(data)
        props.setShowEdit(prevState => !prevState)
        props.setToggle(prevState => !prevState)
    }
    return (
        <form >
            <Card className="form-container">
                <CardContent className="form-item">
                    <TextField type="text" id="what" variant="outlined" required value={what} onChange={(e)=> setWhat(e.target.value)}/>
                </CardContent>
                <CardContent className="form-item">
                    <TextField type="text" id="amount" variant="outlined" required value={amount} onChange={(e)=> setAmount(e.target.value)}/>
                </CardContent>
                <CardContent className="form-item">
                    <TextField type="text" id="when" variant="outlined" required value={when} onChange={(e)=> setWhen(e.target.value)}/>
                </CardContent>
                <CardContent className="form-item">
                    <TextField type="text" id="how" variant="outlined" required value={how} onChange={(e)=> setHow(e.target.value)}/>
                </CardContent>
                <CardActions className="button">
                    <Button size="small" type="submit" variant="contained" color="primary" startIcon={<SaveIcon/>} onClick={handleEdit}>Save</Button>
                </CardActions>
            </Card>   
        </form>
    )
}
export default Edit