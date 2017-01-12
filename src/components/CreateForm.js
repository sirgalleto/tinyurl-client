import React from 'react';

import TButton from './TButton';
import './CreateForm.css';

export default ({onShort}) => (
  <form className="CreateForm" onSubmit={onShort}>
    <input className="CreateForm-input" type="text"/>
    <TButton type="submit">Shorten</TButton>
  </form>
);
