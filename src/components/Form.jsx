import {Link, useParams, useHistory} from "react-router-dom"
import {useState} from "react"
import {useLocalStorage} from "../useLocalStorage"
//styling
import {Button, Card, CardContent, CardActions, TextField} from "@material-ui/core"
import "./styles/Form.css"
//sign-up or login form
function Form(props) {
    const [password, setPassword] = useState("")
    const [name, setName] = useLocalStorage("name",'')
    const [username, setUsername] = useLocalStorage("username","")
    let { title } = useParams()
    let history = useHistory()
    //login or sign-up heading
    function showForm() {
        if(title === "login") {
            return (
                <div>
                    <h2>Login</h2>
                    <Link to="/form/sign-up"><h6>Don't have an account? Sign Up</h6></Link>
                </div>
               
            ) 
        }  else {
            return (
                <div>
                    <h2>Sign-Up</h2>
                   <Link to="/form/login"><h6>Already have an account? Login</h6></Link>
                </div>
            )
        }
    }
    //redirect page to main page
    function handleRedirect() {       
        if(password.length < 1 || name.length < 1 || username.length < 1) {
        } else { 
            props.setToggle(prevState => !prevState)
            history.push("/goals")
        }
    }
    return (
        <div>
            {showForm()}
            <form>
                <Card className="form-container">
                    <CardContent className="form-item">
                        <TextField type="text" id="name" value={name} variant="outlined" label="Name" onChange={(e) => setName(e.target.value)} required/>
                    </CardContent>
                    <CardContent className="form-item">
                        <TextField type="text" id="username" value={username} variant="outlined" label="Username" onChange={(e) => setUsername(e.target.value)} required/>
                    </CardContent>
                    <CardContent className="form-item">
                        <TextField type="password" id="password" value={password} variant="outlined" label="Password" onChange={(e) => setPassword(e.target.value)} required/>
                    </CardContent>  
                    <CardActions className="button">
                        <Button size="small" type="submit" variant="contained" color="primary" onClick={handleRedirect}>Submit</Button>
                    </CardActions>
                </Card>  
            </form>
        </div>
    )
}
export default Form
