import React from 'react'
import {useParams} from "react-router-dom"
//component
import Delete from "./Delete"
//styling
import {Card, CardContent, CardActions, Typography} from "@material-ui/core"
import "../App.css"
//show complete and incomplete goals
function RemovedGoals(props) {
    //bring to top when renders
    window.scrollTo(0,0)
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
           return (props.incomplete.map((goal, index) => {
            let incompleteDetails = goal.fields
            return (
                <div key={index} className="goal-list">
                    <Card className="goal-container">
                        <CardContent className="goal-item">
                            <Typography variant="body1" className="label">What?</Typography>
                            <Typography variant="body2">{incompleteDetails.what}</Typography>
                            <Typography variant="body1" className="label">Amount?</Typography>
                            <Typography variant="body2">{incompleteDetails.amount}</Typography>
                            <Typography variant="body1" className="label">When?</Typography>
                            <Typography variant="body2">{incompleteDetails.when}</Typography>
                            <Typography variant="body1" className="label">How?</Typography>
                            <Typography variant="body2">{incompleteDetails.how}</Typography>
                        </CardContent>
                        <CardActions className="button delete">
                            <Delete key={goal.id} id={goal.id} setToggle={props.setToggle}/>
                        </CardActions>
                    </Card>
                </div>       
               )
            }))
        } else if(type === "caught") {
            return (props.complete.map((goal, index) => {
                let completeDetails = goal.fields
                return (
                    <div key={index} className="goal-list">
                        <Card className="goal-container">
                            <CardContent className="goal-item">
                                <Typography variant="body1" className="label">What?</Typography>
                                <Typography variant="body2">{completeDetails.what}</Typography>
                                <Typography variant="body1" className="label">Amount?</Typography>
                                <Typography variant="body2">{completeDetails.amount}</Typography>
                                <Typography variant="body1" className="label">When?</Typography>
                                <Typography variant="body2">{completeDetails.when}</Typography>
                                <Typography variant="body1" className="label">How?</Typography>
                                <Typography variant="body2">{completeDetails.how}</Typography>
                            </CardContent>
                            <CardActions className="button delete">
                                <Delete key={goal.id} id={goal.id} setToggle={props.setToggle}/>
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