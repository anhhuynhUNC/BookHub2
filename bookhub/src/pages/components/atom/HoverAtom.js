
import { addBookToUser, getData, addBookToCompleted, addBookToForLater, a, addBookToLightReading } from "../../../firebaseAPI/firebaseAPI"

export default function HoverAtom(props){



    return (
        <div style={props.style} className={"hoverInfo"}>
            <h4>Title: {props.name}<t>
                <button id="completed"style={{ width:"75px" ,height:"28px", marginLeft:"100px"}} onClick={() => {addBookToCompleted(props.uid, props.name);}}> Completed </button>
                <button id="completed"style={{ width:"75px" ,height:"28px", marginLeft:"175px"}} onClick={() => {addBookToForLater(props.uid, props.name)}}> For Later </button>
                <button id="completed"style={{ width:"75px" ,height:"28px", marginLeft:"250px"}} onClick={() => {addBookToLightReading(props.uid, props.name)}}> Light Reading </button>
            </t></h4>
            <h4>Author: {props.authors === undefined ? "" : props.authors[0]}</h4>
            <p>Description: {props.description}</p>
        </div>
    )
}
//uid is not defined