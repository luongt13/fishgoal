import React from 'react'
import {Link} from "react-router-dom"

function Nav() {
    return (
        <div className="nav">
            <Link to="/goals">FishGoals</Link>
            <Link to="/caught">Fish Caught</Link>
            <Link to="/missed">Fish Missed</Link>
        </div>
    )
}

export default Nav