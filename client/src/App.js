import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserIsLogging } from "./redux/user/user.selector";
import { checkUserSession } from './redux/user/user.action'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home.component';
import Header from './components/header/header.component';
import Login from './components/login-card/login-card.component';

class App extends React.Component {

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }


  render() {
    const { isLogging } = this.props;

    return (
      <div className="App">
        <Router>
          <Header />
          <Login className={!isLogging ? '' : 'isLogging'} />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLogging: selectUserIsLogging
});

const mapDispatchToProps = dispacth => ({
  checkUserSession: () => dispacth(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
