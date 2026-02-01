import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered } from './CakeSlice'

const CakeContainer = () => {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const currentState = useSelector(state => state)
    console.log(currentState)
    const [numberOfCake, setNumberOfCake] = useState(1)
    const dispatch = useDispatch();

  return (
    <div>
      <h1>Cake: {numOfCakes}</h1>
      <input type="number" onChange={(e)=>setNumberOfCake(e.target.value)} />
      <button onClick={()=>dispatch(ordered(numberOfCake))}>Buy cake</button>

    </div>
  )
}

export default CakeContainer
