import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {isUserLogging} from '../../redux/user/user.action';
import {selectCurrentUser} from '../../redux/user/user.selector';

import "./header.style.scss";
class Header extends React.Component {

  loginHandle = () => {
    const {isUserLogging}= this.props;
    isUserLogging();
  }

  render() {
    const {currentUser} = this.props;
    console.log(currentUser);

    return (
      <div className="header">
        <div className="logo-container">
          <h4>84MEME</h4>
        </div>
        <div className="tag-container">
          <Link to="/">Some tags</Link>
          <Link to="/">Some tags</Link>
          <Link to="/">Some tags</Link>
          <Link to="/">Some tags</Link>
        </div>
        <div className="login-container">
    <button className="login-button" onClick={this.loginHandle}>{currentUser?'Log Out':'Log In'}</button>
          <button className="signup-button">{currentUser?'+Upload':'Sign Up'}</button>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispacth => ({
  isUserLogging: () => dispacth(isUserLogging()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


export default connect(mapStateToProps,mapDispatchToProps)(Header);
