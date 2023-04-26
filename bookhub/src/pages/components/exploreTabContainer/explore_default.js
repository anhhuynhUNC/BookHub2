import { default_fetch } from "../../../utils/bookmatch";
import { useState, useEffect } from "react";
import RowContainer from "../atom/RowContainer";

export default function Explore_default(props) {
    if (props == undefined || props.data == undefined) return ;

    return (
        <>
            {props.data.map((val, i) => {
                return <div className={"rowContainer"} key = {i}>
                    <h3>{val.attr == undefined ? "" : val.attr}</h3>
                    <RowContainer cb = {props.cb} data={val.data} key={i}></RowContainer>
                    
                </div>
            })}
        </>
    )

}