import Delete from "./Delete"
import {Card, CardContent, CardActions, Typography, Grid} from "@material-ui/core"
//display completed goals
function Caught(props) {
    const completeDetails = props.complete.fields
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
                        {completeDetails.what}
                        </Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        <Typography component="p" className="label">
                        Amount?
                        </Typography>
                        <Typography component="p">
                        {completeDetails.amount}
                        </Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        <Typography component="p" className="label">
                        By when? 
                        </Typography>
                        <Typography component="p">
                        {completeDetails.when}
                        </Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        <Typography component="p" className="label">
                        How? 
                        </Typography>
                        <Typography component="p">
                        {completeDetails.how}
                        </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className="button">
                <Delete id={props.complete.id} setToggle={props.setToggle}/>
                </CardActions>
            </Card>
            
        </div>
    )
}

export default Caught
