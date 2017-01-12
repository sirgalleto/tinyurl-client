import React from 'react';

export default ({name, short, clicks }) => (
  <div>
    <a href={name}>{name}</a>
    <span>{short}</span>
    <span>{clicks}</span>
  </div>
)
