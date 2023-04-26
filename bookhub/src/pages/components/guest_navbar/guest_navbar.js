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
            handleLogin(false, e.target[0].value, e.target[1].value, props.setAuth, "","",setText, props.setUID);
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
                <div className={"login"}>
                    <form onSubmit={getSubmit}>
                    
                        <label>Username:</label>
                        <input className={"login-input"} type="text" id="username" name="username" required />
                        <label>Password:</label>
                        <input className={"login-input"} type="password" id="password" name="password" required />
                        {invalidText}
                        <button className='button' type="submit">Login</button>
                        
                    
                    </form>
                </div>
                

                <button className={"button"} type="button" onClick={() => { props.setCurrent(4) }}>Sign Up!</button>
            </div>


            <style jsx>{`

                .login {
                    display: flex;
                    position: relative;
                    width: 500px;
                }

                .button {
                    width: 60px;
                    height: fit-content;
                    color: #452B14;
                    background-color: #DFD5D0;
                    border: none;
                    margin-top: 1px;
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