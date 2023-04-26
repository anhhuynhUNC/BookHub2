import Navbar from "../components/navbar/navbar";
import TabHeader from "../components/tabHeader";
import Explore from "../components/tabs/exploreTab";
import Bookshelf from "../components/tabs/bookshelfTab";
import Account from "../components/tabs/accountTab";
import { useState, useEffect } from "react";
import { getBook, getData } from "../../firebaseAPI/firebaseAPI";
import { updateFromSignup } from "./loginHelper";
import GuestNavbar from "../components/guest_navbar/guest_navbar";
import { default_fetch } from "../../utils/bookmatch";
import SignupPage from "../components/Login/SignupPage";
export default function Feed() {
    let [current, setCurrent] = useState(1);
    let [default_data, setDefaultData] = useState([]);
    let [auth, setAuth] = useState(false);
    let [uid, setUID] = useState("DEF");
    //if not logged in just do top 5 genre

    //use effect load current selection of books
    useEffect(() => {
        default_fetch(setDefaultData);
    }, [])

    const page = () => {
        switch (current) {
            case 1:
                return <Explore default_data={default_data}></Explore>
            case 2:
                return <Bookshelf auth={auth} uid={uid}></Bookshelf>
            case 3:
                return <Account></Account>
            case 4:
                return <SignupPage back={setCurrent} setCurrent={() => { updateFromSignup(setCurrent, setAuth) }} setUID={setUID}></SignupPage>
            default:
                return <div></div>
        }
    }

    return ( //here need to check if someone is logged in, display guest navbar if not
        <div className={"topContainer"}>
            {/* login navbar with toggle to signup page */}
            {(!auth && current !== 4) ?
                <GuestNavbar setAuth={setAuth} setCurrent={setCurrent} setUID={setUID}></GuestNavbar>
                : <Navbar setAuth={setAuth} setCurrent={setCurrent}></Navbar>}
            <div className={"main"}>
                <div className={"tabHeaderContainer"}>
                    {current !== 4 ? <TabHeader setCurrent={setCurrent} current={current}></TabHeader> : <></>}
                </div>
                <div className={"tabContainer"}>
                    {page()}
                </div>
            </div>


        </div>
    )
}