import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//REDUCERS
import {
    setCurrency,
    closeModalCurrencies,
} from "../../features/modalCurrencies/modalCurrenciesSlice";
//STYLES
import FillerBox from "../styles/FillerBox.styled";
import Overlay from "../styles/Overlay.styled";
import StyledModalCurrencies from "../styles/ModalCurrencies.styled";

class ModalCurrencies extends Component {
    render() {
        const { currencies } = this.props;

        return (
            <>
                <FillerBox
                    onClick={() => this.props.closeModalCurrencies()}
                    height={"4.062rem"}
                />
                <Overlay
                    onClick={() => this.props.closeModalCurrencies()}
                    height={"4.062rem"}
                    background={"transparent"}
                >
                    <StyledModalCurrencies onClick={e => e.stopPropagation()}>
                        {currencies.map(currency => {
                            return (
                                <li
                                    key={currency.label}
                                    onClick={() => {
                                        this.props.setCurrency(currency);
                                        this.props.closeModalCurrencies();
                                    }}
                                >
                                    {currency.symbol} {currency.label}
                                </li>
                            );
                        })}
                    </StyledModalCurrencies>
                </Overlay>
            </>
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
        closeModalCurrencies,
    };
};

ModalCurrencies.propTypes = {
    currencies: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps())(ModalCurrencies);
