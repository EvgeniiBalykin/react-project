import './TimePicker.css';
import {useState, useEffect} from 'react';


function TimePicker() {

  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)


  useEffect(() => {
    if(hour === 24){
      setHour(0)
    } 
    else if (hour < 0) {
      setHour(23)
    }
  }, [hour])

  useEffect(() => {
    if(minute === 60){
      setMinute(0)
      setHour(hour + 1)
    } else if (minute < 0 ) {
      setMinute(59)
      setHour(hour - 1)
    } 
  }, [minute])

    return(
      <div className='container'>
          <div className='time'>
            <span>{hour.toString().padStart(2, "0")}</span>
            <span>:</span>
            <span>{minute.toString().padStart(2, "0")}</span>
          </div>
          <div className='btn-time'>
            <div>
            <button onClick={() => setHour((hour) => hour - 1)}> - </button>
            <button onClick={() => setHour((hour) => hour + 1)}> + </button>
            </div>
            <div>
            <button onClick={() => setMinute((minute) => minute - 1)}> - </button>
            <button onClick={() => setMinute((minute) => minute + 1)}> + </button>
            </div>
          </div>
    </div>
    );
}

export default TimePicker;