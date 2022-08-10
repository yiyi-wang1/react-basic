import ProductDetails from "./ProductDetails"
import ReviewList from "./ReviewList"

export default function ProductShowPage({product}){
    return (
        <div>
            <h1>Product Show Page</h1>
            <ProductDetails
                title= {product.title}
                description={product.description}
                price={product.price}
                created_at={product.created_at}
                seller={product.seller}
            />

            <ReviewList
                list ={product.reviews}
            />
        </div>
    )
}