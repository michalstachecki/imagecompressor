import React from "react";
import "./Button.css";

const Button = (props) => {
    const { click, hidden, label } = props;

    return(
        <button className="app-button" onClick={click} hidden={hidden}>{label}</button>
    );
}

export default Button;
