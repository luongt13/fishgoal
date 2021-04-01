import {Link, useParams, useHistory} from "react-router-dom"
import {useState, useEffect} from "react"
import {useLocalStorage} from "../useLocalStorage"
//styling
import {Button, Card, CardContent, CardActions, TextField} from "@material-ui/core"
import "./styles/Form.css"

import {userURL, config} from "../service"
import axios from "axios"
//sign-up or login form
function Form(props) {
    const [password, setPassword] = useState("")
    const [name, setName] = useLocalStorage("name",'')
    const [username, setUsername] = useLocalStorage("username","")

    // const [name, setName] = useState("")
    // const [username, setUsername] = useState("")
    // const [userName, setUserName] = useLocalStorage("name",'')
    // const [userId, setUserId] = useLocalStorage("username","")
    let { title } = useParams()
    let history = useHistory()
    const [userData, setUserData] = useState([])
    useEffect(() => {
        handleUser()
    }, [])
    userData.map(userInfo => {
        console.log(userInfo.fields)
    })
    // let storedUserId = JSON.parse(localStorage.getItem("username"))
    // let storedUserName = localStorage.getItem("name")
    // console.log(storedUserId)
    // function handleForm(){
    //     if(title === "login") {
    //         if (storedUserName === name || storedUserId === username) {
    //             props.setToggle(prevState => !prevState)
    //             history.push("/goals")
    //         } else {
    //             history.push("/form/sign-up")
    //         }

    //     } else {
    //         setUserName(name)
    //         setUserId(username)
    //         history.push("/form/login")
    //     }
    // }

    async function handleUser() {
        let resp = await axios.get(userURL, config)
        setUserData(resp.data.records)
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
            <form onSubmit={handleRedirect}>
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
        </div>
    )
}
export default Form