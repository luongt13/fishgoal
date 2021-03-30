import {baseURL, config} from "../service"
import axios from "axios"
// import {Button} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
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
            <Tooltip title="Delete" aria-label="delete">
                <IconButton color="secondary" onClick={handleDelete}>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
            {/* <Button size="small" variant="contained" color="secondary" startIcon={<DeleteIcon/>}onClick={handleDelete}>Delete</Button> */}
        </div>
    )
}
export default Delete