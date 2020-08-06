import React, { Component } from 'react';
import fire from '../config/fire'
import LoginForm from './LoginForm.js';
import Home from '../Home.js';
//import Navbar from './Navbar'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.user ? ( <Home /> ) : ( <LoginForm /> ) }
      </div>
    );
  }
}

export default Login;