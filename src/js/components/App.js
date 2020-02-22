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

  loanAproved(props) {
    event.preventDefault();
    console.log('sweet');
    console.log(this.state);
    if (this.state.carPrice < this.state.yearlyIncome * 0.2) {
       return console.log('yes');
    } else {
      return console.log('no');
    }

  }

  onFormChange(event) {
    event.preventDefault();
    console.log("hello");
    this.setState({ [event.target.name]: event.target.value})
    console.log(this.state);
  }

  render() {
    return (
      <Form
        handleSubmit={(this.loanAproved.bind(this))}
        handleChange={this.onFormChange.bind(this)}
      />
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
