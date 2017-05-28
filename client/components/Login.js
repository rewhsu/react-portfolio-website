import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        Username:
        <input type="text"></input>
        <br />
        Password:
        <input type="password"></input>
      </div>
    )
  }
}
