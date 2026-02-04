import React, { useReducer } from 'react'
const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return initialState
        default:
            return state
    }
}

const Counter = () => {
    // similar to useState useReducer also returns a pair of values using array destructuring
    const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=>dispatch('INCREMENT')} >Increase</button>
      <button onClick={()=>dispatch('DECREMENT')} >Decrease</button>
      <button onClick={()=>dispatch('RESET')} >Reset</button>
    </div>
  )
}

export default Counter
