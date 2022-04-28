import './App.css';
import {useState} from 'react';

function ItalicText({text, title}) {

   const [isItalic, setState] = useState(false)
   const style = isItalic ? 'italic' : 'normal'
   const btnStyle = isItalic ? 'italic-on' : 'italic-off'
   const checkStyle = () => {

      setState(!isItalic)
}

   return(
      <div className='box'> 
      <span style={{fontStyle: style}}>{text}</span>  
      <button onClick={checkStyle} title={title} className={btnStyle}>I</button>
      </div>
   );
}

export default ItalicText;