import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CreateForm from './components/CreateForm';
import UrlList from './components/UrlList';

let urls = [
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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urls: urls
    };
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <CreateForm onShort={this.shortLink.bind(this)}></CreateForm>
        <UrlList urls={this.state.urls}></UrlList>
      </div>
    );
  }

  shortLink(e) {
    e.preventDefault();

    const link = e.target.querySelector('input').value;

    this.setState({
      urls: this.state.urls.concat({
        id: this.state.urls[this.state.urls.length - 1].id + 1,
        name: link,
        short: 'aaaaa',
        clicks: 20
      })
    });
  }
}

export default App;
