import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//COMPONENTS
import CartItem from "../CartItem";

class Cart extends Component {
  render() {
    const { cartItems, quantity, total, tax, currentCurrency } = this.props;

    return (
      <section>
        <div>
          <h2>cart</h2>
        </div>
        <div>
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="cart-total">
          <div>
            <h4>Tax 21%:</h4>
            <p>
              {currentCurrency.symbol}
              {tax.toFixed(2)}
            </p>
          </div>
          <div>
            <h4>Quantity:</h4>
            <p>{quantity}</p>
          </div>
          <div>
            <h4>Total:</h4>
            <p>
              {currentCurrency.symbol}
              {total.toFixed(2)}
            </p>
          </div>
        </div>
        <div>
          <Link to="/404">
            <button>order</button>
          </Link>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { cartItems, quantity, total, tax } = state.cart;
  const { currentCurrency } = state.modalCurrencies;
  return { cartItems, quantity, total, tax, currentCurrency };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(Cart);
