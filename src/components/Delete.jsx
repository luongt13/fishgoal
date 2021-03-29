import {baseURL, config} from "../service"
import axios from "axios"
import {Button} from "@material-ui/core"
//handle delete items
function Delete(props) {
    //axios to delete item and change toggle
    async function handleDelete() {
        let deleteURL = `${baseURL}/${props.id}`
        await axios.delete(deleteURL, config)
        props.setToggle(prevState => !prevState)
    }
    return (
        <div>
            <Button size="small" variant="contained" color="primary" onClick={handleDelete}>Delete</Button>
        </div>
    )
}

export default Delete