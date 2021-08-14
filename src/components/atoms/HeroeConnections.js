import React, { Component } from 'react'

export default class HeroeConnections extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { connections } = this.props;
    return (
      <div>
        <h3>Connections</h3>
        <div >
          Group affiliation:
          {connections['group-affiliation']}
        </div>
        <div>
          Relatives: {connections.relatives}
        </div>
      </div>
    )
  }
  }

