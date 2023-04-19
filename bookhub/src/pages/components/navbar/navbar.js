import React from 'react'
import bookhubLogo from './bookhubLogo.svg'

export default function Navbar() {


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
                <h2 className={"ham"}> Profile and hamburger here</h2>
            </div>

        </div>

    )
}