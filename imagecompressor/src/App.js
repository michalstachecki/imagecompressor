import './App.css';
import React from "react";
import FileUploadComponent from "./components/fileUpload/FileUploadComponent";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Image Compressor App!</h1>
          <FileUploadComponent />
        </header>
      </div>
    );
  }
}

export default App;
