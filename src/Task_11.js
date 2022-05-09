import './App.css';
import {useState} from 'react';


function Counter() {

    const [count, setCount] = useState(0)

    const onMinusClick = () => {
      setCount(count - 1)
    }

    const onPlusClick = () => {
      setCount(count + 1)
    }
    

    return(
        <div className='box'> 
          <button onClick={onMinusClick}>-</button>
          {count}
          <button onClick={onPlusClick}>+</button>
        </div>
    );
}

export default Counter;