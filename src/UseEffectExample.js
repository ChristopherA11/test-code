import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [firstCount,setFirstCount] = useState(1)

    const onClicked = () => {
        setFirstCount(prevCount => prevCount + 1)
    }

    useEffect(()=>{
        onClicked ()
    },[])
  return (
    <div>
    firstCount ={firstCount}
      <button onClick={onClicked}>Click me</button>
    </div>
  )
}

export default UseEffectExample
