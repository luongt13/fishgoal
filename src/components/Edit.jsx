import axios from "axios"
import {baseURL, config} from "../service"
import {useState} from "react"

function Edit(props) {
    console.log(props.id)

    // const [update, setUpdate] = useState({
    //     what: "",
    //     when: "",
    //     how: "",
    //     amount: "",
    // })

    const [what, setWhat] = useState(props.goalDetails.what)
    const [when, setWhen] = useState(props.goalDetails.when)
    const [how, setHow] = useState(props.goalDetails.how)
    const [amount, setAmount] = useState(props.goalDetails.amount)
    
    // useEffect(() => {
    //     setUpdate(props.goalDetails)
    // }, [props.id])
  
    // console.log(update)

    async function handleEdit(event) {
        event.preventDefault()
        const data = {
            fields: {
                amount,
                what,
                when,
                how,
                status: 0,
            }
        }
        const updateURL = `${baseURL}/${props.id}`
        await axios.put(updateURL, data, config)
        props.setShowEdit(prevState => !prevState)
        props.setToggle(prevState => !prevState)
        // let [value, id] = event.target
        // setUpdate((prevState) => {
        //     return {...prevState, [id]: value}
        // })
    }


    // function handleUpdate() {

    // }
    // const updateURL = `${baseURL}/${id}`
    return (
        <form onSubmit={handleEdit}>
            <label htmlFor="what">What?</label>
            <input type="text" id="what" required value={what} onChange={(e)=> setWhat(e.target.value)}/>
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" required value={amount} onChange={(e)=> setAmount(e.target.value)}/>
            <label htmlFor="when">By when?</label>
            <input type="text" id="when" required value={when} onChange={(e)=> setWhen(e.target.value)}/>
            <label htmlFor="how">How?</label>
            <input type="text" id="how" required value={how} onChange={(e)=> setHow(e.target.value)}/>
            <input type="submit"/>
        </form>
    )
}

export default Edit