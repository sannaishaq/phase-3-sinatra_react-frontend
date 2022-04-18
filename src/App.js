import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import UserCard from './UserCard.js'

function App() {


const [users, setUsers] = useState([])
console.log("State of users:" , users)

useEffect(()=>{
fetch('http://localhost:9292/users')
.then(r => r.json())
.then(fetchedUsers => {console.log("fetchedUsers:" ,fetchedUsers)
setUsers(fetchedUsers)
})} ,
[])





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        {

          users.map((eachUser)=>{
            return(

              <UserCard eachUser={eachUser}
              key = {eachUser.id}/>
            )
          })

        }
      </header>
    </div>
  );
}

export default App;
