//react and data
import {baseURL, config} from "../service"
import axios from "axios"
//styling
import CloseIcon from '@material-ui/icons/Close'
import {IconButton, Tooltip, CardActions} from '@material-ui/core'
// import "./styles/Delete.css"
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
         {/* <CardActions className="button delete"> */}
            <Tooltip title="Delete" aria-label="delete">
                <IconButton  onClick={handleDelete}>
                    <CloseIcon/>
                </IconButton>
            </Tooltip>
         {/* </CardActions> */}
        </div>
    )
}
export default Delete