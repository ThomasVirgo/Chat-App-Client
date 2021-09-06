import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  async function sendDetailsToServer(){
    try {
      const payload = {
        username,
        password,
        password_confirmation: confirmPassword
      };
      const {data} = await axios.post('http://localhost:8000/users/register/', payload);
      if (data.username){
        const response = await axios.post('http://localhost:8000/users/login/', {username, password})
        localStorage.setItem('token', response.data.token)
        setShouldRedirect(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  

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
    <>
    {shouldRedirect && <Redirect to='/account'/>}
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
    </>
  );
};

export default RegistrationForm;
