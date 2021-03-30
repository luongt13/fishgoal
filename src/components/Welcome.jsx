import {Link} from "react-router-dom"
import {useState} from "react"
import Form from "./Form"
import {Button, ButtonGroup, Card, CardContent, Container} from "@material-ui/core"
import "./styles/Welcome.css"

function Welcome() {
    const [form, setForm] = useState(false)

    function showForm() {
        if(form) {
            return <Form/>   
        }  
    }
    return (
        <div >
            <Container maxWidth="lg" className="container">
                <CardContent className="banner">
                <h1>FishGoals</h1>
                    {/* <ButtonGroup color="primary" variant="contained">
                        <Button onClick={() => setForm(prevState => !prevState)}><Link to="/form/sign-up">Sign Up</Link></Button>
                        <Button><Link to="/goals">Guest</Link></Button>
                        <Button onClick={() => setForm(prevState => !prevState)}><Link to="/form/log-in">Log In</Link></Button>
                    </ButtonGroup> */}
                    <Button variant="contained" color="primary"><Link to="/goals">Get Started</Link></Button>
                </CardContent>
            </Container>
            {showForm()}
        </div>
    )
}
export default Welcome


    

