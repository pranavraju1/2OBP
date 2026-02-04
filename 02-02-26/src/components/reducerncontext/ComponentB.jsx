import React, { useContext } from 'react'
import { CounterContext } from '../../App'

const ComponentB = () => {
    const conterContext = useContext(CounterContext);

  return (
    <div>
        <h3>ComponentB - {conterContext.countState}</h3>
        <button onClick={()=>conterContext.countDispatch('increment')}>Increase</button>
        <button onClick={()=>conterContext.countDispatch('decrement')}>Decrease</button>
        <button onClick={()=>conterContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentB
