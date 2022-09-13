import React, { useEffect, useState } from 'react';
import AddUser from './AddUser';
import './UsersList'
import UsersList from './UsersList';


function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(jsonResponse => {
        setUsers(jsonResponse);
      })
  }, []);

  const addUserFunc = (newUser) => {
    newUser.id = users.length + 1;
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        id: newUser.id,
        name: newUser.name,
        username: newUser.username
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(jsonResponseNewUser => {
        setUsers([...users, jsonResponseNewUser])
      });
  }

  const deleteUserFunc = (user) => {
    const userId = user.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(jsonResponseDeletedUser => {
        const updatedUsers = users.filter((user) => user.id != jsonResponseDeletedUser.id)
        setUsers(updatedUsers)
      });
  }

  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className='row'>
        <div className='col'>
          <h2>Add User</h2>
          <AddUser addUserFunc={addUserFunc} />
        </div>
        <div className='col'>
          <h2>View Users</h2>
          <UsersList users={users} deleteUserFunc={deleteUserFunc} />
        </div>
      </div>
    </div>
  );
}

export default App;
