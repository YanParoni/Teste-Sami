import React, { Component } from 'react';

export default class HeroeWork extends Component {
  render() {
    const { work } = this.props;
    return (
      <div className="col-12 col-xl-6">
        <h3 className="col-1">Work</h3>
        <div className="col-1">Occupation: {work.occupation}</div>
        <div className="col-1">Base:{work.base}</div>
      </div>
    );
  }
}
