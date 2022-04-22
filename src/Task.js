import './App.css';
import { MdRepeat, MdRepeatOne } from "react-icons/md";
import React, { useState }  from 'react';


function MuseButton() {

  const [state, setState] = useState(0);
  const repeatArr = [
    <MdRepeat color="grey" size="5em" />,
    <MdRepeat color="#3667f7" size="5em"/>,
    <MdRepeatOne color="#3667f7" size="5em"/>
  ];

  const onMdRepeatClick = () => {
    state >= 2 ? setState(0) : setState(state + 1)
  };

    return <button onClick={onMdRepeatClick}>{repeatArr[state]}</button>;
}

export default MuseButton;