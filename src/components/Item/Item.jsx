const Item = ({name, price, img }) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={img} />
            <h4>{price}</h4>
        </div>

    )
}

export default Item