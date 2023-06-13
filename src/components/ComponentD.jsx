import React, { useContext } from 'react'
import { CounterContext } from '../App'

const ComponentD = () => {
  const {state,dispatch} = useContext(CounterContext);
  return (
    <React.Fragment>
      <h1>ComponentD: {state}</h1>

      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      <button onClick={() => dispatch({type:'reset'})}>Reset</button>

    </React.Fragment>
  )
}

export default ComponentD