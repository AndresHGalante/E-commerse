import Item from '../Item/Item.jsx'

const ItemList = ({ products }) => {
    return (
        <div onClick={() => console.log('list')} className="d-flex flex-column align-items-center">
            {
                products.map(prod => {
                    return <Item key={prod.id} {...prod}/>
                })
            }
        </div>
    )
}

export default ItemList