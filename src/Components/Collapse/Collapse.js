import React, { useState } from "react";
import "./Collapse.css"

const Collapse = ({BtnName, Paragraph}) => {
    const onBtnClick = () => {
        const cntr = document.querySelector(".collapseCntr")
        cntr.classList.toggle("collapseCntrActive")
    }
    return (
        <div>
            <div>
                <button onClick={onBtnClick} className="col-8 offset-2 col-md-6 offset-md-3 col-lg-2 offset-lg-5 border-0 mb-3">{BtnName}</button>
            </div>
            <div className={`collapseCntr mb-3`}>
                <div className="border border-2 rounded">
                    <p className="px-3">{Paragraph}</p>
                </div>
            </div>
        </div>
    )
}

export default Collapse;