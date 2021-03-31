//react and data
import {baseURL, config} from "../service"
import {useState} from "react"
import axios from "axios"
//styling
import {Button, Card, CardContent, CardActions, TextField, Tooltip, IconButton} from "@material-ui/core"
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
                    <TextField type="text" id="what" variant="outlined" label="What?" required={true} value={what} onChange={(e)=> setWhat(e.target.value)}/>
                </CardContent>
                <CardContent className="form-item">
                    <TextField type="text" id="amount" variant="outlined" label="Amount?" required={true} value={amount} onChange={(e)=> setAmount(e.target.value)}/>
                </CardContent>
                <CardContent className="form-item">
                    <TextField type="text" id="when" variant="outlined" label="When?" required={true} value={when} onChange={(e)=> setWhen(e.target.value)}/>
                </CardContent>
                <CardContent className="form-item">
                    <TextField type="text" id="how" variant="outlined" label="How?" required={true} value={how} onChange={(e)=> setHow(e.target.value)}/>
                </CardContent>
                <CardActions className="button">
                    <Tooltip aria-label="Save" title="Save">
                        <IconButton color="primary">
                            <SaveIcon onClick={handleEdit}/>
                        </IconButton>
                        {/* <Button size="large" type="submit" color="primary" startIcon={<SaveIcon/>} onClick={handleEdit}></Button> */}
                    </Tooltip>
                    {/* <Button size="small" type="submit" variant="contained" color="primary" startIcon={<SaveIcon/>} onClick={handleEdit}></Button> */}
                </CardActions>
            </Card>   
        </form>
    )
}
export default Edit