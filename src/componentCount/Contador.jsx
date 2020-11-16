import {useState} from 'react'

const Contador = () => {
    const [count, letCount] = useState(0)

    const add = () =>{
        letCount(count + 1)
    }

    const sub = () =>{
        letCount(count - 1)
    }

    return (
        <>
        <button onClick={add}>+</button>
        <h1>{count}</h1>
        <button onClick={sub}>-</button>
        </>
    )
}

export default Contador;