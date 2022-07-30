import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//COMPONENTS
import CartItem from "../CartItem";
//STYLES
import StyledCart from "../styles/Cart.styled";

class Cart extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { cartItems, quantity, total, tax, currentCurrency } = this.props;

        return (
            <StyledCart>
                <h1>Cart</h1>
                <div className="cart-items">
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
                        <h4 className="total">Total:</h4>
                        <p>
                            {currentCurrency.symbol}
                            {total.toFixed(2)}
                        </p>
                    </div>
                    {cartItems.length > 0 && (
                        <Link to="/404">
                            <button>Order</button>
                        </Link>
                    )}
                </div>
            </StyledCart>
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

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    quantity: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    currentCurrency: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps())(Cart);
