import React from 'react'
import bookhubLogo from './bookhubLogo.svg'

export default function GuestNavbar() {
    
    
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
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username"/>
                    <label for="lname">Password:</label>
                    <input type="text" id="password" name="password"/>
                    <input className={"button"} type="submit" value="Log In"></input>
                    </form>

                <button className={"button"} type="button">Sign Up!</button>
        </div>
            

            <style jsx>{`

                .button {
                    width: 60px;
                    height: fit-content;
                    color: #452B14;
                    background-color: #DFD5D0;
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