import './App.css';
import { MdRepeat, MdRepeatOne } from "react-icons/md";
import React, { useState }  from 'react';


function CyclicBtn() {

  const [state, setState] = useState(0);
  const repeatArr = [
    <MdRepeat color="grey" size="2em" />,
    <MdRepeat color="#3667f7" size="2em"/>,
    <MdRepeatOne color="#3667f7" size="2em"/>
  ];

  const onMdRepeatClick = () => {
    state >= 2 ? setState(0) : setState(state + 1)
  };

  return <button onClick={onMdRepeatClick}>{repeatArr[state]}</button>;
}

export default CyclicBtn;