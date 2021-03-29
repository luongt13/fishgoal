import {baseURL, config} from "../service"
import {useState} from "react"
import axios from "axios"
import {Button, Card, CardContent, CardActions} from "@material-ui/core"
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
        }
        const updateURL = `${baseURL}/${props.id}`
        await axios.put(updateURL, {fields: data }, config)
        props.setStatus(data)
        props.setShowEdit(prevState => !prevState)
        props.setToggle(prevState => !prevState)
    }
    return (
        <form onSubmit={handleEdit}>
            <Card className="form-container">
            <CardContent className="form-item">
            <label htmlFor="what">What? </label>
            <input type="text" id="what" required value={what} onChange={(e)=> setWhat(e.target.value)}/>
            </CardContent>
            <CardContent className="form-item">
            <label htmlFor="amount">Amount? </label>
            <input type="text" id="amount" required value={amount} onChange={(e)=> setAmount(e.target.value)}/>
            </CardContent>
            <CardContent className="form-item">
            <label htmlFor="when">By when? </label>
            <input type="text" id="when" required value={when} onChange={(e)=> setWhen(e.target.value)}/>
            </CardContent>
            <CardContent className="form-item">
            <label htmlFor="how">How? </label>
            <input type="text" id="how" required value={how} onChange={(e)=> setHow(e.target.value)}/>
            </CardContent>
            <CardActions className="button">
            <Button size="small" type="submit" variant="contained" color="secondary">Save</Button>
            </CardActions>
            </Card>   
        </form>
    )
}

export default Edit