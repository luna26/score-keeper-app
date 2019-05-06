import React, { Component } from "react";
import TitleBar from "./TitleBar";
import AddPlayer from "./addPlayer";
import PlayerList from "./PlayerList";

export default class App extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <PlayerList players={this.props.players} />
        <AddPlayer score={10} />
      </div>
    );
  }
}
