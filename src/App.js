import React, {Component} from 'react';
import Header from './Components/Header';
import Finder from './Components/Finder';
import List from './Components/List';
import axios from 'axios';
import './App.css'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      purchased: []
    }
  }

  componentDidMount() {
    axios.get('/api/purchased-instruments')
    .then(res => {
      this.setState({ purchased: res.data })
    })
    .catch(err => console.log(err))
  }

  purchaseInstrument(instrument){
    axios.post('/api/purchased-instruments', {name: instrument}) //might not work... i'm a little confused here
    .then(res => {
      this.setState({ purchased: res.data})
    })
    .catch(err => console.log(err))
  }

  editPrice = (id, newPrice) => {
    let body = { price: newPrice }

    axios.put(`/api/purchased-instruments/${id}`, body)
    .then(res => {
      this.setState({ purchased: res.data })
    })
    .catch(err => console.log(err))
  }

  sellInstrument = (id) => {
    axios.delete(`/api/purchased-instruments/${id}`)
    .then(res => {
      this.setState({ purchased: res.data})
    })
    .catch(err => console.log(err))
  }

  render() {
    return(
      <div className='App'>
        <Header />
        <Finder 
          purchaseFn={this.purchaseInstrument}/>
        <List
          purchased={this.state.purchased}
          priceFn={this.editPrice}
          sellFn={this.sellInstrument} />
      </div>
    )
  }
}