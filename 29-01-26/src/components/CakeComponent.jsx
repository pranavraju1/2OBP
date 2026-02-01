import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered } from './cakeSlice';
const CakeComponent = () => {

    const numOfCakes = useSelector(state=>state.cake.numOfCakes);
    const dispatch = useDispatch();


  return (
    <div>
      <h1>Cake: {numOfCakes}</h1>
      <input type="number" />
      <button onClick={()=> dispatch(ordered())}>Buy Cake</button>
    </div>
  )
}

export default CakeComponent
