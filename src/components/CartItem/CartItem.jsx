import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//COMPONENTS
import ProductAttributes from "../ProductAttributes";

class CartItem extends Component {
  render() {
    const { name, brand, gallery, attributes, prices } = this.props.cartItem.product;
    const { id, selectedAttributes, qty } = this.props.cartItem;
    const { currentCurrency } = this.props;
    const currentPrice = prices.find(price => price.currency.label === currentCurrency.label);

    return (
      <div>
        <div className="details-container">
          <h4 className="title">
            {brand} {name}
          </h4>
          <p className="price">
            {currentPrice && currentPrice.currency.symbol}
            {currentPrice && currentPrice.amount.toFixed(2)}
          </p>
        </div>
        <ProductAttributes
          id={id}
          attributes={attributes}
          selectedAttributes={selectedAttributes}
          setAttributeFromPlp={"disabled"}
        />
        <p>{qty}</p>
        <Link to={`/product/${selectedAttributes.productId}`}>
          <div className="img-container">
            <img width="354" src={gallery[0]} alt={name} />
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentCurrency } = state.modalCurrencies;
  return { currentCurrency };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(CartItem);
