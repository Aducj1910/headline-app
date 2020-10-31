import React, { Component } from "react";
import _ from "lodash";
import FakeNewsCard from "./fakeNewsCard";
import NavBar from "./navBar";
import StatsBar from "./statsBar";

class Headline extends Component {
  //col-xl m-1
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <div className="row">
          <div className="col-xl m-2">
            <button className="btn-static btn-danger btn-lg m-2">
              {this.props.userInput.companyName}
            </button>
            <h6 className="m-3">Money: {this.props.money}</h6>
          </div>
          <div className="col-xl m-2">
            <FakeNewsCard
              fakeNewsHeadline={this.props.displayFakeNews}
              onPublish={this.props.onPublish}
            />
          </div>
          <div className="col-xl m-2">
            <StatsBar
              military={this.props.military}
              entertainment={this.props.entertainment}
              political={this.props.political}
              culture={this.props.culture}
              economy={this.props.economy}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Headline;
