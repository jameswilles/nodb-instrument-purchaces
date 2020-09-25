import React, {Component} from 'react';
import Header from './Components/Header';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      purchaced = []
    }
  }

  render() {
    return(
      <div>
        <Header />
      </div>
    )
  }
}