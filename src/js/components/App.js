import React, { Component } from "react";
import ReactDOM from "react-dom";
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

// Grabbing the API message when bot approved for the loan
  componentDidMount() {
    fetch('http://localhost:8080/src/api/nonAprovalMessage.json')
      .then(response => response.json())
      .then(json => {
        this.setState({ message: json})
      })
  }

// handles submit of the form to update the state and choose whether approved or not
  loanAproved(props) {
    event.preventDefault();
    if (this.state.carPrice > this.state.yearlyIncome * 0.2 || this.state.creditScore < 600) {
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

// Handles the submit of the New Account page
  handleSubmitNewAccount(props) {
    event.preventDefault();
    console.log(this.state.passwordOne);
    if(this.state.passwordOne.length < 8) {
      console.log('short password');
    } else {
      console.log('good password');
    }

  }


  render() {
    return (
      <div>
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
