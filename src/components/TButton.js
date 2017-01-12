import React from 'react';
import './TButton.css';

export default (props) => (
    <button className="TButton" {...props}>
      {props.children}
    </button>
);
