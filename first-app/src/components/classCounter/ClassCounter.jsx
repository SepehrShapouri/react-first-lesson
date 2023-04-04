import React, { Component } from "react";
class ClassCounter extends Component {
  state = {
    name: "",
    count: 0,
  };
  changeHandler = (e) => {
    this.setState({ name: e.target.value });
  };
  clickHandler = (e) => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <input type={"text"} onBlur={(e) => this.changeHandler(e)}></input>
        <h1>{this.state.name}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={(e) => this.clickHandler(e)}>click me</button>
      </div>
    );
  }
}

export default ClassCounter;
