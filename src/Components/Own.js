import React, {Component} from 'react';

export default class Own extends Component {
  constructor() {
    super()
    this.state = {
      isEditing: false,
      priceInput: ''
    }
  }

  handleInput = (val) => {
    this.setState({priceInput: val})
  }

  handleToggle = () => {
    this.setState({isEditing: !this.state.isEditing})
  }

  handleEdit = (id) => {
    this.props.priceFn(id, this.state.priceInput);
    this.handleToggle();
  }

  render() {
    return(
      <div>
        <p>{this.props.instrument.name}</p>
        {this.state.isEditing
        ? (
          <div>
            <input
              value={this.state.input}
              onChange={e => this.handleInput(e.target.value)} />
              <button onClick={() => this.handleEdit(this.props.instrument.id)}> Submit </button>
          </div>
        ) : (
          <div>
            <p>{this.props.instrument.price}</p>
            <button onClick={this.handleToggle}> Edit Price </button>
          </div>
        )}
        <button onClick={() => this.props.sellFn(this.props.instrument.id)}> Sell </button>
      </div>
    )
  }
}