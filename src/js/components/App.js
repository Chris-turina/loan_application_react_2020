import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from './Form';

class App extends Component {
  constructor() {
    super();

  }

  onFormSubmit(event) {
    console.log();
    // this.setState({newApplication: carPrice})
  }

  render() {
    return (
      <Form onFormSubmit={this.onFormSubmit.bind(this)} />
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
