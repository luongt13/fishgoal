import {useState} from 'react'
import {Link, useParams} from "react-router-dom"
import {useLocalStorage} from "../useLocalStorage"
//styling
import {Button, Card, CardContent, CardActions, TextField} from "@material-ui/core"
import "./styles/Form.css"

function Home() {
    let { title } = useParams()
    const [name, setName] = useLocalStorage("name",'')
    const [username, setUsername] = useState("")
    const [userData, setUserData] = useLocalStorage("username","")

    function showForm() {
        if(title === "login") {
            return (
                <div>
                    <h2>Login</h2>
                    <Link to="/sign-up"><h6>Don't have an account? Sign Up</h6></Link>
                </div>
               
            ) 
        }  else {
            return (
                <div>
                    <h2>Sign-Up</h2>
                   <Link to="/login"><h6>Already have an account? Login</h6></Link>
                </div>
            )
        }
    }
    //set local storage 
    function handleSubmit() {
       setUserData(username)
    }
    return (
        <div>
            {showForm()}
            <form>
                <Card className="form-container">
                    <CardContent className="form-item">
                        <TextField type="text" id="name" value={name} variant="outlined" label="Name" onChange={(e) => setName(e.target.value)}/>
                    </CardContent>
                    <CardContent className="form-item">
                        <TextField type="text" id="username" value={username} variant="outlined" label="Username" onChange={(e) => setUsername(e.target.value)}/>
                    </CardContent>
                    <CardContent className="form-item">
                        <TextField type="password" id="password" variant="outlined" label="Password"/>
                    </CardContent>  
                    <CardActions className="button">
                        <Button size="small" type="submit" variant="contained" color="secondary" onClick={handleSubmit}><Link to="/goals">Submit</Link></Button>
                    </CardActions>
                </Card>  
            </form>
        </div>
    )
}
export default Home
