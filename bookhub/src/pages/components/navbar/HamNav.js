import Hamburger from "./hamburger";
import { useState } from 'react';

export default function HamNav(){

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return(
        <div>
            <div className="navigation">
                <ul>
                    <li>Account Info</li>
                    <li>Log Out</li>
                </ul>
                    <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen}/>
                    </div>
            </div>


            <style jsx>{`

                .navigation{
                    width: 100%;
                    height: 50px;
                    
                }
                
                
                



                
                  
                    .hamburger{
                        z-index: 6;
                    }

                
                   
                    .navigation ul{
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        background-color: blue;
                        height: 100vh;
                        width: 50vw;
                        position: fixed;
                        

                    }
                } 
                
            `}</style>
        </div>
    )

}