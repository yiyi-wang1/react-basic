import { Component} from "react"
import ProductDetails from "./ProductDetails"
import ReviewList from "./ReviewList"
import productData from "../productData"


export default class ProductShowPage extends Component{
    state = {
        product: productData
    }

    deleteReview(id) {
        this.setState({
            product: {
                ...this.state.product,
                reviews: this.state.product.reviews.filter(r => r.id !== id)
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Product Show Page</h1>
                <ProductDetails
                    title= {this.state.product.title}
                    description={this.state.product.description}
                    price={this.state.product.price}
                    created_at={this.state.product.created_at}
                    seller={this.state.product.seller}
                />
    
                <ReviewList
                    list={this.state.product.reviews}
                    deleteReview = {(id) => this.deleteReview(id)}
                />
            </div>
        )
    }
}