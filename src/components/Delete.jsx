import {baseURL, config} from "../service"
import axios from "axios"
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
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Delete