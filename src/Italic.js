import './App.css';
import {useState} from 'react';


function ItalicText({text, title}) {

  const [state, setState] = useState(false)

  const style = state ? 'italic' : 'normal'

  const btnStyle = state ? 'italic-on' : 'italic-off'

  const checkStyle = () => {

    if (state) {
      setState(false)
    } else {
      setState(true)
    }
  }


    return(
        <div className='box'> 
          <span style={{fontStyle: style}}>{text}</span>  
          <button onClick={checkStyle} title={title} className={btnStyle}>I</button>
        </div>
    );
}

export default ItalicText;