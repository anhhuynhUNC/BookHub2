/**
 * hover atom component, when mouse enter range of book cover, display the information
 * @param {*} props 
 * @returns 
 */
export default function HoverAtom(props){

    return (
        <div style={props.style} className={"hoverInfo"}>
            <h4>Title: {props.name}</h4>
            <h4>Author: {props.authors === undefined ? "" : props.authors[0]}</h4>
            <p>Description: {props.description}</p>
        </div>
    )
}