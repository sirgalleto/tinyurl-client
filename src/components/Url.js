import React, { Component } from 'react';
import Clipboard from 'clipboard';
import './Url.css';

export default class Url extends Component {
  componentDidMount() {
    new Clipboard(`#copy-${this.props.id}`, {
      text: () => {
        return this.props.short
      }
    });
  }
  render() {
    const { id, name, short, clicks } = this.props;

    return (
      <div className="Url">
        <div className="Url-name">
          <a href={name}>{name}</a>
        </div>
        <div className="Url-short">
          <spam>{short}</spam>
          <button className="Url-copy" id={`copy-${id}`}> copy</button>
        </div>
        <div className="Url-clicks">{clicks}</div>
      </div>
    );
  }
}
