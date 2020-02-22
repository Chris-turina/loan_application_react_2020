import React from 'react';

const NewAccount =() => {
  return (
    <div>
      <h1>Create a New Account</h1>
      <form>
        <input type="email" placeholder="UserName"></input>
        <br />
        <input type="text" placeholder="password"></input>
        <br/>
        <input type="text" placeholder="password"></input>
        <br/>
        <button>Create New Account</button>
      </form>
    </div>
  )
}

export default NewAccount;
