import React, { useReducer } from 'react'
const initialState = {
    firstCount: 0
};
const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                firstCount: state.firstCount + 1
            }
        case 'DECREMENT':
            return {
                firstCount: state.firstCount - 1
            }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>CounterTwo: {count.firstCount}</h1>
      <button onClick={()=>dispatch({type: 'INCREMENT'})} >Increase</button>
      <button onClick={()=>dispatch({type: 'DECREMENT'})} >Decrease</button>
      <button onClick={()=>dispatch({type: 'RESET'})} >Reset</button>
    </div>
  )
}

export default CounterTwo
