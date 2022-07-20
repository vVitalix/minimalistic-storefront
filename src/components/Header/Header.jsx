import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
//REDUCERS
import { getCategories } from "../../features/navbar/navbarSlice";
import {
  getCurrencies,
  openModalCurrencies,
} from "../../features/modalCurrencies/modalCurrenciesSlice";
import { openMiniCart } from "../../features/cart/cartSlice";
import { getProducts } from "../../features/productList/productListSlice";
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
    const { categories, defaultCategory, currentCurrency, isOpen, quantity } = this.props;

    return (
      <StyledHeader rotate={isOpen ? "rotate(180deg)" : "rotate(0deg)"}>
        <nav>
          <ul className="category-list">
            {categories.map(category => {
              return (
                <NavLink
                  key={category.name}
                  to={`category/${category.name}`}
                  className={({ isActive }) => (isActive ? "category active" : "category")}
                >
                  <li>{category.name}</li>
                </NavLink>
              );
            })}
          </ul>
          <div className="logo">
            <Link
              to="/"
              onClick={() => {
                this.props.getProducts(defaultCategory);
              }}
            >
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
  const { categories, defaultCategory } = state.navbar;
  const { currentCurrency, isOpen } = state.modalCurrencies;
  const { quantity } = state.cart;
  return { categories, defaultCategory, currentCurrency, isOpen, quantity };
};

const mapDispatchToProps = () => {
  return {
    getCategories,
    getCurrencies,
    getProducts,
    openModalCurrencies,
    openMiniCart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Header);
