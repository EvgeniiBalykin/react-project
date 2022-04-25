import './App.css';
import React, {useState} from 'react';

function Game() {

  const [count, setCount] = useState(0);

  function getRandomPosition(max) {
     return Math.floor(Math.random(10) * max);
  }

  const position = getRandomPosition(800)

  function getRandomColor(max) {
    return Math.floor(Math.random(400) * max);
  }

  const color = getRandomColor(600)

  const styles = {
    background: 'rgb' + '(' + 370 + ',' + color + ',' + position + ')',
    width: '50px',
    height: '50px', 
    border: '2px solid red',
    borderRadius: '50%',
    position: 'absolute',
    top: color + 'px',
    left: position + 'px'
  }

  const tap = () => {
    setCount(position)

    if (styles.right) {
      styles.left = styles.right
    } else {
      styles.right = styles.left
    }
  }



  console.log(styles.background)
  return <div style={styles} onClick={tap}></div>
}

export default Game;
