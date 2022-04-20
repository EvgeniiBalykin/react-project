import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Task from './Task';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Task complete={true} text={'Написать список'} number={1}/>
    <Task complete={false} text={'Зачеркнуть первый вариант'} number={2}/>
    <Task complete={false} text={'Сделать вид, что очень занят работой'} number={3}/>
    <Task complete={false} number={4}/>
    <Task complete={false} text={'Придумать интересный пункт 4'} number={5}/>
  </React.StrictMode>
);

