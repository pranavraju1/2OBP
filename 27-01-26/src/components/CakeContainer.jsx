import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions';
import { buyIcreams } from '../redux/icecream/icecreamActions';
import { buyCombo } from '../redux/combo/comboAction';

const CakeContainer = () => {
    // this is a function that takes state as a callback and returns the desired state form the store
    const numOfCakes = useSelector(state=>state.cake.numOfCakes);
    const numOfIceream = useSelector(state=>state.icecream.numOfIceream);

    // this hook returns the reference of the dispatch function in redux store
    const dispatch = useDispatch();

    const  [cakeNumber, setCakeNUmber] = useState(1)

  return (
    <div>
      <h1>Cake {numOfCakes}</h1>
      <input type="number" value={cakeNumber} onChange={(e)=>setCakeNUmber(e.target.value)} />
      <button onClick={()=>dispatch(buyCake(cakeNumber))} >Buy Cake</button>

      <h1>Icecream: {numOfIceream}</h1>
      <button onClick={()=>dispatch(buyIcreams())} >Buy Cake</button>

      <button onClick={()=>dispatch(buyCombo())}>Buy Combo</button>

    </div>
  )
}

export default CakeContainer
