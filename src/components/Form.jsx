import {Link, useParams, useHistory} from "react-router-dom"
import {useState, useEffect} from "react"
import {useLocalStorage} from "../useLocalStorage"
//styling
import {Button, Card, CardContent, CardActions, TextField, Snackbar} from "@material-ui/core"
import Alert from '@material-ui/lab/Alert'
import "./styles/Form.css"

import {userURL, config} from "../service"
import axios from "axios"
//sign-up or login form
function Form(props) {
    //to toggle axios call
    const [data, setData] = useState(false)
    //alerts and message
    const [open, setOpen] = useState(false)
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState("")
    //password 
    const [password, setPassword] = useState("")
    //user data from axios get
    const [userData, setUserData] = useState([])
    //local storage data from form input
    const [name, setName] = useLocalStorage("name",'')
    const [username, setUsername] = useLocalStorage("username","")
    //params from url
    let { title } = useParams()
    let history = useHistory()
    //get user data invoked
    useEffect(() => {
        handleUser()
    }, [data])
    //on submit, check for user if logging in or signing up
    function checkInput(event) {
        event.preventDefault()
        for (let i=0; i<userData.length; i++) {
            let user = userData[i]
            let currentUsers = Object.values(user)
            if (title === "login") {
                if(currentUsers.find(userName => userName === name) && currentUsers.find(userName => userName === username)) {
                    return handleRedirect()
                    } else {
                        setMessage("Invalid username")
                        setOpen(true)
                    }
            } else if (title === "sign-up"){
                if(currentUsers.find(userName => userName === username)) {
                    setMessage("Username Taken")
                    setOpen(true)
                    setUsername("")
                    setPassword("")
                    break
                } else {
                    registerUser()
                    break
                }
            }
        }
    }
    //register user, set fields to empty and alert success message
    async function registerUser() {
        let newUser = {
            name,
            username,
        }
        await axios.post(userURL, {fields: newUser}, config)
        setData(prevState => !prevState)
        history.push("/form/login")
        setName("")
        setUsername("")
        setPassword("")
        setMessage("Successfully Registered")
        setSuccess(true)
    }
    //get user data
    async function handleUser() {
        let resp = await axios.get(userURL, config)
        setUserData(resp.data.records.map(user => user.fields))
    }
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
        props.setToggle(prevState => !prevState)
        history.push("/goals")
    }
    return (
        <div>
            {showForm()}
            <form onSubmit={checkInput}>
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
                        <Button size="small" type="submit" variant="contained" color="primary">Submit</Button>
                    </CardActions>
                </Card>  
            </form>
            <Snackbar open={open} message={message} >
                <Alert onClose={() => setOpen(false)} severity="error">{message}</Alert>
            </Snackbar>
            <Snackbar open={success} message={message} >
                <Alert onClose={() => setSuccess(false)} severity="success">{message}</Alert>
            </Snackbar>
        </div>
    )
}
export default Form