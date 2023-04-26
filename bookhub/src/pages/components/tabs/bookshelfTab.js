import { useState } from "react"
import { addBookToUser, getData } from "../../../firebaseAPI/firebaseAPI"

export default function Bookshelf(props) {
    // use props.auth to check if user has logged in/ recently made account

    //testing variables for book add/ retrieval
    let [books, setBooks] = useState([2,3,4,5,6]);

    function testGetBook(uid) {
        getData('/users/' + uid + '/liked_books', setBooks);
    }

    function testAddBook(uid, name){
        addBookToUser(uid, name);
    }
    return (
        <div>
            {props.auth ? <h1>IS AUTH</h1> : <h1>NOT AUTHENTICATED</h1>}
            <h1>{props.uid}</h1>
            <h1>
                Bookshelf content here
            </h1>
            {/* testing function !!! */}
            <button type="button" onClick={()=> {testAddBook(props.uid, "Fake Ah Book")}}>ADD BOOK</button>
            <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
            <button type="button" onClick={() => { testGetBook(props.uid) }}>GET BOOK</button>
            <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
            {books.map((val) => { 
                return (
                    <div> {val}</div>
                ) 
            })}
        </div>
    )
}