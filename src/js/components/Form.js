import React, { Component } from 'react';


class Form extends React.Component{
  constructor(props) {
    super(props);

  }

//   handleChange = (event) => {
//
//     // this.setState({ [event.target.name]: event.target.value})
//     // console.log(this.state);
// }


 //  handleSubmit = (event) => {
 //    event.preventDefault();
 //    console.log(this.state);
 //    console.log('Stop');
 //
 //
 //   // this.props.handleSubmit({[event.target.name]: event.target.value})
 // }


  render() {
    return (
      <div>
        <h1>Loan Application</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input
            name='carPrice'
            type='number'
            min='0'
            placeholder="Car Price"
            onChange={this.props.handleChange}
            // required
            />
          <br />
          <input
            name='carMake'
            id="carMake"
            placeholder="Car Make"
            type="text"
            onChange={this.props.handleChange}
            // required
            />
          <br />
          <input
            name='carModel'
            id="carModel"
            placeholder="Car Model"
            type="text"
            onChange={this.props.handleChange}
            // required
            />
          <br />
          <input
            name='yearlyIncome'
            type='number'
            min='0'
            placeholder="Estimated Yearly income"
            onChange={this.props.handleChange}
            // required
            />
          <br />
          <input
            name='creditScore'
            type='number'
            min='0'
            placeholder="Estimated Credit Score"
            onChange={this.props.handleChange}
            // required
            />
          <br />
          <button type="submit"/>
        </form>
      </div>
    );
  };
}

export default Form;
