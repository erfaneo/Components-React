import React, { useState } from "react";
import "./DropDown.css"

const DropDown = ({Options, BtnName}) => {
    const onDrop = () => {
        document.querySelector(".drop").classList.add("dropActive")
        document.querySelector(".ulCntr").lastChild.lastChild.classList.add("d-none")
    }
    const unDrop = () => {
        document.querySelector(".drop").classList.remove("dropActive")
    }
    const list = Options.map(option => {
        return (
                <div key={`KEY=${option}`}>
                    <li className="px-3 py-2 mb-1">{option}</li>
                    <hr className="m-1" />
                </div>
            )
    })
    return (
        <div className="DropDownCntr" >
            <button onMouseOver={onDrop} onMouseLeave={unDrop} className="col-8 offset-2 col-md-6 offset-md-3 col-lg-2 offset-lg-5 border-0">{BtnName}</button>
            <div className="col-8 offset-2 col-md-6 offset-md-3 col-lg-2 offset-lg-5 drop">
                <ul onMouseOver={onDrop} onMouseLeave={unDrop}  className="ulCntr rounded">
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default DropDown;