import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ItalicText from './Italic';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItalicText text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} title='Cursive' color={'black'}/>
  </React.StrictMode>
);

