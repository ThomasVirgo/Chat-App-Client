import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    sendDetailsToServer();
  };

  async function sendDetailsToServer() {
    const payload = { username, password };
    const { data } = await axios.post('http://localhost:8000/users/login/', payload);
    console.log(data.token);
    if (data.token) {
      localStorage.setItem('token', data.token);
      setShouldRedirect(true);
    }
  }

  return (
    <>
      {shouldRedirect && <Redirect to="/account" />}
      <div>
        <form>
          <label htmlFor="username-input">Please enter your username.</label>
          <input type="textfield" id="username-input" value={username} onChange={handleUsernameChange}></input>
          <label htmlFor="password-input">Please enter your password.</label>
          <input type="password" id="password-input" value={password} onChange={handlePasswordChange}></input>
          <input type="submit" value="submit" onClick={handleSubmitClick} />
        </form>
      </div>
    </>
  );
};

export default LoginForm;
