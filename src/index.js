import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Box from './Task';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Box complete={true} text={'Написать список'} number={1}/>
    <Box complete={false} text={'Зачеркнуть первый вариант'} number={2}/>
    <Box complete={false} text={'Сделать вид, что очень занят работой'} number={3}/>
    <Box complete={false} number={4}/>
    <Box complete={false} text={'Придумать интересный пункт 4'} number={5}/>
  </React.StrictMode>
);

