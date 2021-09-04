import { useEffect, useState } from "react"

export default function Estatico1() {
    const [num, setNum] = useState(Math.random())

    useEffect(() => {
        setNum(Math.random())
    }, [])
    return (
        <div>
            <h1>Estatico 01 - versao 2</h1>
            <h2>{num}</h2>
        </div>
    )
}