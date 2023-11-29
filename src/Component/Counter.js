import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(3)
    const incrementCounter = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const decrementCounter = () => {
        setCount((prevCount) => prevCount - 1 )
    }

  return (
    <div>
      <button data-testid = "increment" onClick={incrementCounter}>+</button>
      <p data-testid = "counter">count:{count}</p>
      <button data-testid = "decrement" onClick={decrementCounter}>-</button>
    </div>
  )
}

export default Counter
