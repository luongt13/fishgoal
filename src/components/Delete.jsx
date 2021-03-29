import {baseURL, config} from "../service"
import axios from "axios"
import {Button} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
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
            <Button size="small" variant="contained" color="secondary" startIcon={<DeleteIcon/>}onClick={handleDelete}>Delete</Button>
        </div>
    )
}
export default Delete