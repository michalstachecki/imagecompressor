import './App.css';
import React from "react";
import FileUploadComponent from "./components/fileUpload/FileUploadComponent";
import ImageCompressionHistoryComponent from './components/imageCompressionHistory/ImageCompressionHistoryComponent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Image Compressor App!</h1>
            <FileUploadComponent />
            <ImageCompressionHistoryComponent />
        </header>
      </div>
    );
  }
}

export default App;
