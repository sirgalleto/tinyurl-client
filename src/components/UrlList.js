import React from 'react';

import Url from './Url';
import base from '../constants/base';
import './UrlList.css';

console.log(base);

export default ({urls = []}) => (
  <div className="UrlList">
    {urls.map(({id, name, short, clicks}) => (
      <Url key={id} name={name} short={`${base.SHORT_URL}/${short}`} clicks={clicks}/>
    ))}
  </div>
);
