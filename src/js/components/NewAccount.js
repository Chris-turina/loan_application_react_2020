import React, { Component } from 'react';

class NewAccount extends React.Component{
  constructor(props) {
    super(props);

  }


  render(){
    return (
      <div>
        <h1>Create a New Account</h1>
        <form onSubmit={this.props.handleSubmitNewAccount}>
          <input type="email" placeholder="UserName"></input>
          <br />
          <input
            name="passwordOne"
            type="text"
            placeholder="password"
            onChange={this.props.handleValidation}></input>
          <br/>
          <input
            name="passwordTwo"
            type="text"
            placeholder="password"
            onChange={this.props.handleValidation}></input>
          <br/>
          <button>Create New Account</button>
        </form>
      </div>
    )
  }
}

export default NewAccount;
