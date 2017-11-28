import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';

class App extends Component {

  // Set the initial state
  state = {
    firstName: 'Big',
    lastName: 'Steve',
    imageURL: 'https://randomuser.me/api/portraits/men/83.jpg'
  }

  // When first name changes
  onChangeFirstName = (event) => {
    console.log('First name changed')
    const input = event.target;
    const newFirstName = input.value;
    this.setState(prevState => ({
      firstName: newFirstName
    }))
  }

  render() {

    // grab values from state
    let { firstName, lastName, imageURL } = this.state;

    return (
      <div className="App">
        <Profile
          firstName={ firstName }
          lastName={ lastName }
          imageURL={ imageURL } />

        <label>
          First name:
          <input type="text" value={ firstName } onChange={ this.onChangeFirstName } />
        </label>

      </div>
    );
  }
}

export default App;
