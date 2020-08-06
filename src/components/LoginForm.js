import React from 'react';
import fire from '../config/fire';
import Navbar from './Navbar';

class Login extends React.Component {

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
          <Navbar/>
        <div>
          <div style={{fontSize: '30px'}}>Email</div>
          <input id="email" placeholder="Enter Email.." type="text" style={{fontSize: '22px', padding: '5px'}}/>
        </div>
        <div>
          <div style={{fontSize: '25px'}}>Password</div>
          <input id="password" placeholder="Enter Password.." type="text" style={{
            fontSize: '22px',
            padding: '5px'
        }}/>
        </div>
        <button style={{margin: '10px', fontSize: '23px'}} onClick={this.login}>Login</button>
        <button style={{margin: '10px', fontSize: '23px'}} onClick={this.signUp}>Sign Up</button>
      </div>
    )
  }
}

export default Login;