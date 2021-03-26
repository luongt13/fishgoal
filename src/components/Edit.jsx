import axios from "axios"
import {baseURL, config} from "../service"
import {useState, useEffect} from "react"

function Edit(props) {
    // console.log(props)
    let id = props.id
    // console.log(id)

    const [update, setUpdate] = useState({
        what: "",
        when: "",
        how: "",
        amount: "",
    })

    useEffect(() => {
        setUpdate(props.goalDetails)
    }, [props.id])
  
    // console.log(update)

    function handleChange(event) {
        console.dir(event.target)
        // let [value, id] = event.target
        // setUpdate((prevState) => {
        //     return {...prevState, [id]: value}
        // })
    }


    // function handleUpdate() {

    // }
    // const updateURL = `${baseURL}/${id}`
    return (
        <form>
            <label htmlFor="what">What?</label>
            <input type="text" id="what" required value={update.what} onChange={handleChange}/>
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" required value={update.amount} onChange={handleChange}/>
            <label htmlFor="when">By when?</label>
            <input type="text" id="when" required value={update.when} onChange={handleChange}/>
            <label htmlFor="how">How?</label>
            <input type="text" id="how" required value={update.how} onChange={handleChange}/>
            <input type="submit"/>
        </form>
    )
}

export default Edit