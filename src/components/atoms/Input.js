import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <input
          type="text"
          className="col-12"
          placeholder="Search a hero"
          onChange={this.props.handleInput}
          value={this.props.value}
        />
      </>
    );
  }
}
