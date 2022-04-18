import './App.css';
import {useState} from 'react';


function Counter() {

    const [count, setCount] = useState('❌')

    const check = () => {
        if(count === '✔️'){
          setCount('❌')
        } else {
          setCount('✔️')
        }
    }

    return(
        <div className='box'> 
          <span onClick={check}>{count}</span>  
        </div>
    );
}

export default Counter;