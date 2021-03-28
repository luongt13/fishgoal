import {useState} from 'react'
import {Link} from "react-router-dom"

function Home() {

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
        <div>
            <h1>Welcome</h1>
            <form onChange={handleInput}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={userData.name}/>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" value={userData.email}/>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" value={userData.password}/>
                <input type="submit"/>
            </form>
            <Link to="/goals"><button>Enter</button></Link>
        </div>
    )
}

export default Home
