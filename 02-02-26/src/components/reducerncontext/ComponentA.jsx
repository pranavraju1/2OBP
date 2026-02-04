import React, { useContext } from 'react'
import { CounterContext } from '../../App'

const ComponentA = () => {
    const conterContext = useContext(CounterContext);

  return (
    <div>
        <h3>ComponentA - {conterContext.countState}</h3>
        <button onClick={()=>conterContext.countDispatch('increment')}>Increase</button>
        <button onClick={()=>conterContext.countDispatch('decrement')}>Decrease</button>
        <button onClick={()=>conterContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
