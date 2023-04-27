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
            {showInBeginning() ? <leftbutton onClick={handleLeft}>{'<<'}</leftbutton> : <></>}
            <div className={"row"}>
            <Row data={data[car]} uid={props.uid}></Row>
            </div>
            <rightbutton onClick={handleRight}>{'>>'}</rightbutton>
        </>
    )
}