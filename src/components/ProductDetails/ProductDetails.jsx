import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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

ProductDetails.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    currentPrice: PropTypes.object.isRequired,
    inStock: PropTypes.bool.isRequired,
};

export default ProductDetails;
