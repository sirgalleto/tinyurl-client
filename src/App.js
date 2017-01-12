import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CreateForm from './components/CreateForm';
import UrlList from './components/UrlList';

class App extends Component {
  constructor(props) {
    super(props);

    this.urls = [
      {
        id: 1,
        name: 'facebook.com',
        short: 'alssfz',
        clicks: 1
      },
      {
        id: 2,
        name: 'google.com',
        short: 'a24xloa',
        clicks: 20
      }
    ];
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <CreateForm onShort={this.shortLink.bind(this)}></CreateForm>
        <UrlList urls={this.urls}></UrlList>
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
