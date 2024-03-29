import React, { Component } from "react";
import PropTypes from "prop-types";
//STYLES
import StyledTitle from "../styles/Title.styled";

class Title extends Component {
    render() {
        const { name, brand, inStock } = this.props;

        return (
            <StyledTitle
                className="title"
                color={inStock ? "var(--color-black)" : "var(--color-grey)"}
            >
                <h2>{brand}</h2>
                <h3>{name}</h3>
            </StyledTitle>
        );
    }
}

Title.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
};

export default Title;
