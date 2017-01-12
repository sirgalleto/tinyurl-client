import React, { Component } from 'react';

import TButton from './TButton';
import './CreateForm.css';

export default class CreateForm extends Component {
  render() {
    return (
      <form className="CreateForm" onSubmit={this.shortUrl.bind(this)}>
        <input className="CreateForm-input" type="text"/>
        <TButton type="submit">Shorten</TButton>
      </form>
    );
  }

  shortUrl(e) {
    e.preventDefault();
    this.props.onShort(e.target.querySelector('input').value);
  }
}
