import './App.css';
import data from './data.json'

function UserList() {

  const userName = data.map((item) => {
    return <div className='user'>
      <h3>{item.name.first}</h3>
      <h4>{item.name.last}</h4>
    </div>
    }
  ) 

  return <div className='users-list'>{userName}</div>
}

export default UserList;
