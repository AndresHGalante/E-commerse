import { useCart } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import "./CartView.component.css"

const CartView = () => {
    const { cart, total, removeItem } = useCart()

    return (
        <>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div className="itemListContainer">
                                <div key={prod.id} className="productItem">
                                    <h2>{prod.name}</h2>
                                    <h3>Cantidad: {prod.quantity}</h3>
                                    <h3>Precio unitario: ${prod.price}</h3>
                                    <h3>Subtotal: ${prod.quantity * prod.price}</h3>
                                    <button onClick={() => removeItem(prod.id)} className="botoncito">Eliminar</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="compra">
                <h1 className="title">Costo final: ${total}</h1>
                <Link to='/checkout' className="botoncito">Comprar</Link>
            </div>
        </>
    )
}

export default CartView