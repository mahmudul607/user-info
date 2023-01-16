import { useEffect, useState } from 'react';
import logo from './all.jpg';
import './App.css';
import Count from './components/Count/Count';
import User from './components/User/User';
import data from './users/data.json';


function App() {
  const [users, setUsers] = useState([]);
  const [person, setPerson] = useState([]);

  useEffect(() => {

    setUsers(data)


  }, [])

  const addUser = (user) => {
    setPerson([...person, user]);
  }


  return (
    <div>
      <header >
        <img className='logo' src={logo} alt="" />

        <h2>Users: {users.length}</h2>
        <div className='userbody'>
          <div className='user-card'>
            {
              users.map(user => <User user={user} addUser={addUser} key={user.id}></User>)
            }

          </div>
          <div>
            <Count person={person}></Count>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
