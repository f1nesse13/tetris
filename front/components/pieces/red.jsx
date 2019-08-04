import React, { Component } from "react";

class RedPiece extends Component {
  constructor(props) {
    this.state = { board_pos: [], rotation: "" };
  }

  render() {
    return <div className="red_piece"></div>;
  }
}
