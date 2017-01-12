import React from 'react';
import Url from './Url';

export default ({urls = []}) => (
  <div>
    {urls.map(({id, name, short, clicks}) => (
      <Url key={id} name={name} short={short} clicks={clicks}/>
    ))}
  </div>
);
