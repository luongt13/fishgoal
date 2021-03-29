import React from 'react'
import {Link} from "react-router-dom"
import {MenuList, MenuItem, AppBar} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { findByLabelText } from '@testing-library/dom';


const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "black",
    },
    item: {
    textDecoration: "none",
    color: "white",

    },
    // pos: {
    //   marginBottom: 12,
    // },
  });

function Nav() {
    const classes = useStyles()

    return (
        <div className="nav">
            <AppBar>
            <MenuList className={classes.root}>
                <MenuItem ><Link className={classes.item} to="/goals">FishGoals</Link></MenuItem>
                <MenuItem><Link className={classes.item} to="/caught">Fish Caught</Link></MenuItem>
                <MenuItem><Link className={classes.item} to="/missed">Fish Missed</Link></MenuItem>            
                <MenuItem><Link className={classes.item} to="/">Log Out</Link></MenuItem>
            </MenuList>
            </AppBar>
          

        </div>
    )
}

export default Nav