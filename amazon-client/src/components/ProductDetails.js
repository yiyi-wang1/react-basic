const ProductDetails = ({title, description, price, created_at, seller}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><small>Price: ${price}</small></p>
            <p><small>Created At: {created_at.toLocaleString()}</small></p>
            <p><small>Sold By: {seller.full_name}</small></p>
        </div>

    )
}

export default ProductDetails