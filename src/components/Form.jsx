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

    let { title } = useParams()
    let history = useHistory()
    const [userData, setUserData] = useState([])
    useEffect(() => {
        handleUser()
    }, [])
console.log(userData)
    function checkInput(event) {
        event.preventDefault()
        userData.map(user => {
            console.log(Object.values(user))
            let currentUsers = Object.values(user)
        
            // let ah = currentUsers.find(userName => userName === name)
            // let moo = currentUsers.find(userName => userName === username)
            
            console.log(currentUsers.find(userName => userName === name))
            console.log(currentUsers.find(userName => userName === username))
            if (title === "login") {
                    if(currentUsers.find(userName => userName === name) && currentUsers.find(userName => userName === username)) {
                        console.log("success")
                        return handleRedirect()
                        } else {
                            console.log("Invalid username and password")
                        }
                } else if (title === "sign-up"){
                    if(currentUsers.find(userName => userName === username)) {
                        console.log("username is taken")
                    } else if(name.length > 2 && username.length > 2){
                        // return registerUser()
                        console.log(username)
                    }
                }
            })
           

        }
        // console.log(tryThis)
        // users.map(user => {
        //         console.log(Object.values(user))
        //         let currentUsers = Object.values(user)


        //         if (title === "login") {
        //             if(currentUsers[0] === name && currentUsers[1] === username) {
        //                 console.log("success")
        //                 return handleRedirect()
        //                 } else {
        //                     console.log("Invalid username and password")
        //                 }
        //         } else if (title === "sign-up"){
        //             if(currentUsers[1] === username) {
        //                 console.log("username is taken")
        //             } else if(name.length > 2 && username.length > 2){
        //                 // return registerUser()
        //                 console.log(username)
        //             }
        //         }
        //     })
           
        // })
    

    async function registerUser() {
        let newUser = {
            name,
            username,
        }
        console.log(newUser)
        await axios.post(userURL, {fields: newUser}, config)
    }

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
        </div>
    )
}
export default Form