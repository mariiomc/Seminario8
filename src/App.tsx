import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GetUsers from './GET/getUser';
import CreateUser from './POST/createUser';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [usersUpdated, setUsersUpdated] = useState(false);

  const updateUserList = () => {
      setUsersUpdated(!usersUpdated);
  };

  return (
    <div>
        <GetUsers usersUpdated={usersUpdated} />
        <CreateUser updateUserList={updateUserList} />
    </div>
);

}

export default App;
