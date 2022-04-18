import './App.css';

function Box({cssClass, lable}) {
  return (<div className={cssClass}>{lable}</div>)
}

export default Box;
