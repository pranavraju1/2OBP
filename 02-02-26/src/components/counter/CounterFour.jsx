import React, { useReducer } from 'react'
const initialState = {
    firstCount: 0,
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
        case 'RESET':
            return initialState
        default:
            return state
    }
}

const CounterFour = () => {

    // both the counters work independently of each other
    // even though they use the same reducer

    // use this when you want different states with same transition
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>CounterFour</h1>
        <h3>firstCount {count.firstCount}</h3>
        <button onClick={()=>dispatch({type: 'INCREMENT' ,value: 1})} >Increase</button>
        <button onClick={()=>dispatch({type: 'INCREMENT', value: 5})} >Increase By 5</button>
        <button onClick={()=>dispatch({type: 'DECREMENT', value: 1})} >Decrease</button>
        <button onClick={()=>dispatch({type: 'RESET'})} >Reset</button>

        <h3>secondCount: {countTwo.firstCount}</h3>
        <button onClick={()=>dispatchTwo({type: 'INCREMENT' ,value: 1})} >Increase</button>
        <button onClick={()=>dispatchTwo({type: 'DECREMENT', value: 1})} >Decrease</button>



    </div>
  )
}

export default CounterFour
