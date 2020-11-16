import { useState } from 'react'

const CountClick = () =>{
    const [count, letCount] = useState(0)

    const add = () =>{
        letCount(count + 1)
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={add}>Count</button>
        </>
    )
}

export default CountClick;