import {useState} from 'react'
import {Link} from "react-router-dom"
import {List, ListItem, AppBar, IconButton, Toolbar, Drawer} from "@material-ui/core"
import {Menu, ChevronLeft} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    root: {
        // display: "flex",
        // flexDirection: "row",
        // justifyContent: "center",
        // backgroundColor: "black",
    },
    item: {
    textDecoration: "none",
    // color: "white",

    },
  });

function Nav() {
    const classes = useStyles()
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className="nav">
            <AppBar>
                <Toolbar>

                <IconButton onClick={() => setToggleMenu((prevState) => !prevState)}edge="start" aria-label="menu">
                    <Menu />
                </IconButton>
                </Toolbar>
                </AppBar>
                <Drawer variant="persistent" anchor="left" open={toggleMenu}>
                <IconButton onClick={() => setToggleMenu((prevState) => !prevState)}edge="start" aria-label="menu">
                    <ChevronLeft />
                </IconButton>
                    
                    <List className={classes.root}>
                    <ListItem ><Link className={classes.item} to="/goals">FishGoals</Link></ListItem>
                    <ListItem><Link className={classes.item} to="/caught">Fish Caught</Link></ListItem>
                    <ListItem><Link className={classes.item} to="/missed">Fish Missed</Link></ListItem>            
                    <ListItem><Link className={classes.item} to="/">Log Out</Link></ListItem>
                    </List>
                </Drawer>
    
     
          
        </div>
    )
}

export default Nav