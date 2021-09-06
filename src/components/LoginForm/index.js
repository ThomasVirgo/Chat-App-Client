import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
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
      dispatch(loginUser());
    }
  }

  return (
    <>
      {shouldRedirect && <Redirect to="/account" />}
      <div className="login">
        <div className="login__content">
          {/* create a svg on figma with vibe in it? */}
          <div className="login__img"></div>
          <div className="login__forms">
            <form className="login__register" onSubmit={handleSubmitClick}>
              <h1 className="login__title">Sign In</h1>

              <div className="login__box">
                <i className="bx bxs-user-circle login__icon"></i>
                <input type="text" placeholder="Username" className="login__input" value={username} onChange={handleUsernameChange} />
              </div>

              <div className="login__box">
                <i className="bx bxs-lock login__icon"></i>
                <input type="password" placeholder="Password" className="login__input" value={password} onChange={handlePasswordChange} />
              </div>

              <input type="submit" value="Sign In" className="login__button" />

              <div>
                <span className="login__account">Don't have an Account?</span>
                <span className="login__signin" id="sign-up">
                  Sign Up
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
