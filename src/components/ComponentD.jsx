import React, { useContext } from 'react'
import { CounterContext } from '../App'
import { decrement, increment, reset } from './actionTypes';

const ComponentD = () => {
  const {state,dispatch} = useContext(CounterContext);
  return (
    <React.Fragment>
      <h1>ComponentD: {state}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

    </React.Fragment>
  )
}

export default ComponentD