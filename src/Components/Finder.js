import React, {Component} from 'react';
import Sale from './Sale';
import axios from 'axios';

export default class Finder extends Component {
  constructor() {
    super()
    this.state = {
      forSale: []
    }
  }

  componentDidMount(){
    this.getForSale()
  }

  getForSale = () => {
    axios.get('/api/for-sale')
    .then(res => {
      this.setState({ forSale: res.data })
    })
    .catch(err => console.log(err))
  }

  render() {
    const mappedInstruments = this.state.forSale.map((instrument, i) => (
      <Sale
        key={i}
        instrument={instrument}
        purchaseFn={this.props.purchaseFn}
        refreshFn={this.getForSale} />
    ))
    return(
      <div className='for-sale'>
        {mappedInstruments}
      </div>
    )
  }
}