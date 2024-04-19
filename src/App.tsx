import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetUsers from './GET/getUser';
import CreateUser from './POST/createUser';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.StrictMode>
      <GetUsers />
      {/* <CreateUser /> */}
    </React.StrictMode>
    
  );
}

export default App;
