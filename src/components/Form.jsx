import {useState} from 'react'
import {useParams} from "react-router-dom"
import {useLocalStorage} from "../useLocalStorage"
//styling
import {Link, Button, Card, CardContent, CardActions, Typography, TextField} from "@material-ui/core"
import "./styles/Form.css"


function Home() {
    let { title } = useParams()
    const [name, setName] = useLocalStorage('name', 'Bob')
    const [email, setEmail] =useLocalStorage('email', 'email')
    const [userData, setUserData] = useLocalStorage({
        name: "Bob",
        email: "email@gmail.com",
        // password: "",
    })


    function showForm() {
        if(title === "login") {
            return (
                <div>
                    <h2>Login</h2>
                    <Typography>
                    <h6>Don't have an account?</h6>
                        <Link href="/form/sign-up">sign up
                    </Link>
                    </Typography>
                </div>
               
            ) 
        }  else {
            return (
                <div>
                    <h2>Sign-Up</h2>
                    <Typography>
                    <h6>Already have an account?</h6>
                        <Link href="/form/login">login
                    </Link>
                    </Typography>
                </div>
            )
        }
    }
    // function handleInput(event) {
    //     event.preventDefault()
    //     const { value } = event.target
    //     setUserData((prevState) => {
    //         return ( {
    //         ...prevState,
    //         [id]: value,
    //         })
    //     })
    // }
    return (
        <div>
            {showForm()}
            <form>
                <Card className="form-container">
                    <CardContent className="form-item">
                        <TextField type="text" id="name" value={name} variant="outlined" label="Name" onChange={(e) => setName(e.target.value)}/>
                        {/* <label htmlFor="name">Name </label>
                        <input type="text" id="name" value={userData.name}/> */}
                    </CardContent>
                    <CardContent className="form-item">
                        <TextField type="email" id="email" value={email} variant="outlined" label="Email" onChange={(e) => setEmail(e.target.value)}/>
                        {/* <label htmlFor="email">Email </label>
                        <input type="email" id="email" value={userData.email}/> */}
                    </CardContent>
                    <CardContent className="form-item">
                        <TextField type="password" id="password" variant="outlined" label="Password"/>
                        {/* <label htmlFor="password">Password </label>
                        <input type="password" id="password" value={userData.password}/> */}
                    </CardContent>  
                    <CardActions className="button">
                        <Button size="small" type="submit" variant="contained" color="secondary">Submit</Button>
                    </CardActions>
                </Card>  
            </form>
        
        </div>
            // <form onChange={handleInput}>
            //     <Card className="home-form">
            //         <CardContent className="form-item">
            //             <label htmlFor="name">Name </label>
            //             <input type="text" id="name" value={userData.name}/>
            //         </CardContent>
            //         <CardContent className="form-item">
            //             <label htmlFor="email">Email </label>
            //             <input type="email" id="email" value={userData.email}/>
            //         </CardContent>
            //         <CardContent className="form-item">
            //             <label htmlFor="password">Password </label>
            //             <input type="password" id="password" value={userData.password}/>
            //         </CardContent>  
            //         <CardActions className="button">
            //             <Button size="small" type="submit" variant="contained" color="secondary">Submit</Button>
            //             <Link to="/goals"><Button size="small" variant="contained" color="secondary">Enter</Button></Link>
            //         </CardActions>
            //     </Card>  
            // </form>
    )
}

export default Home
