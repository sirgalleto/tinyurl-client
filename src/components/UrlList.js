import React from 'react';

import Url from './Url';
import base from '../constants/base';
import './UrlList.css';

export default ({urls = []}) => (
  <div className="UrlList">
    {urls.map(({id, name, short, clicks}) => (
      <Url key={id} id={id} name={name} short={`${base.SHORT_URL}/${short}`} clicks={clicks}/>
    ))}
  </div>
);
