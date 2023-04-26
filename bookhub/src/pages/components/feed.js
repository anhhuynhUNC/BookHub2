import Navbar from "./navbar/navbar";
import TabHeader from "./tabHeader";
import Explore from "./tabs/exploreTab";
import Bookshelf from "./tabs/bookshelfTab";
import Account from "./tabs/accountTab";
import { useState, useEffect } from "react";
import { getBook, getData } from "../../firebaseAPI/firebaseAPI";

import { default_fetch } from "../../utils/bookmatch";
export default function Feed() {
    let [current, setCurrent] = useState(1);
    let [default_data, setDefaultData] = useState([]);
    //if not logged in just do top 5 genre

    //use effect load current selection of books
    useEffect(() => {
        default_fetch(setDefaultData);
    }, [])

    const page = () => {
        switch (current) {
            case 1:
                return <Explore default_data={default_data} cb={setCurrent}></Explore>
            case 2:
                return <Bookshelf></Bookshelf>
            case 3:
                return <Account></Account>
            default:
                return <div></div>
        }
    }

    return (
        <div className={"topContainer"}>
            <Navbar></Navbar>
            <div className={"main"}>
                <div className={"tabHeaderContainer"}>
                    <TabHeader setCurrent={setCurrent} current={current}></TabHeader>
                </div>
                <div className={"tabContainer"}>
                    {page()}
                    {getData()}
                </div>
            </div>


        </div>
    )
}

//1.

// Feed                                 var name = 1; {name + 1} //usestate
    //Explore       //login
        //Row
            //Book
                //Hover