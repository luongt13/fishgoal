//react
import {useState} from "react"
import {Link, useHistory} from "react-router-dom"
//styling
import {Button, List, ListItem, AppBar, IconButton, Toolbar, Drawer} from "@material-ui/core"
import {Menu, Close} from "@material-ui/icons"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import ListAltIcon from "@material-ui/icons/ListAlt"
import "./styles/Nav.css"
//nav bar
function Nav(props) {
    const [toggleMenu, setToggleMenu] = useState(false)
    let history = useHistory()
    //clear local storage upon logout
    function handleLogOut(){
        localStorage.clear()
        props.setGoals([])
        history.push("/")
    }
    return (
        <div className="nav">
            <AppBar>
            <Toolbar className="nav-bar">
                <IconButton onClick={() => setToggleMenu((prevState) => !prevState)}edge="start" aria-label="menu">
                    <Menu className="icon hidden"/>
                </IconButton>
                <div className="desktop">
                    <Button color="inherit" startIcon={<ListAltIcon/>}><Link to="/goals">FishGoals</Link></Button>
                    <Button color="inherit" startIcon={<CheckBoxIcon/>}><Link to="/remove/caught">Caught</Link></Button>
                    <Button color="inherit" startIcon={<CheckBoxOutlineBlankIcon/>}><Link to="/remove/missed">Missed</Link></Button>
                    <Button color="inherit" startIcon={<ExitToAppIcon />} onClick={handleLogOut}>Logout</Button>
                </div>
            </Toolbar>
            </AppBar>
            <Drawer variant="persistent" anchor="left" open={toggleMenu} className="hidden">
                <IconButton onClick={() => setToggleMenu((prevState) => !prevState)} edge="start" aria-label="menu">
                    <Close />
                </IconButton>
                <List>
                    <ListItem ><Link className="item" to="/goals">FishGoals</Link></ListItem>           
                    <ListItem><Link className="item" to="/remove/caught">Fish Caught</Link></ListItem>
                    <ListItem><Link className="item" to="/remove/missed">Fish Missed</Link></ListItem> 
                    <ListItem onClick={handleLogOut} className="item">Log Out</ListItem>
                </List>
            </Drawer>
        </div>
    )
}
export default Nav