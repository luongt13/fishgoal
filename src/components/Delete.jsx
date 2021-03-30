import {baseURL, config} from "../service"
import axios from "axios"
// import {Button} from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close'
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
                <IconButton  onClick={handleDelete}>
                    <CloseIcon/>
                </IconButton>
            </Tooltip>
            {/* <Button size="small" variant="contained" color="secondary" startIcon={<DeleteIcon/>}onClick={handleDelete}>Delete</Button> */}
        </div>
    )
}
export default Delete