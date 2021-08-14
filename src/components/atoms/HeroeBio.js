import React, { Component } from 'react';

export default class HeroeBio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { biography } = this.props;
    return (
      <div className="col-4">
        <div className="col-1">
          <h3>Biography</h3>
          <div>
            Full-name:<span className="attr">{biography['full-name']}</span>
          </div>
        </div>
        <div className="info-item">
          Alter Egos: <span className="attr">{biography['alter-egos']}</span>
        </div>
        <div className="info-item">
          Place of Birth:{' '}
          <span className="attr">{biography['place-of-birth']}</span>
        </div>
        <div className="info-item">
          First Appearance:{' '}
          <span className="attr">{biography['first-appearance']}</span>
        </div>
        <div className="info-item">
          Publisher: <span className="attr">{biography.publisher}</span>
        </div>
        <div className="info-item">
          Alignment: <span className="attr">{biography.alignment}</span>
        </div>
        <div className="info-item">
          <div>Aliases</div>
          {biography.aliases.map((aliases) => (
            <li key={aliases} className="attr">
              {aliases}
            </li>
          ))}
        </div>
      </div>
    );
  }
}
