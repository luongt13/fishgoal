//component
import Delete from "../Delete"
//styling
import {Card, CardContent, Typography, CardActions, Grid} from "@material-ui/core"
import "../App.css"
//display incomplete goals
function Missed(props) {
    const incompleteDetails = props.incomplete.fields
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
                            <Delete id={props.incomplete.id} setToggle={props.setToggle}/>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}
export default Missed
