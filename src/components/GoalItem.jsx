import React from 'react'
import Edit from "./Edit"
import {Route, Link} from "react-router-dom"
import {useState} from "react"

function GoalItem(props) {
    let pendingDetails = props.pending.fields
    const [showEdit, setShowEdit] = useState(false)


    function displayEdit() {
        if(showEdit){
            return (
                <Edit key={props.pending.id} goalDetails={pendingDetails} id={props.pending.id}/>
            )
        } else {
            return (
                <div>
                    <p>What? {pendingDetails.what}</p>
                    <p>Amount? {pendingDetails.measure}</p>
                    <p>By when? {pendingDetails.when}</p>
                    <p>How? {pendingDetails.how}</p>
                </div>
            )
        }
    }

    return (
        <div>
            <div className="goal-item">
                <button>Reel it in</button>
                {displayEdit()}
{/* 
                <p>What? {pendingDetails.what}</p>
                <p>Amount? {pendingDetails.measure}</p>
                <p>By when? {pendingDetails.when}</p>
                <p>How? {pendingDetails.how}</p> */}
               
                <button>Fish got away</button>
                <Link to={`/edit/${props.pending.id}`} onClick={() => setShowEdit(prevState => !prevState)}><button>Change Bait</button></Link>

            </div>
            
            <Route path="/edit/:id">
                
            </Route>
            {/* <Route path="/edit/:id">
                <Edit key={props.pending.id} goalDetails={pendingDetails} id={props.pending.id}/>
            </Route> */}
             
        </div>
    )
}

export default GoalItem
