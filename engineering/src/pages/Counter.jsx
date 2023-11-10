import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const plus = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }

    const minus = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h2>{count}</h2>
            <button value="-" onClick={minus}>-</button>
            <button value="0" onClick={reset}>reset</button>
            <button value="+" onClick={plus}>+</button>
        </div>
    )
}

export default Counter