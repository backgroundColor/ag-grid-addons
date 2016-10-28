import React from 'react'

export default class TestComponent extends React.Component {
  sum(a, b) {
    return a + b
  }

  render(){
    return (
      <div className="wrapper">
         The sum of 13 and 37 would be {this.sum(13, 37)}
      </div>
    )
  }
}
