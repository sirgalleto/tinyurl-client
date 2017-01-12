import React from 'react';
import './Url.css';

export default ({name, short, clicks }) => {
  const copy = (e) => {
    console.log(e.target);
    alert('Copy!');
  };

  return (
    <div className="Url">
      <div className="Url-name">
        <a href={name}>{name}</a>
      </div>
      <div className="Url-short" onClick={copy}>{short}</div>
      <div className="Url-clicks">{clicks}</div>
    </div>
  );
};
