import { useState } from "react"
import "./ItemCount.components.css"

const ItemCount = ({ initial = 1, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock){
          setCount(prev => prev + 1)  
        }
    }

    const decrement = () => {
        if (count > 1){
            setCount(prev => prev - 1)
        }
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={decrement} className="botoncito">-</button>
            <button onClick={() => onAdd(count)} className="botoncito">Agregar al Carrito</button>
            <button onClick={increment} className="botoncito">+</button>
        </div>
    )
}

export default ItemCount