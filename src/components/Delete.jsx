//react and data
import {baseURL, config} from "../service"
import axios from "axios"
//styling
import CloseIcon from "@material-ui/icons/Close"
import {IconButton, Button, Tooltip} from "@material-ui/core"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

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
                <Button onClick={handleDelete}><DeleteOutlineIcon/></Button>
                {/* <IconButton onClick={handleDelete}>
                    <DeleteOutlineIcon/>
                </IconButton> */}
            </Tooltip>
        </div>
    )
}
export default Delete