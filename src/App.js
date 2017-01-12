import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import PublicUrlList from './containers/PublicUrlList';
import Shortener from './containers/Shortener';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Shortener/>
        <PublicUrlList></PublicUrlList>
      </div>
    );
  }
}

export default App;
