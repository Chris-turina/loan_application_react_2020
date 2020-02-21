import React, { Component } from 'react';


class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Loan Application</h1>
        <form>
          <input placeholder="Car Price"/>
          <br />
          <input placeholder="Car Make" type="text" />
          <br />
          <input placeholder="Car Model" type="text" />
          <br />
          <input placeholder="Estimated Yearly income" />
          <br />
          <input placeholder="Estimated Credit Score" />
          <br />
          <button />
        </form>
      </div>
    );
  }
}

export default Form;
