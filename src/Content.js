import React from 'react'
import { useState } from 'react';

const Content = () => {
    const [count, setCount] = useState(0)

    function decrementFunction() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementFunction() {
        setCount(prevCount => prevCount + 1)
    } 
    
  return (
    <>
    <h1>Counter</h1>
    <div className='container'>
      <div>
          <button onClick={decrementFunction} className='decrBtn'>Increment</button>
      </div>
      <div>
          <span>{count}</span>
      </div>
      <div>
          <button onClick={incrementFunction} className='incrBtn'>Decrement</button>
      </div>
    </div>
    </>
  )
}

export default Content