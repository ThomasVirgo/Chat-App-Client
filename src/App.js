import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Dashboard, Chat, Account, Friends } from './pages'
import { LoginForm, RegisterForm } from './components'
import { io } from "socket.io-client";
import { initUsers, updateUsers, removeUser } from './actions';
import { useDispatch} from 'react-redux';
import './style.css'

function App() {
  const socket = io('http://localhost:3000', { autoConnect: false })
  const dispatch = useDispatch();

  //SOCKET EVENTS
  socket.onAny((event, ...args) => {
    console.log(event, args);
  });

  socket.on("users", (users) => {
    users.forEach(user => console.log(user))
    dispatch(initUsers(users))
  });

  socket.on('user connected', (user) => {
    console.log('user connected: ', user)
    dispatch(updateUsers(user))
  })

  socket.on('user disconnected', (user) => {
    console.log('user disconnected: ', user);
    dispatch(removeUser(user))
  })


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
          <Friends socket={socket}/>
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
