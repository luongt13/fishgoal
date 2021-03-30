//react
import {Link} from "react-router-dom"
// import {useState} from "react"
//component
// import Form from "./Form"
//styling
import {Button} from "@material-ui/core"
import "./styles/Welcome.css"

function Welcome() {
    // const [form, setForm] = useState(false)

    // function showForm() {
    //     if(form) {
    //         return <Form/>   
    //     }  
    // }
    return (
        <div className="container">
            {/* <Container maxWidth="lg" className="container"> */}
                <div className="banner">
                    <h1>FishGoals</h1>
                    {/* <ButtonGroup color="primary" variant="contained">
                        <Button onClick={() => setForm(prevState => !prevState)}><Link to="/form/sign-up">Sign Up</Link></Button>
                        <Button><Link to="/goals">Guest</Link></Button>
                        <Button onClick={() => setForm(prevState => !prevState)}><Link to="/form/log-in">Log In</Link></Button>
                    </ButtonGroup> */}
                    <Button variant="contained" color="primary"><Link to="/form/login">Get Started</Link></Button>
                </div>
            {/* {showForm()} */}
            {/* </Container> */}
            {/* <Button size="small" variant="contained" color="primary"><Link to="/goals">Enter</Link></Button> */}
         </div>
    )
}
export default Welcome


    

