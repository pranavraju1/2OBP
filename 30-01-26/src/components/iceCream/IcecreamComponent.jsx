import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIcecream } from './icecreamSlice';

const IcecreamComponent = () => {

    const numOfIcecreams = useSelector(state=>state.icecream.numOfIcecreams);
    const dispatch = useDispatch();
    const [numberOdIcecream, setNumberOfIcecream] = useState(1)

  return (
    <div>
      <h1>Icecream: {numOfIcecreams}</h1>
      <input type="number" onChange={(e)=>setNumberOfIcecream(e.target.value)} />
      <button onClick={()=>dispatch(buyIcecream(numberOdIcecream))}>Buy Icecream</button>
    </div>
  )
}

export default IcecreamComponent
