import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from '../modules/user'
import GetUsers from '../GET/getUsers';
import PropExemple from '../GET/getUser';
import CreateUser from '../POST/createUser';
import GetPosts from '../GET/getPosts';
import CreatePost from '../POST/createPost';


import '@fontsource/inter';
import { IPost } from '../modules/post';


function AppUser() {

  const [usersUpdated, setUsersUpdated] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  const [postsUpdated, setPostsUpdated] = useState(false);
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);
  

  const updateUserList = () => {
      setUsersUpdated(!usersUpdated);
  };

  const updatePostList = () => {
    setPostsUpdated(!postsUpdated);
};

  return (
    <div className="container" >
      <div className="title">
        <h1 >Seminario 8</h1>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="component">
        <h2>Get Users Component</h2>
        <GetUsers usersUpdated={usersUpdated} setSelectedUser={setSelectedUser}/>
      </div>
      <div className="component">
        <h2>Prop Example</h2>
        <PropExemple user={selectedUser} />
      </div>
      <div className="component">
        <h2>Create User Component</h2>
        <CreateUser updateUserList={updateUserList} />
      </div>
      <div className="component">
        <h2>Get Posts Component</h2>
        <GetPosts postsUpdated={postsUpdated} setSelectedPost={setSelectedPost}/>
      </div>
      <div className="component">
        <h2>Create Post Component</h2>
        <CreatePost updatePostList={updatePostList} />
      </div>
    </div>
);

}

export default AppUser;
