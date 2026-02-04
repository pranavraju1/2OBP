import React, { useReducer } from 'react'


// define the reducer and initialState outside the functional component
// the new state is determined by the action
// for a counter we will have 3 actions increment, decrement and reset
const initialState = 0
const reducer = (state, action) => {
  // return newState
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state

  }
}

const Counter = () => {
  // similar to useState useReducer also returns a pair of values using the array destructuring 
  const [count, dispatch] =  useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>dispatch('increment')}>Increase</button>
      <button onClick={()=>dispatch('decrement')}>Decrease</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>

    </div>
  )
}

export default Counter
