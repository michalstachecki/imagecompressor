import "./FileUploadInfoComponent.css";
import React from "react";
import Button from "../common/button/Button";
import Anchor from "../common/anchor/Anchor";

const FileUploadInfoCompontent = (props) => {
    const { hidden, compressedFileLink, fileName, clearValues, error } = props;

    return (       
        <div hidden={hidden}>
            <Anchor className="fileLinkInfo" fileName={fileName} hidden={error} link={compressedFileLink} label={"Download " + fileName} />
            <h2 hidden={!error}>Error</h2>
            <br/>
            <Button click={clearValues.bind(null)} hidden={false} label="Try again" />
        </div>
    )
}

export default FileUploadInfoCompontent;
