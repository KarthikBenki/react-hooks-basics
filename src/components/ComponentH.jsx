import React, { useContext } from 'react'
import { CounterContext } from '../App'
import { decrement, increment, reset } from './actionTypes';

const ComponentH = () => {
  const {state,dispatch} = useContext(CounterContext);
  return (
    <React.Fragment>
      <h1>ComponentH: {state}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </React.Fragment>
  )
}

export default ComponentH