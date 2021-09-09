import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions';
import { useHistory } from 'react-router-dom';
import './style.css'

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const history = useHistory()
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  async function sendDetailsToServer() {
    try {
      const payload = {
        username,
        password,
        password_confirmation: confirmPassword,
      };
      const { data } = await axios.post('https://vibe-drf-api.herokuapp.com/users/register/', payload);
      if (data.username) {
        const response = await axios.post('https://vibe-drf-api.herokuapp.com/users/login/', { username, password });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', username)
        setShouldRedirect(true);
        dispatch(loginUser());
      }
    } catch (error) {
      console.log(error);
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
      {shouldRedirect && <Redirect to="/" />}
      <div className="login">
        <div className="login__content">
          {/* create a svg on figma with vibe in it? */}
          <div className="login__img"></div>
          <div className="login__forms">
            <form className="login__create" onSubmit={handleSubmitClick}>
              <h1 className="login__title">Create Account</h1>

              <div className="login__box">
                <i className="bx bxs-user-circle login__icon"></i>
                <input type="text" placeholder="Username" className="login__input" value={username} onChange={handleUsernameChange} />
              </div>

              <div className="login__box">
                <i className="bx bxs-lock login__icon"></i>
                <input type="password" placeholder="Password" className="login__input" value={password} onChange={handlePasswordChange} />
              </div>

              <div className="login__box">
                <i className="bx bxs-lock login__icon"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="login__input"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>

              <div className="password__warning">
                <p>Your password can’t be too similar to your other personal information. It must contain at least 8 characters.</p>
                <p>Your password can’t be a commonly used password. It can’t be entirely numeric.</p>
              </div>

              <input type="submit" value="Sign Up" className="login__button" />

              <div>
                <span className="login__account">Already have an Account?</span>
                <p className="login__signin" id="sign-up" onClick={()=>history.push("/login")}>
                Login
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
