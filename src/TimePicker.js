import './TimePicker.css';
import {useState, useEffect} from 'react';


function TimePicker() {

  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)

    return(
        <div className='container'> 
          <div className='hour'>
            <button>-</button>
            {hour}
            <button>+</button>
          </div>
          <div className='minute'>
            <button>-</button>
            {minute}
            <button>+</button>
          </div>
        </div>
    );
}

export default TimePicker;