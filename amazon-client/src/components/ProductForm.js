import { Component } from 'react';

class ProductForm extends Component {

    constructor(props) {
        super(props);
        this.state = {submitForm: null}
        this.createNewProduct = this.createNewProduct.bind(this);
    }

    createNewProduct(event) {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        this.props.submitForm(
            {
                title: fd.get("title"),
                description: fd.get("description"),
                price: fd.get("price"),
                created_at: new Date(),
                seller: {
                    full_name: fd.get("seller")
                },
                id: 100
            }
        )
        // this.setState({
        //     submitForm:
        //     {
        //         title: fd.get("title"),
        //         description: fd.get("description"),
        //         price: fd.get("price"),
        //         created_at: new Date(),
        //         seller: {
        //             full_name: fd.get("full_name")
        //         },
        //         id: 100
        //     }

        // })

        event.currentTarget.reset();

    }


    render() {
        return (
            <form onSubmit={this.createNewProduct}>
                <div>
                    <label>Product Title</label>
                    <input name="title" type="text"></input>
                </div>
                <div>
                    <label>Product Description</label>
                    <input name="description" type="text"></input>
                </div>
                <div>
                    <label>Product Price</label>
                    <input name="price" type="number"></input>
                </div>
                <div>
                    <label>Product Seller</label>
                    <input name="seller" type="text"></input>
                </div>
                <div>
                <input type="submit" value="Create Product" />
                </div>
            </form>
        )
    }

}

export default ProductForm
