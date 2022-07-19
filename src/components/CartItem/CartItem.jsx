import React, { Component } from "react";
import { connect } from "react-redux";
//REDUCERS
import { increase, decrease, removeItem } from "../../features/cart/cartSlice";
//COMPONENTS
import ProductAttributes from "../ProductAttributes";
import ProductDetails from "../ProductDetails";
import GalleryCarousel from "./GalleryCarousel";
import { PlusSquareIcon, MinusSquareIcon } from "../Icons/ShoppingCartIcons";

class CartItem extends Component {
  render() {
    const { name, brand, inStock, gallery, attributes, prices } = this.props.cartItem.product;
    const { id, selectedAttributes, qty } = this.props.cartItem;
    const { currentCurrency } = this.props;
    const currentPrice = prices.find(price => price.currency.label === currentCurrency.label);

    return (
      <div>
        <ProductDetails
          id={selectedAttributes.productId}
          name={name}
          brand={brand}
          inStock={inStock}
          currentPrice={currentPrice}
        />
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
