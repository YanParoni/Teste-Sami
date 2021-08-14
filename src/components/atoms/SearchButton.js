import React, { Component } from 'react';

export default class SearchButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        className="btn btn-outline-danger col-12 buttons "
        type="submit"
        value={this.props.value}
        disabled={this.props.disabled}
        onClick={this.props.handleSubmit}
      >
        {this.props.text}{' '}
      </button>
    );
  }
}
