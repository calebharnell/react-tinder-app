import React, {Component} from 'react';
import './App.css';
import Profile from './components/Profile';

const InputForm = ({firstName, lastName, imageURL, onChange}) => (
  <form>
    First name:
    <input type="text" name="firstName" value={firstName} onChange={onChange} />
    Last name:
    <input type="text" name="lastName" value={lastName} onChange={onChange} />
    Image URL:
    <input type="text" name="ImageURL" value={imageURL} onChange={onChange} />
  </form>
)

class App extends Component {

  // Set the initial state
  state = {
    firstName: 'Big',
    lastName: 'Steve',
    imageURL: 'https://randomuser.me/api/portraits/men/83.jpg',
    editable: false
  }

  onChange = (event) => {
    const input = event.target;
    this.setState(prevState => ({
      [input.name]: input.value
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
          <InputForm
            firstName={firstName}
            lastName={lastName}
            imageURL={imageURL}
            onChange={this.onChange} /> : ""
        }
      </div>
    );
  }
}

export default App;
