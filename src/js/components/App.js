import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.css';
import Form from './Form';
import Disqualify from './Disqualify';
import NewAccount from './NewAccount';

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
      isLoaded: false,
      displayForm: true,
      passwordOne: '',
      passwordTwo: ''
    }
  }

Grabbing the API message when bot approved for the loan
  componentDidMount() {
    fetch('http://localhost:8080/src/api/nonAprovalMessage.json')
      .then(response => response.json())
      .then(json => {
        this.setState({ message: json})
      })
      if(this.state.carPrice > 1000000) {
        return response.status(400).send(err)

      }

  }

// handles submit of the form to update the state and choose whether approved or not
  loanAproved(props) {
    event.preventDefault();
    if(this.state.carPrice > 1000000) {
      console.log('over a $mil');

    } if (this.state.carPrice > this.state.yearlyIncome * 0.2 || this.state.creditScore < 600 && this.state.carPrice) {
      this.setState({
        ...this.state,
        displayForm: false,
        displayDisqualify: true
      })
       return console.log('no');
    } else {
      this.setState({
        ...this.state,
        displayForm: false,
        displayNewAccount: true
      })

      return console.log('yes');
    }
  }

// Detects when user changes state for the input forms
  onFormChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }


// Detects when the user changes the state for the Passwords
  handleValidation(event) {
    this.setState({ [event.target.name]: event.target.value})
    // console.log(this.state);
  }

//  handles the Creation of the new account and an attempt to verify that the passwords match up with 8 charaters log and a special charater/number
  handleSubmitNewAccount(props) {
    event.preventDefault();
    const pass = this.state.passwordOne
    const reg = /(?=.{8,})(?=.*[0-9]|[!@#$%^&*])/
    const test = reg.test(pass)
    if (test) {
      console.log('pass');
    } else {
      console.log('fail');
    }

  }


  render() {
    return (
      <div className="container">
      {this.state.displayForm && <Form
          handleSubmit={(this.loanAproved.bind(this))}
          handleChange={this.onFormChange.bind(this)}
        />
      }
      {this.state.displayDisqualify && <Disqualify
        props={this.state.message[0]}
        />
      }

      {this.state.displayNewAccount && < NewAccount
        handleValidation={this.handleValidation.bind(this)}
        handleSubmitNewAccount={this.handleSubmitNewAccount.bind(this)}
       />
       }
      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
