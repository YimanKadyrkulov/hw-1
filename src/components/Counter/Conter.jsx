import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Conter = () => {
    const { count } = useSelector((state) => state)
    const dispacth = useDispatch()

    const increment = () => {
        dispacth({type: "INCREMENT"})
    }

    const decrement = () => {
        dispacth({type: "DECREMENT"})
    }

  return (
    <div>
        <button onClick={decrement}>-</button>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Conter