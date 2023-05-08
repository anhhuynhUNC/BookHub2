import Row from "./rowAtom"
import { getRowList, getRowList2 } from "../../../../utils/atomUtil"
import { useState } from "react";

export default function RowContainer(props) {
    console.log(props.data);
    const [car, setCar] = useState(0);
    let data = []
    if (props.isExplore) data = getRowList(props.data, props.dislikes);
    else data = getRowList2(props.data);

    const [hasReachEnd, setHasReachEnd] = useState(false);

    function handleRight() {
        if (car == data.length - 1) {
            setCar(0);
            setHasReachEnd(true);
        } else {
            setCar(car + 1);
        }
    }

    function handleLeft() {
        if (car == 0) {
            setCar(data.length - 1);
        } else {
            setCar(car - 1);
        }
    }

    function showInBeginning() {
        if (car == 0 && hasReachEnd) {
            return true;
        }
        if (car == 0 && !hasReachEnd) {
            return false;
        }
        return true;
    }

    function lessThanSix() {
        console.log(data);
        if (data.length === 0 || data.length <= 1) {
            return true;
        } else {
            return false;
        }
    }


    return (
        <>
            {showInBeginning() ? <svg className="leftbutton" onClick={handleLeft} xmlns="http://www.w3.org/2000/svg" width="61" height="82" viewBox="0 0 61 82" fill="none">
                <path d="M30.5 61.5L15.25 41L30.5 20.5" stroke="#475800" stroke-width="2" />
                <path d="M45.75 61.5L30.5 41L45.75 20.5" stroke="#475800" stroke-width="2" />
            </svg> : <></>}
            <div className={"row"}>
                <Row isExplore={props.isExplore} data={data[car]} uid={props.uid} auth={props.auth}></Row>
            </div>
          {/*   {lessThanSix() ? <></> : <button className="rightbutton" onClick={handleRight}>{'>>'}</button>} */}
            {lessThanSix() ? <></> : <svg className="rightbutton" onClick={handleRight} xmlns="http://www.w3.org/2000/svg" width="61" height="82" viewBox="0 0 61 82" fill="none">
                <path d="M30.5 61.5L45.75 41L30.5 20.5" stroke="#475800" stroke-width="2" />
                <path d="M15.25 61.5L30.5 41L15.25 20.5" stroke="#475800" stroke-width="2" />
            </svg>}
        </>
    )
}