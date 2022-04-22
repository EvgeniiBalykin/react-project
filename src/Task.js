import './App.css';

function Box({complete, number, text}) {
  const textStyle = complete ? {textDecoration: 'line-through'} : {textDecoration: 'none'}


  return <div className='task'>
    <input type="checkbox" checked={complete}/>
    <span>{number}.</span>
    <p style={textStyle}>{text}</p>
  </div>
}

export default Box;
