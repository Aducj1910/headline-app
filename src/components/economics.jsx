import React, { Component } from "react";
import NavBar from "./navBar";

class Economics extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <header>
          <NavBar></NavBar>
        </header>
        <div className="row">
          <div className="col-1">{this.props.economy}</div>
        </div>
      </div>
    );
  }
}

export default Economics;
