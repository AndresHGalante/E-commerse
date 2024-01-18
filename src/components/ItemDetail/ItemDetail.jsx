import { Link } from "react-router-dom"
import { useCart } from "../../Context/CartContext"
import { useState } from "react"
import "./ItemDetail.component.css"
import Swal from 'sweetalert2'

const InputCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if (e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count} />
            <button onClick={() => onAdd(count)}>Añadir al carro</button>
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
            setCount(count + 1)
    }

    const decrement = () => {
        if (count > 1){
           setCount(count - 1) 
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement} className="botoncito">-</button>
            <button onClick={() => onAdd(count)} className="botoncito">Añadir al carro</button>
            <button onClick={increment} className="botoncito">+</button>
        </div>
    )
}

const ItemDetail = ({ name, category, img, price, description, stock, id }) => {

    const [inputType] = useState('button')

    const { addItem, isInCart } = useCart()


    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)
        Swal.fire({
            title: "Agregado al carrito",
            text: `agregaste ${quantity} ${name}`,
            icon: "success"
        });
    }

    return (
        <div>
            <article>
                <header>
                    <h2>
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={name} />
                </picture>
                <section>
                    <p>
                        Categoria: {category}
                    </p>
                    <p>
                        Descripción: {description}
                    </p>
                    <p>
                        Precio: {price}
                    </p>
                </section>
                <footer>
                    {
                        !isInCart(id) ? (
                            <ItemCount onAdd={handleOnAdd} stock={stock} />
                        ) : (
                            <Link to='/cart' className="botoncito">Finalizar compra</Link>
                        )
                    }
                </footer>
            </article>
        </div>
    )
}

export default ItemDetail