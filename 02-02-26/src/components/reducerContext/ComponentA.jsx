import React, { useContext } from 'react'
import { CounterContext } from '../../App'

const ComponentA = () => {
    
    const counterContext = useContext(CounterContext)

  return (
    <div>
      <h3>ComponentA: {counterContext.countState}</h3>
      <button onClick={()=>counterContext.countDispatch('INCREMENT')}>Increase</button>
      <button onClick={()=>counterContext.countDispatch('DECREMENT')}>Decrease</button>
      <button onClick={()=>counterContext.countDispatch('RESET')}>Reset</button>
    </div>
  )
}

export default ComponentA
