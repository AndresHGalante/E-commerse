import { useState, useEffect } from "react"
import "./itemListContainer.components.css"
import { useParams, Link } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
/*import ItemList from "../ItemList/ItemList"

const ItemListMemo = memo(ItemList)*/

const ItemListContainer = ({ }) => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef)
            .then(querySnapshot => {
                console.log(querySnapshot)

                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })

                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="itemListContainer">
            {products.map((product, index) => (
                <div key={index} className="productItem">
                    <h3>{product.name}</h3>
                    <img src={product.img} />
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <Link to={`/detail/${product.id}`}>Ver mas</Link>
                </div>
            ))}
        </div>
    )
}

export default ItemListContainer