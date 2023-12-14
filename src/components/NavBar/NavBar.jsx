import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import "./NavBar.components.css"

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to='/' className="titulo">La pasteleria virtual</Link>
            <section className="botones">
                <Link to={'category/chocolate'} className="boton">Chocolate</Link>
                <Link to={'category/fruta'} className="boton">Frutas</Link>
                <CartWidget/>
            </section>
            
        </nav>
    )
}

export default NavBar