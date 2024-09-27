import { useState } from 'react'


export default function Card() {
    const [count, setCount] = useState(0)
    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                contador é {count}
            </button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}