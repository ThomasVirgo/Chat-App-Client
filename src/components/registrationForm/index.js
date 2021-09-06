import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const sendDetailsToServer = () => {
    console.log(username, password, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      sendDetailsToServer();
      setUsername('');
      setPassword('');
      setConfirmPassword('');
    } else {
      console.log('problem');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="username-input">Please enter your username.</label>
        <input type="textfield" id="username-input" value={username} onChange={handleUsernameChange}></input>
        <label htmlFor="password-input">Please enter your password.</label>
        <input type="password" id="password-input" value={password} onChange={handlePasswordChange}></input>
        <label htmlFor="confirm-password-input">Please confirm your password.</label>
        <input type="password" id="confirm-password-input" value={confirmPassword} onChange={handleConfirmPasswordChange}></input>
        <input type="submit" value="submit" onClick={handleSubmitClick} />
      </form>
    </div>
  );
};

export default RegistrationForm;
