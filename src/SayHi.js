import './App.css';
import {useState} from 'react';


function SayHi() {

    const [loading, setLoading] = useState(false)
    const [greeting, setGreeting] = useState()

    const onBtnClick = () => {
        setTimeout(() => {
            sayHi()
        }, 3000) 

        setGreeting('')
        setLoading(true)
    }

    const sayHi = () => {
        setGreeting('Hello')
        setLoading(false)
    }

    return(
        <div className='box'> 
            <button onClick={onBtnClick}> Say Hi ! </button>
            <span> {greeting} </span>
            { loading &&
                <div className='loader'></div>
            }
        </div>
    );
}

export default SayHi;