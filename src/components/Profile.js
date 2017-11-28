import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
        <div className="profile">
          <div>
            <img src={ this.props.imageURL } alt="User" />
          </div>
          <p>Name: { this.props.firstName } { this.props.lastName }</p>
        </div>
    );
  }
}

export default Profile;
