import React from 'react'
import bookhubLogo from './bookhubLogo.svg'
import { useState } from 'react';
import handleLogin from "../Login/LoginFirebase";

export default function GuestNavbar(props) {
    let [invalidText, setText] = useState("");

    function getSubmit(e) {
        e.preventDefault();
        console.log(e);
        try {
            handleLogin(false, e.target[1].value, e.target[2].value, props.setAuth, setText);
        } 
        catch (e){
            setText(e);
        }
        return false;
    }

    return ( //need firebase for sign in and need onboarding for sign up
        <div className={"navbar"}>
            <div className={"logoDiv"}>
                <img src={bookhubLogo} alt="Logo" />
            </div>
            <div className={"title"}>
                <h1>
                    BookHub
                </h1>
            </div>
            <div className={"signin_or_up"}>
                <form onSubmit={getSubmit}>
                    <button className='button' type="submit">Login</button>
                    <label>Username:</label>
                    <input className={"login-input"} type="text" id="username" name="username" required />
                    <label>Password:</label>
                    <input className={"login-input"} type="password" id="password" name="password" required />
                    {invalidText}
                </form>

                <button className={"button"} type="button" onClick={() => { props.setCurrent(4) }}>Sign Up!</button>
            </div>


            <style jsx>{`

                .button {
                    width: 60px;
                    height: fit-content;
                    color: #452B14;
                    background-color: #DFD5D0;
                    border: none;
                }

                .signin_or_up {
                    top: 0;
                    position: absolute;
                    right: 5px;
                    z-index: 3;
                }
                
                input {
                    margin-right: 3px;
                    margin-left: 1px;
                }

                form {
                    margin-bottom: 1%;
                }

                .navbar {
                    height: 45px;
                }
                
            `}</style>
        </div>



    )
}