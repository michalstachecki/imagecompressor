import React from "react";
import "./Button.css";

class Button extends React.PureComponent {
    render() {
        const { click, hidden, label } = this.props;

        return(
            <button className="app-button" onClick={click} hidden={hidden}>{label}</button>
        );
    }
}

export default Button;
