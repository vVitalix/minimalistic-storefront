import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//REDUCERS
import { closeMiniCart } from "../../features/cart/cartSlice";
//COMPONENTS
import CartItem from "../CartItem";
//STYLES
import FillerBox from "../styles/FillerBox.styled";
import Overlay from "../styles/Overlay.styled";
import StyledMiniCart from "../styles/MiniCart.styled";

class MiniCart extends Component {
  render() {
    const { cartItems, quantity, total, currentCurrency } = this.props;

    return (
      <>
        <FillerBox onClick={() => this.props.closeMiniCart()} height={"5rem"} />
        <Overlay
          onClick={() => this.props.closeMiniCart()}
          height={"5rem"}
          background={"var(--color-transparentGrey)"}
        >
          <StyledMiniCart onClick={e => e.stopPropagation()}>
            <div>
              <h2>My Bag,</h2>
              <p>{quantity} items</p>
            </div>
            <div>
              {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
            <div className="cart-total">
              <h4>Total</h4>
              <p>
                {currentCurrency.symbol}
                {total.toFixed(2)}
              </p>
            </div>
            <div>
              <Link to="cart" onClick={() => this.props.closeMiniCart()}>
                <button>View Bag</button>
              </Link>
              <Link to="404" onClick={() => this.props.closeMiniCart()}>
                <button>Check Out</button>
              </Link>
            </div>
          </StyledMiniCart>
        </Overlay>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { cartItems, quantity, total } = state.cart;
  const { currentCurrency } = state.modalCurrencies;
  return { cartItems, quantity, total, currentCurrency };
};

const mapDispatchToProps = () => {
  return { closeMiniCart };
};

export default connect(mapStateToProps, mapDispatchToProps())(MiniCart);
