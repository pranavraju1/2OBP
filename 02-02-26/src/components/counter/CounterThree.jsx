import React, { useReducer } from 'react'
const initialState = {
    firstCount: 0,
    secondCount: 0
};
const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                firstCount: state.firstCount + action.value
            }
        case 'DECREMENT':
            return {
                ...state,
                firstCount: state.firstCount - action.value
            }
        case 'INCREMENT_TWO':
            return {
                ...state,
                secondCount: state.secondCount + action.value
            }
        case 'DECREMENT_TWO':
            return {
                ...state,
                secondCount: state.secondCount - action.value
            }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

const CounterThree = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>CounterThree</h1>
        <h3>firstCount {count.firstCount}</h3>
        <button onClick={()=>dispatch({type: 'INCREMENT' ,value: 1})} >Increase</button>
        <button onClick={()=>dispatch({type: 'INCREMENT', value: 5})} >Increase By 5</button>
        <button onClick={()=>dispatch({type: 'DECREMENT', value: 1})} >Decrease</button>
        <button onClick={()=>dispatch({type: 'RESET'})} >Reset</button>

        <h3>secondCount: {count.secondCount}</h3>
        <button onClick={()=>dispatch({type: 'INCREMENT_TWO' ,value: 1})} >Increase</button>
        <button onClick={()=>dispatch({type: 'DECREMENT_TWO', value: 1})} >Decrease</button>



    </div>
  )
}

export default CounterThree
