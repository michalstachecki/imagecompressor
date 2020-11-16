import React from "react";
import Button from "../common/button/Button";
import imageCompression from "browser-image-compression";
import FileUploadInfoCompontent from "../fileUploadInfo/FileUploadInfoComponent";
import * as updateImageCompressionHistoryActions from '../../actions/updateImageCompressionHistory';
import {connect} from "react-redux";
import "./FileUploadComponent.css";

class FileUploadCompontent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileInputId: "fileInputId",
            filesLength: 0,
            compressedFileLink: undefined,
            fileName: undefined,
            error: false,
            isCompressionStarted: false
        }
    }

    render() {
        const { fileInputId, filesLength, compressedFileLink, error, fileName, isCompressionStarted } = this.state;

        return (
            <div>
                <h1>Upload file</h1>
                <label htmlFor={fileInputId} hidden={isCompressionStarted}>{fileName ? fileName : "Select Image"}</label>
                <input placeholder="Choose file" className="fileInput" type="file" id={fileInputId} multiple={false} onChange={this.onFileUploaded} accept="image/*" hidden />
                <div hidden={isCompressionStarted}>
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
            isCompressionStarted: false
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
            isCompressionStarted: true
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

        imageCompression(originalImage, options).then(imageCompressionResult => {
            downloadLink = URL.createObjectURL(imageCompressionResult);
            this.setState({
                compressedFileLink: downloadLink,
                error: downloadLink ? false : true
            });

            const{ fileName } = this.state;
            const date = new Date().toLocaleString();
            this.props.updateImageCompressionHistory(fileName + " Date:" + date + "\n");
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

const mapStateToProps = state =>{
    return {...state};
  };
  
  const mapDispatchToProps = dispatch =>{
    return{
      updateImageCompressionHistory: data => dispatch(updateImageCompressionHistoryActions.updateImageCompressionHistory(data))
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(FileUploadCompontent);
