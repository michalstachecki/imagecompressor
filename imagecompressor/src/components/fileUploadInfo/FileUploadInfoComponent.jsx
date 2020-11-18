import "./FileUploadInfoComponent.css";
import React from "react";
import Button from "../common/button/Button";
import Anchor from "../common/anchor/Anchor";
import PropTypes from "prop-types";

const FileUploadInfoCompontent = (props) => {
    const { hidden, compressedFileLink, fileName, clearValues, compressionFailed } = props;

    return (
        <div hidden={hidden}>
            <Anchor className="fileLinkInfo" fileName={fileName} hidden={compressionFailed} link={compressedFileLink} label={"Download " + fileName} />
            <h2 hidden={!compressionFailed}>Error</h2>
            <br />
            <Button click={clearValues.bind(null)} hidden={false} label="Try again" />
        </div>
    )
}

FileUploadInfoCompontent.propTypes = {
    hidden: PropTypes.bool,
    compressedFileLink: PropTypes.string,
    fileName: PropTypes.string,
    clearValues: PropTypes.func.isRequired,
    compressionFailed: PropTypes.bool
}

export default FileUploadInfoCompontent;
