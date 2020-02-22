import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from './Form';
import Disqualify from './Disqualify';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carPrice: 0,
      carMake: '',
      carModel: '',
      yearlyIncome: 0,
      creditScore: 0,
      message:[],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/src/api/nonAprovalMessage.json')
      .then(response => response.json())
      .then(json => {
        this.setState({ message: json})
        console.log(this.state.message);
      })
  }



  loanAproved(props) {
    event.preventDefault();
    if (this.state.carPrice > this.state.yearlyIncome * 0.2 || this.state.creditScore < 600) {
       return console.log('no');
    } else {
      return console.log('yes');
    }

  }

  onFormChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    return (
      <div>
      <Form
        handleSubmit={(this.loanAproved.bind(this))}
        handleChange={this.onFormChange.bind(this)}
      />
      <Disqualify />
      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
