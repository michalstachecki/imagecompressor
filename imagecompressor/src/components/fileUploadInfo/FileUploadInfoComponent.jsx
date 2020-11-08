import "./FileUploadInfoComponent.css";
import React from "react";

class FileUploadInfoCompontent extends React.PureComponent {
    render() {
        const { hidden, compressedFileLink, fileName, clearValues, error } = this.props;

        return (
            <div hidden={hidden}>
                <a className="fileLinkInfo" download={fileName} hidden={error} href={compressedFileLink}>Compressed file link</a>
                <h2 hidden={!error}>Error</h2>
                <br/>
                <button onClick={clearValues.bind(null)}>Try again</button>
            </div>
        )
    }
}

export default FileUploadInfoCompontent;
