import React from 'react'
import { useState } from 'react'

const Child = () => {
  let [count, setCount] = useState(0);


  function handleClick(){
    for(let i=0;i<5;i++){
      console.log(setCount(count +1))
    }
  }


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>asd</button>
    </div>
  )
}

export default Child
