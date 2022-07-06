import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
//REDUCERS
import { getCategories } from "../../features/navbar/navbarSlice";
import { getCurrencies, openModal } from "../../features/modalCurrencies/modalCurrenciesSlice";
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
    const { categories, defaultCategory, currentCurrency, isOpen } = this.props;
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
                    this.props.openModal();
                  }}
                >
                  <p>{currentCurrency.symbol}</p>
                  <ChevronDownIcon />
                </div>
                {isOpen && <ModalCurrencies />}
              </div>
              <div className="cart-container">
                <CartIcon />
                <div className="amount-container">
                  <p className="total-amount">5</p>
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
  return { categories, defaultCategory, currentCurrency, isOpen };
};

const mapDispatchToProps = () => {
  return {
    getCategories,
    getCurrencies,
    getProducts,
    openModal,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(props => <Navbar {...props} params={useParams()} />);
