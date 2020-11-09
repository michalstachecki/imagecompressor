import React from "react";
import Button from "../common/Button";
import imageCompression from "browser-image-compression";
import FileUploadInfoCompontent from "../fileUploadInfo/FileUploadInfoComponent";

class FileUploadCompontent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileInputId: "fileInputId",
            filesLength: 0,
            compressedFileLink: undefined,
            fileName: undefined,
            error: false,
            isCompresStarted: false
        }
    }

    render() {
        const { fileInputId, filesLength, compressedFileLink, error, fileName, isCompresStarted } = this.state;

        return (
            <div>
                <h1>Upload file</h1>
                <input type="file" id={fileInputId} multiple={false} onChange={this.onFileUploaded} accept="image/*" hidden={isCompresStarted} />
                <div hidden={isCompresStarted}>
                    <Button click={this.clearFiles} label="Clear values" hidden={!filesLength} />
                    <Button click={this.compress} label="Compress" hidden={!filesLength} />
                </div>
                <FileUploadInfoCompontent hidden={!compressedFileLink} compressedFileLink={compressedFileLink} fileName={fileName} clearValues={this.clearFiles} error={error} />
            </div>
        )
    }

    onFileUploaded = () => {
        const fileInput = this.getFileInput();
        if(!fileInput) {
            return;
        }

        const file = fileInput.files[0];
        this.setState({
            filesLength: 1,
            originalImage: file,
            fileName: file.name
        });
    }

    clearFiles = () => {
        const fileInput = this.getFileInput();
        if (!fileInput) {
            return;
        }

        fileInput.value = "";
        this.setState({
            filesLength: 0,
            originalImage: undefined,
            fileName: undefined,
            compressedFileLink: undefined,
            isCompresStarted: false
        });
    }

    compress = () => {
        const fileInput = this.getFileInput();
        if (!fileInput) {
            this.setState({
                error: true
            });
        }

        this.setState({
            isCompresStarted: true
        });

        const { originalImage } = this.state;
        const options = {
            maxSizeMB: 5,
            maxWidthOrHeight: 2880,
            useWebWorker: true
        };

        let downloadLink = null;

        if (options.maxSizeMB >= originalImage.size / 1024) {
            alert("Image is too small and cannot be compressed!");
            this.setState({
                error: true
            })
            return;
        }

        let output;
        imageCompression(originalImage, options).then(x => {
            output = x;
            downloadLink = URL.createObjectURL(output);
            this.setState({
                compressedFileLink: downloadLink,
                error: downloadLink ? false : true
            });
        });
    }

    getFileInput = () => {
        const { fileInputId } = this.state;
        const fileInput = document.getElementById(fileInputId);
        if (!fileInput) {
            alert("Error! Cannot find element in HTML");
            return null;
        }
        return fileInput;
    }
}

export default FileUploadCompontent;
