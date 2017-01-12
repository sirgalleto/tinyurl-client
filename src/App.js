import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CreateForm from './components/CreateForm';
import PublicUrlList from './containers/PublicUrlList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CreateForm onShort={this.shortLink.bind(this)}></CreateForm>
        <PublicUrlList></PublicUrlList>
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
