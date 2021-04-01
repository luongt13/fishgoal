import React from 'react'
import {useParams} from "react-router-dom"
//component
import Delete from "./Delete"
//styling
import {Card, CardContent, CardActions, Typography} from "@material-ui/core"
import "../App.css"
//show complete and incomplete goals
function RemovedGoals(props) {
    //use url to determine missed or caught goals
    let {type} = useParams()
    //display the title 
    function displayTitle() {
        if (type === "missed") {
            return <h2>Fish That Got Away</h2>
        } else if (type === "caught") {
            return <h2>Caught Fish</h2>
        }
    }
    //display the removed goal items 
    function displayList() {
        if(type === "missed") {
           return (props.incomplete.map((goal) => {
            let incompleteDetails = goal.fields
            return (
                <div className="goal-list">
                    <Card className="goal-container">
                        <CardContent className="goal-item">
                            <Typography variant="p" className="label">What?</Typography>
                            <Typography variant="p">{incompleteDetails.what}</Typography>
                            <Typography variant="p" className="label">Amount?</Typography>
                            <Typography variant="p">{incompleteDetails.amount}</Typography>
                            <Typography variant="p" className="label">When?</Typography>
                            <Typography variant="p">{incompleteDetails.when}</Typography>
                            <Typography variant="p" className="label">How?</Typography>
                            <Typography variant="p">{incompleteDetails.how}</Typography>
                        </CardContent>
                        <CardActions className="button delete">
                            <Delete id={goal.id} setToggle={props.setToggle}/>
                        </CardActions>
                    </Card>
                </div>       
               )
            }))
        } else if(type === "caught") {
            return (props.complete.map((goal) => {
                let completeDetails = goal.fields
                return (
                    <div className="goal-list">
                        <Card className="goal-container">
                            <CardContent className="goal-item">
                                <Typography variant="p" className="label">What?</Typography>
                                <Typography variant="p">{completeDetails.what}</Typography>
                                <Typography variant="p" className="label">Amount?</Typography>
                                <Typography variant="p">{completeDetails.amount}</Typography>
                                <Typography variant="p" className="label">When?</Typography>
                                <Typography variant="p">{completeDetails.when}</Typography>
                                <Typography variant="p" className="label">How?</Typography>
                                <Typography variant="p">{completeDetails.how}</Typography>
                            </CardContent>
                            <CardActions className="button delete">
                                <Delete id={goal.id} setToggle={props.setToggle}/>
                            </CardActions>
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