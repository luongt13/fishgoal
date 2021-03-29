import {Link} from "react-router-dom"
import {useState} from "react"
import Home from "./Home"
import {Button, ButtonGroup, Card, CardContent} from "@material-ui/core"
import "./styles/Welcome.css"

function Welcome() {
    const [form, setForm] = useState(false)

   

    function showForm() {
        if(form) {
            return (
                <Home/>
            )
        }  
    }
  
    return (
        <div >
            <Card className="container">
                <CardContent className="banner">
                <h1>FishGoals</h1>
                <ButtonGroup  variant="contained" color="secondary">
                    <Button onClick={() => setForm(prevState => !prevState)}><Link to="/form/sign-up">Sign Up</Link></Button>
                    <Button><Link to="/goals">Guest</Link></Button>
                    <Button onClick={() => setForm(prevState => !prevState)}><Link to="/form/log-in">Log In</Link></Button>
                    <Button>Log In</Button>
            </ButtonGroup>
            </CardContent>
            </Card>
            {showForm()}
        </div>
    )
}
export default Welcome


    

