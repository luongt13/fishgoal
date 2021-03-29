import {useState} from 'react'
import {Link} from "react-router-dom"
import {Button, List, ListItem, AppBar, IconButton, Toolbar, Drawer} from "@material-ui/core"
import {Menu, Close} from '@material-ui/icons';
import "./styles/Nav.css"

function Nav() {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className="nav">
            <AppBar>
                <Toolbar className="nav-bar">
                    <IconButton onClick={() => setToggleMenu((prevState) => !prevState)}edge="start" aria-label="menu">
                        <Menu className="icon hidden"/>
                    </IconButton>
                    <Button className="nav-text" color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            <Drawer variant="persistent" anchor="left" open={toggleMenu} className="hidden">
                <IconButton onClick={() => setToggleMenu((prevState) => !prevState)} edge="start" aria-label="menu">
                    <Close />
                </IconButton>
                <List>
                    <ListItem ><Link className="item" to="/goals">FishGoals</Link></ListItem>
                    <ListItem><Link className="item" to="/caught">Fish Caught</Link></ListItem>
                    <ListItem><Link className="item" to="/missed">Fish Missed</Link></ListItem>            
                    <ListItem><Link className="item" to="/">Log Out</Link></ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default Nav