import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Box from './Box';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='box'>
      <Box cssClass='large-box' lable="LARGE"/>
      <Box cssClass='medium-box' lable='MEDIUM'/>
      <Box cssClass='small-box' lable='SMALL'/>
    </div>
  </React.StrictMode>
);

