import React, { Component } from "react";
import { connect } from "react-redux";
//REDUCERS
import { addToCart } from "../../features/cart/cartSlice";
//COMPONENTS
import { CartIcon } from "../Icons/NavbarIcons";
import ProductAttributes from "../ProductAttributes";

class ProductCard extends Component {
  render() {
    const { id, name, brand, inStock, gallery, attributes, prices } = this.props.product;
    const { currentCurrency, selectedAttributesList } = this.props;
    const currentPrice = prices.find(price => price.currency.label === currentCurrency.label);
    const selectedAttributes = selectedAttributesList.find(
      attributes => attributes.productId === id
    );
    return (
      <div className={inStock ? "" : "out-of-stock"}>
        <div className="img-container">
          <img width="354" src={gallery[0]} alt={name} />
        </div>

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
        />
        <button
          onClick={() => {
            this.props.addToCart({ selectedAttributes });
          }}
        >
          <CartIcon />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentCurrency } = state.modalCurrencies;
  const { selectedAttributesList } = state.productList;
  return { currentCurrency, selectedAttributesList };
};

const mapDispatchToProps = () => {
  return {
    addToCart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ProductCard);
