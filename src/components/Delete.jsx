import {baseURL, config} from "../service"
import axios from "axios"
//handle delete items
function Delete(props) {

    async function handleDelete() {
        let deleteURL = `${baseURL}/${props.id}`
        await axios.delete(deleteURL, config)
    }
    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Delete