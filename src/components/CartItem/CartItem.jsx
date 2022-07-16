import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//REDUCERS
import { increase, decrease, removeItem } from "../../features/cart/cartSlice";
//COMPONENTS
import ProductAttributes from "../ProductAttributes";
import GalleryCarousel from "./GalleryCarousel";
import { PlusSquareIcon, MinusSquareIcon } from "../Icons/ShoppingCartIcons";

class CartItem extends Component {
  render() {
    const { name, brand, gallery, attributes, prices } = this.props.cartItem.product;
    const { id, selectedAttributes, qty } = this.props.cartItem;
    const { currentCurrency } = this.props;
    const currentPrice = prices.find(price => price.currency.label === currentCurrency.label);

    return (
      <div>
        <div className="details-container">
          <div className="title">
            <Link to={`/product/${selectedAttributes.productId}`}>
              <h2>{brand}</h2>
              <h3>{name}</h3>
            </Link>
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
          setAttributeFromPlp={"disabled"}
        />
        <div>
          <button onClick={() => this.props.increase({ id })}>
            <PlusSquareIcon />
          </button>
          <p>{qty}</p>
          <button
            onClick={() => {
              if (qty === 1) {
                this.props.removeItem({ id });
                return;
              }
              this.props.decrease({ id });
            }}
          >
            <MinusSquareIcon />
          </button>
        </div>
        <GalleryCarousel gallery={gallery} name={name} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentCurrency } = state.modalCurrencies;
  return { currentCurrency };
};

const mapDispatchToProps = () => {
  return { increase, decrease, removeItem };
};

export default connect(mapStateToProps, mapDispatchToProps())(CartItem);
