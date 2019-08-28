import React, { Component } from "react";

class CharacterCard extends Component {
  state = {
    count: 0
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log("increment clicked", this.state.count);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default CharacterCard;
