import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './Game';
import Toggle from './Toggle'
import ItalicText from './ItalicText';
import CyclicBtn from './CyclicBtn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game/>
  </React.StrictMode>
);

