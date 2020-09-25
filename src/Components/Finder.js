import React, {Component} from 'react';
import Sale from './Sale';

export default class Finder extends Component {
  constructor() {
    super()
    this.state = {
      forSale: []
    }
  }

  render() {
    return(
      <Sale />
    )
  }
}