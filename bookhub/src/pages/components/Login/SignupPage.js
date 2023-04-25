import { useState } from "react";
import handleLogin from "./LoginFirebase";

export default function SignupPage(props) {
    let [invalidText, setText] = useState("");

    function getSubmit(e) {
        e.preventDefault();
        if (e.target[3].value !== e.target[4].value) {
            setText("Unmatched passwords!");
            return;
        }
        handleLogin(true, e.target[2].value, e.target[3].value, props.setCurrent, setText);
        return false;
    }

    return (
        <div>
            <h1>THANK YOU FOR CHOOSING BOOKHUB!</h1>
            <h2>LETS START WITH THE BASICS:</h2>
            <p>(all fields are required!)</p>

            <form onSubmit={getSubmit}>
                <div className="login-input-container">
                    <label>First Name</label>
                    <input className="login-input" type="text" minLength="3" ></input>
                </div>
                <div className="login-input-container">
                    <label>Age</label>
                    <input className="login-input" type="number" ></input>
                </div>
                <div className="login-input-container">
                    <label>Email</label>
                    <input className="login-input" type="text" minLength="3" required></input>
                </div>
                <div className="login-input-container">
                    <label>Password</label>
                    <input className="login-input" type="password" minLength="6" required></input>
                </div>

                <div className="login-input-container">
                    <label>Confirm Password</label>
                    <input className="login-input" type="password" minLength="6" required></input>
                </div>
                <br></br>
                <button type="submit">Create user</button>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* remove later!!! */}
            <h2>{invalidText}</h2>
            <button type = "button" onClick={()=>{props.back(1)}}>Guest Experience</button>
        </div>
    )
}