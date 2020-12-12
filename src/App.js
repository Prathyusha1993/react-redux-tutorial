//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Posts from './components/Posts'
import Postform from './components/Postform'
import {Provider} from 'react-redux'
import store from './store'

class App extends Component{
 state={};

  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>Welcome to React</h1>
          </header>
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;


// className="App-logo"
// className="App-title"