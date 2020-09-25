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
    <div className='own-display'>
      <h1 className='list-title'> Your Instruments: </h1>
      <div className='own-list'>
        {mappedPurchases}
      </div>
    </div>
  )
}

export default List