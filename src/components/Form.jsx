import {useState} from 'react'
import {Link, useParams} from "react-router-dom"
import {Button, Card, CardContent, CardActions} from "@material-ui/core"
import "./styles/Form.css"

function Home() {
    let { title } = useParams()
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    })

    function handleInput(event) {
        event.preventDefault()
        const { id, value } = event.target
        setUserData((prevState) => {
            return ( {
            ...prevState,
            [id]: value,
            })
        })
    }
    return (
            <form onChange={handleInput}>
                <Card className="home-form">
                    <CardContent className="form-item">
                        <label htmlFor="name">Name </label>
                        <input type="text" id="name" value={userData.name}/>
                    </CardContent>
                    <CardContent className="form-item">
                        <label htmlFor="email">Email </label>
                        <input type="email" id="email" value={userData.email}/>
                    </CardContent>
                    <CardContent className="form-item">
                        <label htmlFor="password">Password </label>
                        <input type="password" id="password" value={userData.password}/>
                    </CardContent>  
                    <CardActions className="button">
                        <Button size="small" type="submit" variant="contained" color="secondary">Submit</Button>
                        <Link to="/goals"><Button size="small" variant="contained" color="secondary">Enter</Button></Link>
                    </CardActions>
                </Card>  
            </form>
    )
}

export default Home
