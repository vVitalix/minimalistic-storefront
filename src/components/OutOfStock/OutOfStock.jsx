import React, { Component } from "react";
import { connect } from "react-redux";

import ProductAttributes from "../ProductAttributes";

class OutOfStock extends Component {
  render() {
    const { id, name, brand, inStock, gallery, attributes, prices } =
      this.props.product;
    const { currentCurrency, selectedAttributesList } = this.props;
    const currentPrice = prices.find(
      price => price.currency.label === currentCurrency.label
    );
    return (
      <div className={inStock ? "" : "out-of-stock"}>
        <div className="img-container">
          <img width="354" src={gallery[0]} alt={name} />
        </div>

        <div className="details-container">
          <p className="title">
            {brand} {name}
          </p>
          <p className="price">
            {currentPrice.currency.symbol}
            {currentPrice.amount.toFixed(2)}
          </p>
        </div>
        <ProductAttributes
          attributes={attributes}
          selectedAttributesList={selectedAttributesList}
          id={id}
        />
        <button>ADD TO CART</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentCurrency } = state.modalCurrencies;
  const { selectedAttributesList } = state.productList;
  return { currentCurrency, selectedAttributesList };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OutOfStock);
