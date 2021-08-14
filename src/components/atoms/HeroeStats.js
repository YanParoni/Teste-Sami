import React, { Component } from 'react';

export default class HeroeStats extends Component {
  render() {
    const { stats } = this.props;
    return (
      <div className="col-6">
        <h2>Stats</h2>
        <div>Intelligence ({+stats.intelligence ? stats.intelligence : 0})</div>

        <div>Strength ({+stats.strength ? stats.strength : 0})</div>

        <div>Speed ({+stats.speed ? stats.speed : 0})</div>
        <div>Durability ({+stats.durability ? stats.durability : 0})</div>

        <div>Power ({+stats.power ? stats.power : 0})</div>

        <div>Combat ({+stats.combat ? stats.combat : 0})</div>
      </div>
    );
  }
}
