import '../App.css'
import React, { useState } from "react";

function Dropdown({ options }) {
    // State that shows the selected options
    const [selected, setSelected] = useState("");

    // State that toggles the dropdown list
    const [showlist, setShowlist] = useState(false);

    // Function which changes the "selected" state according to the user selection,
    // And also hides the dropdown list once user had selected the list item
    const showSelectedOption = (e) => {
        setSelected(e.target.innerText);
        setShowlist(false);
    }
    // listItems variable contain the list of items within li tag and along with appropriate click handler
    const listItem = options.map((item) => {
        return (
            <li onClick={showSelectedOption}> {item} </li>
        );
    })

    return (
        <div className="dropdown">
            {/* Dropdown list */}
            {/* on mouse hover we set the showlist of dropdown items as true */}
            <div onMouseEnter={() => setShowlist(true)} className="dropdown-menu">
                <span>Select an Option </span>
                <span>⬇</span>

            </div>

            {/* Dropdown items which is shows only when showlist is true */}
            {showlist ? <ul className="menu-items">{listItem} </ul> : ""}

            {/* For the first time when the user enters the site then selected is black so noting is displayed */}
            {selected !== "" ? <h4 className="select-option">Selected option is: {selected}</h4> : ""}
        </div>
    );
}

export default Dropdown;