import React, { useState } from "react";
import Accordion from "./Components/Accordion/Accordion";
import Collapse from "./Components/Collapse/Collapse";
import DropDown from "./Components/DropDown/DropDown";
import Modal from "./Components/Modal/Modal";
import "./mcleod-reset.css"
import "./App.css"

const App = () => {
    const AccordionHeaders = ["Item 1", "Item 2", "Item 3"]    
    const AccordionP = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing. Pellentesque habitant morbi tristique senectus et",
        "At imperdiet dui accumsan sit amet nulla. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Commodo viverra maecenas accumsan lacus vel facilisis volutpat",
        "Nisi lacus sed viverra tellus. Urna et pharetra pharetra massa. Quam vulputate dignissim suspendisse in est ante. Donec ultrices tincidunt arcu non sodales neque sodales"
    ]

    const CollapseBtnName = ["Collapse"]
    const CollapseP = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nesciunt id repudiandae provident. Deserunt perferendis eum doloribus blanditiis aperiam, eveniet, ex soluta amet autem modi voluptas, veritatis saepe eos id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis autem dicta itaque fuga minima veritatis, similique laborum rerum, consectetur pariatur laboriosam excepturi aperiam esse? Omnis commodi cupiditate excepturi blanditiis sequi!"]

    const DropDownBtnName = ["DropDown"]
    const DropDownItems = ["Option1", "Option2", "Option3"]

    const modalBtn = ["Modal"]
    const modalMsgBody = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatem dolores maiores ut nihil facilis, quasi maxime harum, voluptatibus non deleniti impedit ipsum voluptatum repellendus, eaque asperiores ea sunt iste!"]
    const modalMsgHead = ["Lorem"]

    return (
        <div className="container mt-3">
            <div className="row">
                <section id="Accordion">
                    <hr className="col-10 offset-1 col-md-6 offset-md-3" />
                    <h1>Accordion</h1>
                    <hr className="col-10 offset-1 col-md-6 offset-md-3" />
                    <Accordion p= {AccordionP} headers = {AccordionHeaders} />
                </section>
                <section>
                <hr className="col-10 offset-1 col-md-6 offset-md-3" />
                    <h1>Collapse</h1>
                    <hr className="col-10 offset-1 col-md-6 offset-md-3" />
                    <Collapse BtnName = {CollapseBtnName} Paragraph = {CollapseP} />
                </section>
                <section>
                <hr className="col-10 offset-1 col-md-6 offset-md-3" />
                    <h1>Drop Down</h1>
                    <hr className="col-10 offset-1 col-md-6 offset-md-3" />
                    <DropDown BtnName={DropDownBtnName} Options={DropDownItems} />
                </section>
                <section className="mb-5">
                <hr className="col-10 offset-1 col-md-6 offset-md-3" />
                    <h1>Modal</h1>
                    <hr className="col-10 offset-1 col-md-6 offset-md-3" />
                    <Modal modalBtn={modalBtn} modalMsgBody={modalMsgBody} modalMsgHead={modalMsgHead} />
                </section>
            </div>
        </div>
    )
}

export default App;