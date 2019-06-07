import React, { Component } from 'react';
import Registration from './components/Registration';
import UserInfo from './components/UserInfo';
import AllUsers from './components/AllUsers';

class App extends Component {
  render() {
    return (
      <div>
      <h2>My Express App</h2>  
      <Registration/>
      <UserInfo/>
      <AllUsers/>
      </div>
    )
  }
}

export default App;
