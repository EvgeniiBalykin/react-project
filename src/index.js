import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Task_11';
import CounterC from './CounterC';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter/>
    <CounterC/>
  </React.StrictMode>
);

