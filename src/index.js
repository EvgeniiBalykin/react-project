import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Text from './Text';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div className='nav-text'>
    <Text text ="Regular text"/>
    <Text text ="Huge header" fontSize={70}/>
    <Text text ="Danger notification" textColor={'red'}/>
    <Text text ="Underlined text" textDecoration={true}/>
  </div>
  </React.StrictMode>
);

