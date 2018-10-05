// Code CoordinatesButton Component Here

import React from 'react'

export default class CoordinatesButton extends React.Component {
  actionClick = (event) => {
    this.props.onReceiveCoordinates([event.pageX, event.pageY])
  }
  render() {
    return (
      <button onClick={this.actionClick}>Press Me</button>
    )
  }
}
