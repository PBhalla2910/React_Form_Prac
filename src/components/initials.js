import React from "react";
import { Component } from "react";


class Initals extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        initials: 'Mr'
      };
    }

    myChangeHandler = (event) => {
        
        this.setState({
            initials:event.target.value
        });
      }
    render() {
      return (
        <form>
        Select Title:
        <select value={this.state.initials} onChange={this.myChangeHandler}>
          <option value="Mr.">Mr.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Ms.">Ms.</option>
        </select>
        </form>
      );
    }
  }

  export default Initals;