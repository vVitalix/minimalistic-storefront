import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//REDUCERS
import { addToCart } from "../../features/cart/cartSlice";
//COMPONENTS
import { CartIcon } from "../Icons/NavbarIcons";
import ProductAttributes from "../ProductAttributes";
//STYLES
import StyledProductCard from "../styles/ProductCard.styled";

class ProductCard extends Component {
  render() {
    const { id, name, brand, inStock, gallery, attributes, prices } = this.props.product;
    const { product, selectedAttributesList, currentCurrency } = this.props;
    const currentPrice = prices.find(price => price.currency.label === currentCurrency.label);
    const selectedAttributes = selectedAttributesList.find(
      attributes => attributes.productId === id
    );

    return (
      <StyledProductCard className={inStock ? "" : "out-of-stock"}>
        <Link to={`/product/${id}`}>
          <div className="cover-img-container">
            <img src={gallery[0]} alt={`${name} cover img`} />
          </div>
        </Link>

        <div className="details-container">
          <div className="title">
            <h3>{brand}</h3>
            <h3>{name}</h3>
          </div>
          <p className="price">
            {currentPrice && currentPrice.currency.symbol}
            {currentPrice && currentPrice.amount.toFixed(2)}
          </p>
        </div>
        <ProductAttributes
          id={id}
          attributes={attributes}
          selectedAttributes={selectedAttributes}
          setAttributeFromPlp={true}
        />
        <button
          onClick={() => {
            this.props.addToCart({ product, selectedAttributes });
          }}
        >
          <CartIcon />
        </button>
      </StyledProductCard>
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
