import Feed from "../feed"
import Bookshelf from "../tabs/bookshelfTab"

/**
 * hover atom component, when mouse enter range of book cover, display the information
 * @param {*} props 
 * @returns 
 */
export default function HoverAtom(props){
    function function1(){
        props.cb(2);

    }

    function login(){
    
    }
    return ( 
        <div style={props.style} className={"hoverInfo"}>
            {console.log(props)}
            <h4>Title: {props.name}<t><button style={{ width:"110px" ,height:"25px", marginLeft:"200px"}} onClick={() => {function1()}}> &lt; 3 </button></t></h4>
            <h4>Author: {props.authors === undefined ? "" : props.authors[0]}</h4>
            <p>Description: {props.description}</p>
            
        </div>
    )
}
//We need create a ref to current page, and send it to hover atom. So that hover knows what page its on and it is able to control what is showing and
//what tab to go to, from there we will be able to pass props to the bookshlef.