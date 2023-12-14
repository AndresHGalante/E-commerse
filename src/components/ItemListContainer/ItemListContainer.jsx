import { useState, useEffect } from "react"
import "./itemListContainer.components.css"
import { getProducts, getProductsByCategory } from "../../AsyncMock"
import { useParams, Link } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(Response => {
                setProducts(Response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <div className="itemListContainer">
            {/* <h1>{greeting}</h1> */}
            {products.map((product, index) => (
                <div key={index} className="productItem">
                    <h3>{product.name}</h3>
                    <img src={product.img}/>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <Link to={`/detail/${product.id}`}>Ver mas</Link>
                </div>
            ))}
        </div>
    )
}

export default ItemListContainer