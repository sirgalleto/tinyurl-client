import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CreateForm from './components/CreateForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CreateForm onShort={this.shortLink.bind(this)}></CreateForm>
      </div>
    );
  }

  shortLink(e) {
    e.preventDefault();

    const link = e.target.querySelector('input').value;

    alert(link);
  }
}

export default App;
