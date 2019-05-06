import React, { Component } from "react";
import { Players } from "../api/players";

export default class AddPlayer extends Component {

  handleFormoSubmit = e => {
    e.preventDefault();

    let playerName = e.target.playerName.value;

    if (playerName) {
      e.target.playerName.value = "";

      Players.insert({
        name: playerName,
        score: this.props.score
      });
    }
  };

  render() {
    return (
      <form action="" onSubmit={this.handleFormoSubmit}>
        <input type="text" name="playerName" plaholder="Player name" />
        <button>Add Player</button>
      </form>
    );
  }
}
