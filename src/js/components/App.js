import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carPrice: 0,
      carMake: '',
      carModel: '',
      yearlyIncome: 0,
      creditScore: 0
    }
  }

  loanAproved() {

  }

  onFormChange(event) {
    this.setState({ [event.target.name]: event.target.value})
    console.log(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <Form handleChange={this.onFormChange.bind(this)} />
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
