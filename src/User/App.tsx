import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GetUsers from '../GET/getUser';
import CreateUser from '../POST/createUser';
import '@fontsource/inter';


function AppUser() {

  const [usersUpdated, setUsersUpdated] = useState(false);

  const updateUserList = () => {
      setUsersUpdated(!usersUpdated);
  };

  return (
    <div className="container" >
      <div className="title">
        <h1 >Seminario 8</h1>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="component">
        <h2>Get Users Component</h2>
        <GetUsers usersUpdated={usersUpdated} />
      </div>
      <div className="component">
        <h2>Create User Component</h2>
        <CreateUser updateUserList={updateUserList} />
      </div>
    </div>
);

}

export default AppUser;
