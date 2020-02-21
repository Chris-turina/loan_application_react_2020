import React, { Component } from 'react';


class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      carPrice: '',
      carMake: '',
      carModel: '',
      yearlyIncome: 0,
      creditScore: 0
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
    console.log(this.state);
}


  handleSubmit = (event) => {
   event.preventDefault();
   console.log(this.state);
 }


  render() {
    return (
      <div>
        <h1>Loan Application</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name='carPrice'
            id="carPrice"
            placeholder="Car Price"
            onChange={this.handleChange}
            required
            />
          <br />
          <input
            name='carMake'
            id="carMake"
            placeholder="Car Make"
            type="text"
            onChange={this.handleChange}
            required
            />
          <br />
          <input
            name='carModel'
            id="carModel"
            placeholder="Car Model"
            type="text"
            onChange={this.handleChange}
            required
            />
          <br />
          <input
            name='yearlyIncome'
            id="yearlyIncome"
            placeholder="Estimated Yearly income"
            onChange={this.handleChange}
            required
            />
          <br />
          <input
            name='creditScore'
            id="creditScore"
            placeholder="Estimated Credit Score"
            onChange={this.handleChange}
            required
            />
          <br />
          <button type="submit"/>
        </form>
      </div>
    );
  };
}

export default Form;
