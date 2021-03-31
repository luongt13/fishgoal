//react
import {Link} from "react-router-dom"
//styling
import {Button} from "@material-ui/core"
import "./styles/Welcome.css"
//welcome page
function Welcome() {
    return (
        <div className="container">
            <div className="banner">
                <h1>FishGoals</h1>
                <Button variant="contained" color="primary"><Link to="/form/login">Get Started</Link></Button>
            </div>
         </div>
    )
}
export default Welcome