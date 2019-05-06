import React, { Component } from "react";
import { Players } from "../api/players";

export default class Player extends Component {

  updateScore = (id, score) => Players.update(id, { $inc: { score: score } });

  removePlayer = id => Players.remove(id);

  render() {
    const player = this.props.player;

    return (
      <div key={player._id}>
        <p>Name: {player.name}</p>
        <p>Score; {player.score}</p>
        <button onClick={this.removePlayer.bind(this, player._id)}>
          Delete Player
        </button>
        <button onClick={this.updateScore.bind(this, player._id, 1)}>+1</button>
        <button onClick={this.updateScore.bind(this, player._id, -1)}>-1</button>
      </div>
    );
  }
}
