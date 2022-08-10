import { Component } from "react";
import productListData from "../productListData"
import ProductDetails from "./ProductDetails"
import ProductForm from "./ProductForm";

class ProductIndexPage extends Component {
    state = {
        products: productListData
    }

    deleteProduct(id) {
        this.setState({
            products: this.state.products.filter(p => p.id !== id)
        })
    }

    createNewProduct(params) {
        this.setState({
            products: [
                params,
                ...this.state.products
            ]
        })
    }

    render() {
        return (
            <>  
                <ProductForm submitForm={ (params) => this.createNewProduct(params)}/>
                {this.state.products.map((p, index) => {
                    return <div key={index}>
                        <ProductDetails
                            title={p.title}
                            price={p.price}
                            description={p.description || ''}
                            created_at={new Date()}
                            seller={p.seller}
                        />
                        <button onClick={()=> this.deleteProduct(p.id)}>Delete</button>
                    </div>

                })}
            </>
        )
    }

}

export default ProductIndexPage;