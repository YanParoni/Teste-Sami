import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <img className='col-10 col-xl-7 hero-photo'src={this.props.src} width="100%"/>
      </>
    );
  }
}
