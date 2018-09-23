import React, { Component } from 'react';
import Lodash from "lodash";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./images.json";
import Navbar from "./components/Navbar";
import './App.css';

const shuffleArray = cards => {
  const cardsShuffle = Lodash.shuffle(cards);
  return cardsShuffle;
};
// All code for the props and the logic for the app
class App extends Component {
  render() {
    return (
      <Navbar />
    );
  }
}

export default App;
