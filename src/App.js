import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Dashboard, Chat, Account, Friends } from './pages'
import { LoginForm, RegisterForm } from './components'
import { io } from "socket.io-client";
import { updateSockets } from './actions';
import { useDispatch } from 'react-redux';
import './style.css'

function App() {
  const socket = io('http://localhost:3000', { autoConnect: false })
  const dispatch = useDispatch();
  socket.onAny((event, ...args) => {
    console.log(event, args);
  });
  socket.on("users", (users) => {
    users.forEach(user => console.log(user))
  });
  socket.on('user connected', user => console.log(user))
  const user_id = localStorage.getItem('user_id')
  if (user_id){
    socket.auth = { username: user_id };
    socket.connect();
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
          <Dashboard socket = {socket} />
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
