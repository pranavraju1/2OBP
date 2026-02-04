import React, { createContext, useReducer } from 'react'
import Counter from './components/Counter'
import CounterTwo from './components/CounterTwo'
import CounterThree from './components/CounterThree'
import ComponentA from './components/reducerncontext/ComponentA'
import ComponentB from './components/reducerncontext/ComponentB'
import ComponentC from './components/reducerncontext/ComponentC'
import DataFetchingOne from './components/posts/DataFetchingOne'
import DataFetchingTwo from './components/posts/DataFetchingTwo'



export const CounterContext = createContext();

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


const App = () => {

  const [count, dispatch] = useReducer(reducer, initialState);


  return (
    <div>
      {/* <Counter />       */}
      {/* <CounterTwo />       */}
      {/* <CounterThree /> */}

    {/* <CounterContext.Provider value={{countState: count, countDispatch: dispatch}} >
      <div>
        <h1>Count: {count}</h1>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </div>
    </CounterContext.Provider> */}

      {/* <DataFetchingOne/> */}
      <DataFetchingTwo/>

    </div>
  )
}

export default App
