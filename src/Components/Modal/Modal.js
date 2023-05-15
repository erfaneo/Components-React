import React from "react";
import "./Modal.css"

const Modal = ({modalBtn, modalMsgBody, modalMsgHead}) => {
    const onModalBtn = () => {
        document.querySelector(".modalBg").classList.remove("d-none")
        document.querySelector(".modalCntr").classList.remove("UnmodalCntr")
    }
    const onCloseBtn= () => {
        document.querySelector(".modalBg").classList.add("d-none")
        document.querySelector(".modalCntr").classList.add("UnmodalCntr")
    }
    return (
        <div>
            <button onClick={onModalBtn} className="mb-3 col-8 offset-2 col-md-6 offset-md-3 col-lg-2 offset-lg-5">{modalBtn}</button>
            <div className="modalBg d-none"></div>
            <div className="modalCntr UnmodalCntr border border-2 rounded p-3 col-10 offset-1 col-md-6 offset-md-3 ">
                <h2 className="px-2">{modalMsgHead}</h2>
                <p className="px-2 py-1">{modalMsgBody}</p>
                <div className="d-flex flex-column flex-sm-row align-items-center mt-2">
                    <button className="mx-1 mt-2 mb-0">Learn More</button>
                    <button onClick={onCloseBtn} className="mx-3 mt-2 mb-0">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;