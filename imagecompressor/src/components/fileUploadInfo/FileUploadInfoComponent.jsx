import "./FileUploadInfoComponent.css";
import React from "react";
import Button from "../common/Button";

const FileUploadInfoCompontent = (props) => {
    const { hidden, compressedFileLink, fileName, clearValues, error } = props;

    return (       
        <div hidden={hidden}>
            <a className="fileLinkInfo" download={fileName} hidden={error} href={compressedFileLink}>Compressed file link</a>
            <h2 hidden={!error}>Error</h2>
            <br/>
            <Button click={clearValues.bind(null)} hidden={false} label="Try again" />
        </div>
    )
}

export default FileUploadInfoCompontent;
