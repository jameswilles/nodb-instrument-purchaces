import React, {Component} from 'react'

export default class Sale extends Component {
  handlePurchase = () => {
    const { instrument } = this.props;
    this.props.purchaseFn( instrument )
    this.props.refreshFn()
  }

  render() {
    return(
      <div onClick={this.handlePurchase}>
        <p>{this.props.instrument.name}</p>
        <p>{this.props.instrument.price}</p>
      </div>
    )
  }
}