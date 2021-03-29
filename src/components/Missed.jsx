import Delete from "./Delete"
import {Card, CardContent, Typography, CardActions, Grid} from "@material-ui/core"
import "../App.css"
//display incomplete goals
function Missed(props) {
    const incompleteDetails = props.incomplete.fields
    return (
        <div className="goal-list other-list">
            <Card className="card">
                <CardContent className="goal-item">
                    <Grid container>
                        <Grid item xs={6} sm={3}>
                        <Typography component="p" className="label">
                            What? 
                        </Typography>
                        <Typography component="p">
                            {incompleteDetails.what}
                        </Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        <Typography component="p" className="label">
                        Amount? 
                        </Typography>
                        <Typography component="p">
                        {incompleteDetails.amount}
                        </Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        <Typography component="p" className="label">
                            By when?
                        </Typography>
                        <Typography component="p">
                            {incompleteDetails.when}
                        </Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        <Typography component="p" className="label">
                            How?
                        </Typography>
                        <Typography component="p">
                           {incompleteDetails.how}
                        </Typography>
                        </Grid>
                    </Grid>
                    </CardContent>
                    <CardActions className="button">
                        <Delete id={props.incomplete.id} setToggle={props.setToggle}/>
                    </CardActions>
            </Card>
        </div>
    )
}

export default Missed
