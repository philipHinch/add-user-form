import './App.css';
import Form from './components/Form';
import Modal from './components/Modal';
import UserList from './components/UserList';
import { useState } from 'react'


function App() {

  const [error, setError] = useState()

  const [userList, setUserList] = useState('')

  const addUser = (username, age, id) => {
    setUserList([...userList, { username, age, id }])
  }


  return (
    <div className="App">
      {error && <Modal title={error.title} message={error.message} setError={setError} />}
      <Form addUser={addUser} setError={setError} userList={userList} />
      {userList.length !== 0 && <UserList userList={userList} setUserList={setUserList} />}
    </div>
  );
}

export default App;
