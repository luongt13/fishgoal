import React from 'react'
import {useParams} from "react-router-dom"
//component
import Delete from "./Delete"
//styling
import {Card, CardContent, CardActions, Typography, Grid} from "@material-ui/core"
import "../App.css"

function RemovedGoals(props) {
console.log(props)
    let {type} = useParams()
    function displayTitle() {
        if (type === "missed") {
            return <h2>Fish That Got Away</h2>
            
        } else if (type === "caught") {
            return <h2>Caught Fish</h2>
        }
    }
    function displayList() {
        if(type === "missed") {
           return ( props.incomplete.map((goal) => {
                let incompleteDetails = goal.fields
                return (
                    <div className="goal-list">
                        <Card className="card">
                            <Grid container>
                                <Grid item xs={11}>
                                    <CardContent className="goal-item">
                                        <Typography component="p" className="label">What?</Typography>
                                        <Typography component="p">{incompleteDetails.what}</Typography>
                                        <Typography component="p" className="label">Amount?</Typography>
                                        <Typography component="p">{incompleteDetails.amount}</Typography>
                                        <Typography component="p" className="label">When?</Typography>
                                        <Typography component="p">{incompleteDetails.when}</Typography>
                                        <Typography component="p" className="label">How?</Typography>
                                        <Typography component="p">{incompleteDetails.how}</Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={1}>
                                    <CardActions className="button delete">
                                        <Delete id={goal.id} setToggle={props.setToggle}/>
                                    </CardActions>
                                </Grid>
                            </Grid>
                        </Card>
                    </div>       
                )
            }))
        } else if(type === "caught") {
            return ( props.complete.map((goal) => {
                let completeDetails = goal.fields
                return (
                    <div className="goal-list">
                        <Card className="card">
                            <Grid container>
                                <Grid item xs={11}>
                                    <CardContent className="goal-item">
                                        <Typography component="p" className="label">What?</Typography>
                                        <Typography component="p">{completeDetails.what}</Typography>
                                        <Typography component="p" className="label">Amount?</Typography>
                                        <Typography component="p">{completeDetails.amount}</Typography>
                                        <Typography component="p" className="label">When?</Typography>
                                        <Typography component="p">{completeDetails.when}</Typography>
                                        <Typography component="p" className="label">How?</Typography>
                                        <Typography component="p">{completeDetails.how}</Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={1}>
                                    <CardActions className="button delete">
                                        <Delete id={goal.id} setToggle={props.setToggle}/>
                                    </CardActions>
                                </Grid>
                            </Grid>
                        </Card>
                    </div>       
                )
            }))
        }
    }
    return (
        <div>
            {displayTitle()}
            {displayList()}
        </div>
    )
}

export default RemovedGoals