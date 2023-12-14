import { useState, useEffect } from "react"
import { getProductById } from "../../AsyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(Response => {
                setProduct(Response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [productId])

    return (
        <ItemDetail {...product} />
    )
}

export default ItemDetailContainer