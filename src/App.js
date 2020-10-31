import React, { Component } from "react";
import Headline from "./components/headline";
import { getFakeNews } from "./data/fakeNewsService";
import { getGoodRealNews, getNeutralRealNews } from "./data/realNewsService";
import { getUserInput } from "./data/userInputInfo";
import _, { times } from "lodash";
import { Route, Switch } from "react-router-dom";
import Economics from "./components/economics";
import RealHeadline from "./components/realNews";
import ReactNotification from "react-notifications-component";
import { store } from "react-notifications-component";
import "animate.css";
import "react-notifications-component/dist/theme.css";

class App extends Component {
  state = {
    userInput: getUserInput(),
    military: 100,
    entertainment: 100,
    political: 100,
    culture: 100,
    economy: 100,
    money: 30000,
    fakeNews: getFakeNews(),
    goodRealNews: getGoodRealNews(),
    neutralRealNews: getNeutralRealNews(),
    realNewsSwitch: null,
    displayFakeNews: [],
    displayRealNews: [],
  };

  componentDidMount() {
    this.generateFakeChoice(this.state.money);
    this.generateRealNews();
  }

  generateFakeChoice = () => {
    let filteredFakeChoice = this.state.fakeNews.filter(
      (f) => f.price < 100000000000
    );
    filteredFakeChoice = _.shuffle(filteredFakeChoice);

    if (filteredFakeChoice.length > 3) {
      filteredFakeChoice.length = 3;
    }

    this.setState({ displayFakeNews: filteredFakeChoice });
  };

  generateRealNews = () => {
    let displayRealNews = [];
    if (
      this.state.military < 80 ||
      this.state.entertainment < 80 ||
      this.state.political < 80 ||
      this.state.culture < 80 ||
      this.state.economy < 80
    ) {
      displayRealNews = this.state.goodRealNews;
      displayRealNews = _.shuffle(displayRealNews);
      displayRealNews.length = 3;
      this.setState({ displayRealNews, realNewsSwitch: "g" });
    } else {
      console.log(this.state.neutralRealNews);
      displayRealNews = this.state.neutralRealNews;
      displayRealNews = _.shuffle(displayRealNews);
      displayRealNews.length = 3;
      this.setState({ displayRealNews, realNewsSwitch: "n" });
    }
  };

  handlePublish = (publishedNews) => {
    if (publishedNews.price > this.state.money) {
      store.addNotification({
        title: "Not enough money",
        message: "You don't have enough money to publish this headline",
        type: "danger",
        container: "bottom-left",
        insert: "bottom",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],

        dismiss: {
          duration: 2500,
          showIcon: true,
        },
      });
    } else {
      const money = this.state.money - publishedNews.price;
      const military = this.state.military + publishedNews.mil;
      const entertainment = this.state.entertainment + publishedNews.ent;
      const political = this.state.political + publishedNews.pol;
      const culture = this.state.culture + publishedNews.cul;
      const economy = this.state.economy + publishedNews.eco;

      const originalArray = this.state.fakeNews;

      let localRealNews = [];
      let compareRealNewsArray = this.state.displayRealNews;
      if (this.state.realNewsSwitch === "g") {
        localRealNews = this.state.goodRealNews;
      } else {
        localRealNews = this.state.neutralRealNews;
      }

      localRealNews = localRealNews.filter(
        (val) => !compareRealNewsArray.includes(val)
      );

      originalArray.forEach(function (item, index) {
        if (item === publishedNews) {
          delete originalArray[index];
        }
      });
      if (this.state.realNewsSwitch === "g") {
        this.setState({
          fakeNews: originalArray,
          goodRealNews: localRealNews,
          military,
          entertainment,
          political,
          culture,
          economy,
          money,
        });
      } else {
        this.setState({
          fakeNews: originalArray,
          neutralRealNews: localRealNews,
          military,
          entertainment,
          political,
          culture,
          economy,
          money,
        });
      }
      this.recallingChoice();
    }
  };

  recallingChoice() {
    this.generateFakeChoice();
    this.generateRealNews();
  }

  getEconomy() {
    return this.state.economy;
  }

  render() {
    return (
      <div>
        <ReactNotification />
        <Switch>
          <Route path="/" exact>
            <Headline
              userInput={this.state.userInput}
              money={this.state.money}
              displayFakeNews={this.state.displayFakeNews}
              onPublish={this.handlePublish}
              military={this.state.military}
              entertainment={this.state.entertainment}
              political={this.state.political}
              culture={this.state.culture}
              economy={this.state.economy}
            />
          </Route>
          <Route path="/economy">
            <Economics economy={this.state.economy} />
          </Route>
          <Route path="/realnews">
            <RealHeadline
              localReal={this.state.displayRealNews}
              military={this.state.military}
              entertainment={this.state.entertainment}
              political={this.state.political}
              culture={this.state.culture}
              economy={this.state.economy}
              userInput={this.state.userInput}
              money={this.state.money}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
