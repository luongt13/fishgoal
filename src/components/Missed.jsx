import Delete from "./Delete"
import {Card, CardContent, Typography} from "@material-ui/core"
import "../App.css"
//display incomplete goals
function Missed(props) {
    const incompleteDetails = props.incomplete.fields
    return (
        <div className="goal-item">
            <Card className="card">
                <CardContent>
                    <Typography component="p">
                        What? {incompleteDetails.what}
                    </Typography>
                    <Typography component="p">
                        Amount? {incompleteDetails.amount}
                    </Typography>
                    <Typography component="p">
                        By when? {incompleteDetails.when}
                    </Typography>
                    <Typography component="p">
                        How? {incompleteDetails.how}
                    </Typography>
                    <Delete id={props.incomplete.id} setToggle={props.setToggle}/>
                </CardContent>
            </Card>
        </div>
    )
}

export default Missed
