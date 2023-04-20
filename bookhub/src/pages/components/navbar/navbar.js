import React from 'react'
import bookhubLogo from './bookhubLogo.svg'
import Hamburger from './HamNav'

export default function Navbar() {

    // var hamburger = React.createClass({ 
    //     getInitialState : function() {
    //        return { showMenu : false };
    //     },
    //     onClick : function() {
    //        this.setState({ showMenu : !this.showMenu} );
    //     },
    //     render : function() {
    //         if(this.state.showMe) { 
    //             return (<div> one div </div>);
    //         } else { 
    //             return (< img src={hamburgerLogo} onClick={this.onClick} />);
    //         } 
    //     }
    // })
    
    
    return (
        <div className={"navbar"}>
            <div className={"logoDiv"}>
            <img src={bookhubLogo} alt="Logo" />
            </div>
            <div className={"title"}>
                <h1>
                    BookHub
                </h1>
            </div>
            <div className={"hamDiv"}>
                <img src={bookhubLogo} alt="this will be profile" /> 
                < Hamburger />
            </div>

            <style jsx>{`
                .hamDiv{
                    display: flex;
                }
                
            `}</style>
        </div>

        

    )
}