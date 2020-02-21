import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from './Form';

class App extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <Form />
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
