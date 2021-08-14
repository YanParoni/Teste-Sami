import React, { Component } from 'react';

export default class HeroeAppearance extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { appearance } = this.props;
    return (
      <div>
        <h3>Appearance</h3>
        <div>
          <div>
            Gender: <span>{appearance.gender}</span>
          </div>
          <div>
            Race: <span>{appearance.race}</span>
          </div>
          <div>
            Height: <span>{appearance.height[1]}</span>
          </div>
          <div>
            Weight: <span>{appearance.weight[1]}</span>
          </div>
          <div>
            Eye color: <span>{appearance['eye-color']}</span>
          </div>
          <div>
            Hair-color: <span>{appearance['hair-color']}</span>
          </div>
        </div>
      </div>
    );
  }
}
