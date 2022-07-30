import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
//REDUCERS
import { getCategories } from "../../features/navbar/navbarSlice";
import {
    getCurrencies,
    openModalCurrencies,
} from "../../features/modalCurrencies/modalCurrenciesSlice";
import { openMiniCart } from "../../features/cart/cartSlice";
//COMPONENTS
import { LogoIcon, CartIcon, ChevronDownIcon } from "../Icons/NavbarIcons";
//STYLES
import StyledHeader from "../styles/Header.styled";

class Header extends Component {
    componentDidMount() {
        this.props.getCategories();
        this.props.getCurrencies();
    }

    render() {
        const { categories, currentCurrency, isOpen, quantity } = this.props;

        return (
            <StyledHeader rotate={isOpen ? "rotate(180deg)" : "rotate(0deg)"}>
                <nav>
                    <ul className="category-list">
                        {categories.map(category => {
                            return (
                                <NavLink
                                    key={category.name}
                                    to={`category/${category.name}`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "category active"
                                            : "category"
                                    }
                                >
                                    <li>{category.name}</li>
                                </NavLink>
                            );
                        })}
                    </ul>
                    <div className="logo">
                        <Link to="/">
                            <LogoIcon />
                        </Link>
                    </div>
                    <div className="shopping-tools">
                        <div
                            className="currency"
                            onClick={() => {
                                this.props.openModalCurrencies();
                            }}
                        >
                            <p>{currentCurrency.symbol}</p>
                            <ChevronDownIcon />
                        </div>
                        <div
                            className="cart"
                            onClick={() => {
                                this.props.openMiniCart();
                            }}
                        >
                            <CartIcon />
                            {quantity > 0 && (
                                <div className="quantity">
                                    <p>{quantity}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </StyledHeader>
        );
    }
}

const mapStateToProps = state => {
    const { categories } = state.navbar;
    const { currentCurrency, isOpen } = state.modalCurrencies;
    const { quantity } = state.cart;
    return { categories, currentCurrency, isOpen, quantity };
};

const mapDispatchToProps = () => {
    return {
        getCategories,
        getCurrencies,
        openModalCurrencies,
        openMiniCart,
    };
};

Header.propTypes = {
    categories: PropTypes.array.isRequired,
    currentCurrency: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps())(Header);
