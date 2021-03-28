import {Link} from "react-router-dom"

function Welcome() {
    return (
        <div>
            <h1>Set Your FishGoals</h1>
            <Link to="/home"><button>Guest</button></Link>
            <Link to="/home"><button>Sign Up</button></Link>
            <Link to="/home"><button>Log In</button></Link>
        </div>
    )
}
export default Welcome


    

