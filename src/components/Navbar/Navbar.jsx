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
import ModalCurrencies from "../ModalCurrencies";

class Navbar extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getCurrencies();
  }

  render() {
    const { categories, defaultCategory, currentCurrency, isOpen, quantity } = this.props;

    return (
      <>
        <nav>
          <div className="nav-center">
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
            <Link
              to="/"
              onClick={() => {
                this.props.getProducts(defaultCategory);
              }}
            >
              <LogoIcon />
            </Link>
            <div className="shopping-tools">
              <div className="currency-container">
                <div
                  onClick={() => {
                    this.props.openModalCurrencies();
                  }}
                >
                  <p>{currentCurrency.symbol}</p>
                  <ChevronDownIcon />
                </div>
                {isOpen && <ModalCurrencies />}
              </div>
              <div
                onClick={() => {
                  this.props.openMiniCart();
                }}
                className="cart-container"
              >
                <CartIcon />
                <div className="quantity">
                  <p>{quantity}</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps())(Navbar);
