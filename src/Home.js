import React from 'react';
import fire from './config/fire';
import Navbar from './components/Navbar'

class Home extends React.Component {

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div style={{
          textAlign: 'center',
          fontSize: '30px'
          }}>
              <Navbar/>
        <h1>You Are Logged In</h1>
        <button onClick = {this.logout}>Logout</button>
      </div>
    )
  }
}

export default Home;