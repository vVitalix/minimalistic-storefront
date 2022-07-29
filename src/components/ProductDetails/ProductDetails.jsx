import React, { Component } from "react";
import { Link } from "react-router-dom";
//COMPONENTS
import Title from "./Title";
import Price from "./Price";

class ProductDetails extends Component {
    render() {
        const { id, name, brand, currentPrice, inStock } = this.props;

        return (
            <div className="product-details">
                <Link to={`/product/${id}`}>
                    <Title name={name} brand={brand} inStock={inStock} />
                </Link>
                <Price currentPrice={currentPrice} inStock={inStock} />
            </div>
        );
    }
}

export default ProductDetails;
