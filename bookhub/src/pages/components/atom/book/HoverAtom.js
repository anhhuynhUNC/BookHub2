
import { addBookToUser, getData, addBookToCompleted, addBookToForLater, a, addBookToLightReading } from "../../../../firebaseAPI/firebaseAPI"

export default function HoverAtom(props) {

    return (
        <div style={props.style} className={"hoverInfo"}>
            <h4>Title: {props.name}
                <button id="completed" style={{ width: "75px", fontFamily: "Rockwell", fontSize: "10px", height: "28px", marginLeft: "100px" }} onClick={() => { addBookToCompleted(props.uid, props.name, props.auth); }}> Completed </button>
                <button id="completed" style={{ width: "75px", fontFamily: "Rockwell", fontSize: "10px", height: "28px", marginLeft: "175px" }} onClick={() => { addBookToForLater(props.uid, props.name, props.auth) }}> For Later </button>
                <button id="completed" style={{ width: "75px", fontFamily: "Rockwell", fontSize: "10px", height: "28px", marginLeft: "250px" }} onClick={() => { addBookToLightReading(props.uid, props.name, props.auth) }}> Light Reading </button>
            </h4>
            <h4>Author: {props.authors === undefined ? "" : props.authors[0]}</h4>
            <p>Description: {props.description}</p>
        </div>
    )
}
//uid is not defined