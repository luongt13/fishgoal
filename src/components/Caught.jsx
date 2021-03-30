//component
import Delete from "./Delete"
//styling
import {Card, CardContent, CardActions, Typography, Grid} from "@material-ui/core"
import "../App.css"
//display completed goals
function Caught(props) {
    const completeDetails = props.complete.fields
    return (
        <div className="goal-list other-list">
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
                            <Delete id={props.complete.id} setToggle={props.setToggle}/>
                      </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </div>       
    )
}
export default Caught