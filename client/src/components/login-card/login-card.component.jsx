import React from "react";
import {connect} from 'react-redux';
import {loginWithGoogleStart} from '../../redux/user/user.action';

import CustomButton from '../custom-button/custom-button.component';

import "./login-card.style.scss";

const Login = props => {

  const loginWithGoogle = () => {
    const {loginWithGoogleStart} = props;
    loginWithGoogleStart();
  }

  const submitHandle = (event) => {
    event.preventDefault();
  }

  return (
    <div className={`login ${props.className}`}>
      <form onSubmit={submitHandle}> 
        <div className="login-title">
          <h2>Login</h2>
          <p>Welcome back</p>
        </div>
        <label>Enter your email address</label>
        <input type="email" name="email" placeholder="example@email.com" />
        <hr />
        <label>Enter your password</label>
        <input type="password" placeholder="•••••••••" />
        <div className="login-options">
          <CustomButton>Login</CustomButton>
          <CustomButton onClick={loginWithGoogle}>Google Login</CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  loginWithGoogleStart: () => dispatch(loginWithGoogleStart())
})

export default connect(null,mapDispatchToProps)(Login);
