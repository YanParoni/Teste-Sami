import React, { Component } from 'react'

export default class HeroeName extends Component {
  render() {
    return (
      <>
       <h1 className='col-12 hero-name'>{this.props.name}</h1> 
      </>
    )
  }
}
