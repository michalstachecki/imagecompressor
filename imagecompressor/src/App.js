import './App.css';
import React from "react";
import NotFoundComponent from './components/notfound/NotFoundComponent';
import FileUploadComponent from "./components/fileUpload/FileUploadComponent";
import ImageCompressionHistoryComponent from './components/imageCompressionHistory/ImageCompressionHistoryComponent';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MainPageComponent from './components/mainpage/MainPageComponent';
import MenuComponent from './components/menu/MenuComponent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <MenuComponent />
              <Switch>
                <Route exact path="/upload" component={FileUploadComponent} />
                <Route exact path="/history" component={ImageCompressionHistoryComponent} />
                <Route exact path="/" component={MainPageComponent} />
                <Route component={NotFoundComponent} />
              </Switch>
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
