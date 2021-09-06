import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log(username, password)
  };

  return (
    <div>
      <form>
        <label htmlFor="username-input">Please enter your username.</label>
        <input type="textfield" id="username-input" value={username} onChange={handleUsernameChange}></input>
        <label htmlFor="password-input">Please enter your password.</label>
        <input type="password" id="password-input" value={password} onChange={handlePasswordChange}></input>
        <input type="submit" value="submit" onClick={handleSubmitClick} />
      </form>
    </div>
  );
};

export default LoginForm;