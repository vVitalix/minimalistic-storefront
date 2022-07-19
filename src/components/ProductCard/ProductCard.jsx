import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//REDUCERS
import { addToCart } from "../../features/cart/cartSlice";
//COMPONENTS
import ProductAttributes from "../ProductAttributes";
import ProductDetails from "../ProductDetails";
import { CartIcon } from "../Icons/NavbarIcons";
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
      <StyledProductCard opacity={inStock ? 1 : 0.5} display={attributes.length ? "flex" : "none"}>
        <div className="cover-img-container">
          <Link to={`/product/${id}`}>
            <img src={gallery[0]} alt={`${name} cover img`} />
          </Link>

          {inStock && (
            <div className="card-attributes-container">
              <ProductAttributes
                id={id}
                attributes={attributes}
                selectedAttributes={selectedAttributes}
                setAttributeFromPlp={true}
                disabled={!inStock}
              />
            </div>
          )}

          {!inStock && <p className="out-of-stock">Out Of Stock</p>}
        </div>

        {inStock && (
          <button
            onClick={() => {
              this.props.addToCart({ product, selectedAttributes });
            }}
          >
            <CartIcon />
          </button>
        )}

        <ProductDetails
          id={id}
          name={name}
          brand={brand}
          inStock={inStock}
          currentPrice={currentPrice}
        />
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
