import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//REDUCERS
import { closeMiniCart } from "../../features/cart/cartSlice";
//COMPONENTS
import CartItem from "../CartItem";

class MiniCart extends Component {
  render() {
    const { cartItems, quantity, total, currentCurrency } = this.props;

    return (
      <section>
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
            <button>view bag</button>
          </Link>
          <Link to="404" onClick={() => this.props.closeMiniCart()}>
            <button>check out</button>
          </Link>
        </div>
      </section>
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
