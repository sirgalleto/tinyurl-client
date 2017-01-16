import React from 'react';

import Url from './Url';
import base from '../constants/base';
import './UrlList.css';

export default ({urls = []}) => (
  <div className="UrlList">
    {urls.map(({_id, name, short, clicks}) => (
      <Url key={_id} id={_id} name={name} short={`${base.SHORT_URL}/${short}`} clicks={clicks}/>
    ))}
  </div>
);
