import { useEffect, useState } from "react"
import { addBookToUser, getData } from "../../../firebaseAPI/firebaseAPI"

export default function Bookshelf(props) {
    // use props.auth to check if user has logged in/ recently made account

    //testing variables for book add/ retrieval
    let [books, setBooks] = useState([2,3,4,5,6]);
    let [books2, setBooks2] = useState([2,3,4,5,6]);
    let [books3, setBooks3] = useState([2,3,4,5,6]);



    function GetCompleted(uid) {
        getData('/users/' + uid + '/completed_books', setBooks);
    }

    useEffect(() => {
        GetCompleted(props.uid);
        GetForLater(props.uid);
        GetLightReading(props.uid);
      }, []);

    function GetForLater(uid) {
        getData('/users/' + uid + '/forLater_books', setBooks2);
    }

    function GetLightReading(uid) {
        getData('/users/' + uid + '/lightReading', setBooks3);
    }



    function testAddBook(uid, name){
        addBookToUser(uid, name);
    }




    return (
        <div>
            {props.auth ? <h1>Your Bookshelves</h1> : <h1>You are not logged in</h1>}
            {/* <h1>{props.uid}</h1> */}
        
            <table>
  <thead>
    <tr>
      <th style={{fontSize: "2.0rem", padding: "0.5rem 1rem"}}>Completed</th>
      <th style={{fontSize: "2.0rem", padding: "0.5rem 1rem"}}>For Later</th>
      <th style={{fontSize: "2.0rem", padding: "0.5rem 1rem"}}>Light Reading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td onLoad={() => {GetCompleted(props.uid);}}> {books.map((key) => { 
                return (
                    <div> {key} </div>
                
                ) 
            })} </td>

      <td> <td onLoad={() => {GetForLater(props.uid);}}> {books2.map((key) => { 
                return (
                    <div> {key} </div>
                
                ) 
            })} </td></td>
      <td> <td onLoad={() => {GetLightReading(props.uid);}}> {books3.map((key) => { 
                return (
                    <div> {key} </div>
                
                ) 
            })} </td></td>
    </tr>

  </tbody>
</table>


    
            
  
           

            





            {/* testing function !!! */}
            {/* <button type="button" onClick={()=> {testAddBook(props.uid, "Fake Ah Book")}}>ADD BOOK</button>
            <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
            <button type="button" onClick={() => { GetCompleted(props.uid) }}>GET BOOK</button> */}
            <br></br>  <br></br>  <br></br>  <br></br>  <br></br>

{/*             
            {books.map((val) => { 
                return (
                    <div> {val}</div>
                ) 
            })} */}
        </div>
    )
}