import React, { Component } from "react";
import { connect } from "react-redux";

//COMPONENTS
import CartItem from "../CartItem";

class MiniCart extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <section>
        <div>
          <h2>My Bag,</h2>
          <p>5 items</p>
        </div>
        <div>
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div>
          <button>view bag</button>
          <button>check out</button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { cartItems } = state.cart;
  return { cartItems };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(MiniCart);
