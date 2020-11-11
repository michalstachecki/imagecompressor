import React from "react";
import "./Anchor.css";

const Anchor = (props) => {
    const { className, fileName, hidden, link, label } = props;

    return(
        <a className={className} download={fileName} hidden={hidden} href={link}>{label}</a>
    );
}

export default Anchor;
