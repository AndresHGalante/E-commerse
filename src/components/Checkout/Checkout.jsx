import { useState } from "react"
import { useCart } from "../../Context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { addDoc, getDocs, collection, query, where, documentId, writeBatch } from 'firebase/firestore'
import "./Checkout.component.css"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const { cart, total, clearCart } = useCart()

    const createOrder = async (userData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: {
                    name: prompt("Ingrese su nombre:"),
                    phone: prompt("Ingrese su número de teléfono:"),
                    email: prompt("Ingrese su correo electrónico:")
                },
                items: cart, total
            }

            const batch = writeBatch(db)
            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const { docs } = await getDocs(productsCollection)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })


            if (outOfStock.length === 0) {
                batch.commit()

                const ordersCollection = collection(db, 'orders')

                const { id } = await addDoc(ordersCollection, objOrder)

                clearCart()
                setOrderId(id)
            } else {
                Swal.fire({
                    text: "Algunos productos no cuentan con stock actualmente",
                    icon: "error"
                  });
            }
        } catch (error) {
            Swal.fire({
                text: 'Ocurrio un error generando la orden: ' + error.message,
                icon: "error"
              });
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return <h1 className="texto">Generando Orden</h1>
    }

    if (orderId) {
        return (
            <div className="final">
                <h1 className="texto">La id de su orden es: {orderId}</h1>
                <h2 className="texto">Gracias por comprar con nosotros</h2>
                <Link to={'/'} className="button">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div>
            <button onClick={createOrder} className="boton">Finalizar Compra</button>
        </div>
    )
}

export default Checkout