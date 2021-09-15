import React from "react";
import { Component } from "react";
import Initals from "./initials";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       fname: '',
       lname:''
       };
  }
  
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    
    return (
      <form>
      <h1>Hello {this.state.fname}!!</h1>
      <Initals/>
      <label>Enter your FirstName:</label>
      <input type='text' name='fname'onChange={this.myChangeHandler}/>
      <br/>
      <label>Enter your LastName:</label>
      <input type='text' name='lname'onChange={this.myChangeHandler}/>
      <h3>It's good to have you {this.state.lname}</h3>

      </form>
    );
  }
}



export default MyForm;