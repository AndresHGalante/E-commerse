import "./CartWidget.component.css"
import { useCart } from "../../Context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (

        <Link to={'cart'} className="Cart">
            <img src="../carrito.png" alt="" className="carrito" />
            {totalQuantity}
        </Link>

    )
}

export default CartWidget