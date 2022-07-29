import React, { Component } from "react";
//STYLES
import StyledPrice from "../styles/Price.styled";

class Price extends Component {
    render() {
        const { currentPrice, inStock } = this.props;

        return (
            <StyledPrice
                className="price"
                color={inStock ? "var(--color-black)" : "var(--color-grey)"}
            >
                {currentPrice && currentPrice.currency.symbol}
                {currentPrice && currentPrice.amount.toFixed(2)}
            </StyledPrice>
        );
    }
}

export default Price;
