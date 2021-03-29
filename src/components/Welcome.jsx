import {Link} from "react-router-dom"
import {Button, ButtonGroup} from "@material-ui/core"
import "./styles/Welcome.css"

function Welcome() {
    return (
        <div className="container">
            <div>
                <h1>FishGoals</h1>
            </div>
            <ButtonGroup variant="contained">
                <Button><Link to="/home">Sign Up</Link></Button>
                <Button><Link to="/home">Guest</Link></Button>
                <Button><Link to="/home">Log In</Link></Button>
            </ButtonGroup>
        </div>
    )
}
export default Welcome


    

