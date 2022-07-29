import React, { Component } from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
//REDUCERS
import { calculateTotals } from "../features/cart/cartSlice";
//COMPONENTS
import Header from "../components/Header";
import ModalCurrencies from "../components/ModalCurrencies";
import MiniCart from "../components/MiniCart";

class Main extends Component {
    componentDidUpdate(prevProps) {
        const { cartItems, currentCurrency } = this.props;

        if (
            cartItems !== prevProps.cartItems ||
            currentCurrency !== prevProps.currentCurrency
        ) {
            this.props.calculateTotals({ currentCurrency });
        }
    }

    render() {
        const { isOpen, miniCartIsOpen } = this.props;

        return (
            <div>
                <Header />
                {isOpen && <ModalCurrencies />}
                {miniCartIsOpen && <MiniCart />}
                <Outlet />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { cartItems, miniCartIsOpen } = state.cart;
    const { currentCurrency, isOpen } = state.modalCurrencies;
    return { cartItems, miniCartIsOpen, currentCurrency, isOpen };
};

const mapDispatchToProps = () => {
    return { calculateTotals };
};

export default connect(mapStateToProps, mapDispatchToProps())(Main);
