import React, { Component } from 'react';


class Form extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1 className="form-title" data-testid="application-title">Loan Application</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input
            name='carPrice'
            type='number'
            min='0'
            placeholder="Enter the Car Price"
            onChange={this.props.handleChange}
            required
            />
          <br />
          <input
            name='carMake'
            placeholder="Enter the Make of the Car"
            type="text"
            onChange={this.props.handleChange}
            required
            />
          <br />
          <input
            name='carModel'
            placeholder="Enter the Model of the Car"
            type="text"
            onChange={this.props.handleChange}
            required
            />
          <br />
          <input
            name='yearlyIncome'
            type='number'
            min='0'
            length='40'
            placeholder="Estimated Yearly income"
            onChange={this.props.handleChange}
            required
            />
          <br />
          <input
            name='creditScore'
            type='number'
            min='300'
            max='850'
            placeholder="Estimated Credit Score"
            onChange={this.props.handleChange}
            required
            />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
}

export default Form;
