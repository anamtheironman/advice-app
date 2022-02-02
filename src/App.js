import React, { Component } from "react";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  state = {
    advice: "",
  };
  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <>
        <div className="app">
          <div className="card">
            <h1 className="heading">{advice}</h1>
            <button className="button" onClick={this.fetchAdvice}>
              <span>ANOTHER ONE!</span>
            </button>
          </div>
          <div id="footer">
            {" "}
            &#169; Ahmmed Al Zubaer Anam
            <br />
            Photo Credit: Tushar Imran
          </div>
        </div>
      </>
    );
  }
}
