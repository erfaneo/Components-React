import React from "react";
import "./Accordion.css"

const Accordion = ({headers, p}) => {
    const onHClick = (e) => {
        e.target.children[0].classList.toggle("bi-caret-down")
        e.target.children[0].classList.toggle("bi-caret-up")
        e.target.nextSibling.children[0].classList.toggle("p-inactive")
        e.target.nextSibling.classList.toggle("pCntrActive")

    }
    const header = headers.map((item, i) => {
        return (
            <div key={i}>
                <h2 onClick={onHClick} className="AccordionH h4 px-2 py-1">{item}<i className="bi bi-caret-down"></i></h2>
                <div className="pCntr">
                    <p className="p-inactive px-2">{p[i]}</p>
                </div>
            </div>
            )
    })

        return (
        <div>
            {header}
        </div>
    )
}

export default Accordion;