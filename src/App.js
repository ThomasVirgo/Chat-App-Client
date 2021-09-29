import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Dashboard, Chat, Account, Friends } from './pages'
import { LoginForm, RegisterForm } from './components'
import { io } from "socket.io-client";
import './style.css'

function App() {
  const socket = io('http://localhost:3000')
  const user_id = localStorage.getItem('user_id')
  if (user_id){
    socket.user_id = user_id
    socket.emit('user login', Number(user_id))
  }
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <LoginForm socket = {socket} />
        </Route>
        <Route exact path="/register">
          <RegisterForm />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/friends">
          <Friends />
        </Route>
        <Route exact path="/chat">
          <Chat socket = {socket}/>
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
      </Switch>
    </>
  );
}

export default App;
