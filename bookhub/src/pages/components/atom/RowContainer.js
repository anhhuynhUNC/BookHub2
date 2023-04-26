import Row from "./rowAtom"
import { getRowList } from "../../../utils/atomUtil"
import { useState } from "react";

export default function RowContainer(props) { 
    console.log(props.data);
    const [car, setCar] = useState(0);
    let data = getRowList(props.data);
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

    function showInBeginning(){
        if(car == 0 && hasReachEnd){
            return true;
        }
        if (car == 0 && !hasReachEnd){
            return false;
        }
        return true;
    }

    return (
        <>
            {showInBeginning() ? <button onClick={handleLeft}>prev</button> : <></>}
            <div className={"row"}>
            <Row cb ={props.cb} data={data[car]}></Row>
            </div>
            <button onClick={handleRight}>next</button>
        </>
    )
}