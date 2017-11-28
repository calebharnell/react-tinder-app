import React, {Component} from 'react';
import './App.css';
import Profile from './components/Profile';

const EditForms = ({firstName, lastName, imageURL, onChangeFirstName, onChangeLastName, onChangeImageURL}) => (
  <div>
    <label>
      First name:
      <input type="text" value={ firstName } onChange={ onChangeFirstName } />
    </label>
    <label>
      Last name:
      <input type="text" value={ lastName } onChange={ onChangeLastName } />
    </label>
    <label>
      Image URL:
      <input type="text" value={ imageURL } onChange={ onChangeImageURL } />
    </label>
  </div>
)

class App extends Component {

  // Set the initial state
  state = {
    firstName: 'Big',
    lastName: 'Steve',
    imageURL: 'https://randomuser.me/api/portraits/men/83.jpg',
    editable: false
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

  onChangeLastName = (event) => {
    console.log('Last name changed')
    const input = event.target;
    const newLastName = input.value;
    this.setState(prevState => ({
      lastName: newLastName
    }))
  }

  onChangeImageURL = (event) => {
    console.log('Image URL changed')
    const input = event.target;
    const newImageURL = input.value;
    this.setState(prevState => ({
      imageURL: newImageURL
    }))
  }

  editClicked = () => {
    // The user clicked the button!
    this.setState(prevState => ({
      editable: !prevState.editable
    }))
  }

  randomClicked = () => {
    fetch('https://randomuser.me/api/').then((results) => {
      return results.json()
    }).then((data) => {
      const randomFirstName = data.results[0].name.first;
      const randomLastName = data.results[0].name.last;
      const randomPicture = data.results[0].picture.large;
      this.setState({
        firstName: randomFirstName,
        lastName: randomLastName,
        imageURL: randomPicture
      })
    })
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
        <button onClick={ this.editClicked }>Edit</button>
        <button onClick={ this.randomClicked }>Random</button>
        <br /><br />
        {(this.state.editable) ?
          <EditForms
            firstName={firstName}
            lastName={lastName}
            imageURL={imageURL}
            onChangeFirstName={this.onChangeFirstName}
            onChangeLastName={this.onChangeLastName}
            onChangeImageURL={this.onChangeImageURL} /> : ""
        }
      </div>
    );
  }
}

export default App;
