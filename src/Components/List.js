import React from 'react';
import Own from './Own';

const List = (props) => {
  const mappedPurchases = props.purchased.map((instrument, i) => (
    <Own
      key={i}
      instrument={instrument}
      priceFn={props.priceFn}
      sellFn={props.sellFn} />
  ))
  return(
    <div>
      <h1> Your Instruments: </h1>
      <div>
        {mappedPurchases}
      </div>
    </div>
  )
}

export default List