import './App.css';
import React, {useState} from 'react';

function Game() {

  const [color, setColor] = useState('');
  const [top, setTop] = useState('')
  const [left, setLeft] = useState('')

  const getRandomInt = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  function getRandomColor() {
    const x= getRandomInt(0, 255);
    const y = getRandomInt(0, 255);
    const z = getRandomInt(0, 255);
    return `rgb(${x},${y},${z})`
  }

  const topInt = getRandomInt(0, 800) + 'px'
  const leftInt = getRandomInt(0, 800) + 'px'
  const colorInt = getRandomColor()

  const styles = {
    background: color,
    top: top,
    left: left
  }

  const tap = () => {
    setColor(colorInt)
    setLeft(leftInt)
    setTop(topInt)
  }

  return <div className='game-container'>
    <div className='ball' style={styles} onClick={tap}></div>
    </div>
}

export default Game;
