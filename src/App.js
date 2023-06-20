import React, { useEffect, useState } from 'react'
import Userform from './components/Userform';
import Task from './components/Task';
import axios from 'axios';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleUserAdded = () => {
    axios.get('http://localhost:5000/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  };

  return (
    <div className='main_container'>
      <Userform onAdded={handleUserAdded} />
      <Task users={users} />
    </div>
  );
}

export default App;