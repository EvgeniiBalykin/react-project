import './App.css';
import React, {useState} from 'react';

function Game() {

  const [, setCount] = useState(0);

  const getRandomInt = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  function getRandomColor() {
    let x= getRandomInt(0, 255);
    let y = getRandomInt(0, 255);
    let z = getRandomInt(0, 255);
    return `rgb(${x},${y},${z})`
  }

  const top = getRandomInt(0, 900) + 'px'
  const left = getRandomInt(0, 900) + 'px'

  const color = getRandomColor()
  const styles = {
    background: color,
    top: top,
    left: left
  }


  const tap = () => {
    setCount(styles)
  }

  return <div className='game-container'>
    <div className='ball' style={styles} onClick={tap}></div>
    </div>
}

export default Game;
