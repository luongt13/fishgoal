import React from 'react'
import Delete from "../Delete"
import {Card, CardContent, CardActions, Typography, Grid} from "@material-ui/core"
import "../App.css"

function GoalCard(props) {
    console.log(props)
    return (
        <div >
            hello
            {/* <Card className="card">
                <Grid container>
                    <Grid item xs={11}>
                        <CardContent className="goal-item">
                            <Typography component="p" className="label">What?</Typography>
                            <Typography component="p">{props.details.what}</Typography>
                            <Typography component="p" className="label">Amount?</Typography>
                            <Typography component="p">{props.details.amount}</Typography>
                            <Typography component="p" className="label">When?</Typography>
                            <Typography component="p">{props.details.when}</Typography>
                            <Typography component="p" className="label">How?</Typography>
                            <Typography component="p">{props.details.how}</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={1}>
                        <CardActions className="button delete">
                            <Delete id={props.id} setToggle={props.setToggle}/>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card> */}
        </div>       
    )
}


export default GoalCard
