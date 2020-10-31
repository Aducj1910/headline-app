import React, { Component } from "react";
import NavBar from "./navBar";
import RealNewsCard from "./realNewsCard";
import StatsBar from "./statsBar";

class RealHeadline extends Component {
  getNewsCompany = () => {
    const companyList = [
      "CNN.jpg",
      "FOX.png",
      "MSNBC.png",
      "ABC.png",
      "WPO.png",
      "NYPOST.png",
      "RT.jpg",
    ];
    let myIndex = Math.floor(Math.random() * companyList.length);
    return companyList[myIndex];
  };

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
            <RealNewsCard
              realNewsHeadline={this.props.localReal}
              onMediaName={this.getNewsCompany}
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

export default RealHeadline;
