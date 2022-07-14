import React, { Component } from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
//REDUCERS
import { calculateTotals } from "../features/cart/cartSlice";
//COMPONENTS
import Navbar from "../components/Navbar";
import MiniCart from "../components/MiniCart";

import "../index.css";

class Main extends Component {
  componentDidUpdate(prevProps) {
    const { cartItems, currentCurrency } = this.props;

    if (cartItems !== prevProps.cartItems || currentCurrency !== prevProps.currentCurrency) {
      this.props.calculateTotals({ currentCurrency });
    }
  }

  render() {
    const { miniCartIsOpen } = this.props;

    return (
      <div>
        <Navbar />
        {miniCartIsOpen && <MiniCart />}
        <Outlet />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { cartItems, miniCartIsOpen } = state.cart;
  const { currentCurrency } = state.modalCurrencies;
  return { cartItems, miniCartIsOpen, currentCurrency };
};

const mapDispatchToProps = () => {
  return { calculateTotals };
};

export default connect(mapStateToProps, mapDispatchToProps())(Main);
