import React, { Component } from "react";
import { connect } from "react-redux";
//REDUCERS
import {
  setCurrency,
  closeModal,
} from "../../features/modalCurrencies/modalCurrenciesSlice";

class ModalCurrencies extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <ul className="currencies">
        {currencies.map(currency => {
          return (
            <li
              key={currency.label}
              onClick={() => {
                this.props.setCurrency(currency);
                this.props.closeModal();
              }}
            >
              {currency.symbol} {currency.label}
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { currencies } = state.modalCurrencies;
  return { currencies };
};

const mapDispatchToProps = () => {
  return {
    setCurrency,
    closeModal,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ModalCurrencies);
