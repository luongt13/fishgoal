import {useState, useEffect} from "react"
import {baseURL, config} from "../service"
import axios from "axios"
import Edit from "./Edit"
//display goals and buttons to mark complete or incomplete
function GoalItem(props) {
    let pendingDetails = props.pending.fields
    //toggle to show input or text
    const [showEdit, setShowEdit] = useState(false)
    //change state of status to move to caught or missed list
    const [status, setStatus] = useState(pendingDetails)
    //put when status state is changed
    useEffect(() => {
        setChange()
    }, [status])
    //axios call to update info
    async function setChange() {
        let newURL = `${baseURL}/${props.pending.id}`
        //update with new status
        await axios.put(newURL, {fields: status }, config)
        props.setToggle(prevState => !prevState)
    }
    //display either input to edit to goal text, pass toggle to rerender, pass status to set status
    function displayEdit() {
        if(showEdit){
            return (
                //to edit page
                    <Edit key={props.pending.id} goalDetails={pendingDetails} id={props.pending.id} setShowEdit={setShowEdit} setStatus={setStatus} setToggle={props.setToggle}/>
            )
        } else {
            return (
                <div className="goal-text">
                    <p>What? {pendingDetails.what}</p>
                    <p>Amount? {pendingDetails.amount}</p>
                    <p>By when? {pendingDetails.when}</p>
                    <p>How? {pendingDetails.how}</p>
                </div>
            )
        }
    }
    //mark compete or incomplete
    function handleComplete(event) {
        //update state based on the value from the button click
        let value = Number(event.target.value)
        setStatus((prevState) => {
            return ( {
                ...prevState,
                what: pendingDetails.what,
                when: pendingDetails.when,
                how: pendingDetails.how,
                amount: pendingDetails.amount,
                status: value,
            })
        })
    }
    return (
        <div>
            <div className="goal-item">
                {displayEdit()}
                <button id="complete" value="1" onClick={handleComplete}>Reel it in</button>
                <button id="incomplete" value="2"onClick={handleComplete}>Fish got away</button>
                <button onClick={() => setShowEdit(prevState => !prevState)}>Change Bait</button>
            </div>
        </div>
    )
}

export default GoalItem


// import {useState, useEffect} from "react"
// import {baseURL, config} from "../service"
// import axios from "axios"
// import Edit from "./Edit"
// //display goals and buttons to mark complete or incomplete
// function GoalItem(props) {
// console.log(props.pending[0])
// let data = props.pending.map((pending)=> {
//     return pending.fields
//     // for (const [key, value] of Object.entries(pending.fields)) {
//     //     // console.log(`what: ${value}`)
//     //     console.log(`${key}: ${value}`)
//     // }
// })
// console.log(data)


// useEffect(() => {
//     console.log("moo")
// }, [props])

//     // let pendingDetails = props.pending.fields
//     //toggle to show input or text
//     const [showEdit, setShowEdit] = useState(false)
//     //change state of status to move to caught or missed list
//     const [status, setStatus] = useState({
//         // what: pendingDetails.what,
//         // when: pendingDetails.when,
//         // how: pendingDetails.how,
//         // amount: pendingDetails.amount,
//         // status: pendingDetails.status,
//     })
//     //put when status state is changed
//     useEffect(() => {
//         setChange()
//     }, [status])


//     // useEffect(() => {
//     //     setStatus({
//     //         what: pendingDetails.what,
//     //         when: pendingDetails.when,
//     //         how: pendingDetails.how,
//     //         amount: pendingDetails.amount,
//     //         status: pendingDetails.status,
//     //     })
//     // }, [])

//     async function setChange() {
//         let newURL = `${baseURL}/${props.pending.id}`
//         //update with new status
//         await axios.put(newURL, {fields: status } , config)
//         props.setToggle(prevState => !prevState)
//     }

//     //display either input to edit to goal text
//     function displayEdit() {
//         if(showEdit){
//             return (
//                 //to edit page
//                     // <Edit key={props.pending.id} goalDetails={pendingDetails} id={props.pending.id} setShowEdit={setShowEdit} setToggle={props.setToggle}/>
//                     <Edit key={props.pending.id} goalDetails={data} id={props.pending.id} setShowEdit={setShowEdit} setToggle={props.setToggle}/>
//             )
//         } else {
//             return (
//                 <div className="goal-text">
//                     {data.map((pendingDetails) => {
//                     console.log(pendingDetails.amount)
//                     return (
//                         <div>
//                             <p>What? {pendingDetails.what}</p>
//                             <p>Amount???? {pendingDetails.amount}</p>
//                             <p>By when? {pendingDetails.when}</p>
//                             <p>How? {pendingDetails.how}</p>
//                             <button id="complete" value="1" onClick={handleComplete}>Reel it in</button>
//                 <button id="incomplete" value="2"onClick={handleComplete}>Fish got away</button>
//                 <button onClick={() => setShowEdit(prevState => !prevState)}>Change Bait</button>
//                         </div>
//                      )})}
//                     {/* <p>What? {pendingDetails.what}</p>
//                     <p>Amount???? {pendingDetails.amount}</p>
//                     <p>By when? {pendingDetails.when}</p>
//                     <p>How? {pendingDetails.how}</p> */}
//                 </div>
//             )
//         }
//     }
//     //mark compete
//     function handleComplete(event) {
//         //update state based on the value from the button click
//         let value = Number(event.target.value)
//         setStatus((prevState) => {
//             return ( {
//                 ...prevState,
//                 // what: pendingDetails.what,
//                 // when: pendingDetails.when,
//                 // how: pendingDetails.how,
//                 // amount: pendingDetails.amount,
//                 status: value,
//             })
//         })
//     }
//     // console.log(status)
//     return (
//         <div>
//             <div className="goal-item">
//                 {displayEdit()}
//                 {/* <button id="complete" value="1" onClick={handleComplete}>Reel it in</button>
//                 <button id="incomplete" value="2"onClick={handleComplete}>Fish got away</button>
//                 <button onClick={() => setShowEdit(prevState => !prevState)}>Change Bait</button> */}
//             </div>
//         </div>
//     )
// }

// export default GoalItem
