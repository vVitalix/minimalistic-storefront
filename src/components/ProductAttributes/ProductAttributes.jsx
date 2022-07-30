import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//REDUCERS
import { setAttributePlp } from "../../features/productList/productListSlice";
import { setAttributePdp } from "../../features/product/productSlice";
//STYLES
import StyledProductAttributes from "../styles/ProductAttributes.styled";

class ProductAttributes extends Component {
    render() {
        const {
            id,
            attributes,
            selectedAttributes,
            setAttributeFromPlp,
            disabled,
        } = this.props;

        return (
            <StyledProductAttributes className="product-attributes">
                {attributes &&
                    attributes.map(attribute =>
                        attribute.type === "swatch" ? (
                            <div key={attribute.id}>
                                <h5>{attribute.name}:</h5>

                                <ul className={attribute.type}>
                                    {attribute.items.map(item => (
                                        <li
                                            key={item.id}
                                            onClick={() => {
                                                if (disabled) return;
                                                setAttributeFromPlp
                                                    ? this.props.setAttributePlp(
                                                          {
                                                              id,
                                                              attribute,
                                                              item,
                                                          }
                                                      )
                                                    : this.props.setAttributePdp(
                                                          { attribute, item }
                                                      );
                                            }}
                                            className={
                                                selectedAttributes.attributes.find(
                                                    selectedAttribute =>
                                                        selectedAttribute
                                                            .items[0].id ===
                                                            item.id &&
                                                        selectedAttribute.id ===
                                                            attribute.id
                                                )
                                                    ? "selected"
                                                    : ""
                                            }
                                        >
                                            <div
                                                style={{
                                                    backgroundColor: `${item.value}`,
                                                }}
                                            ></div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div key={attribute.id}>
                                <h5>{attribute.name}:</h5>

                                <ul className={attribute.type}>
                                    {attribute.items.map(item => (
                                        <li
                                            key={item.id}
                                            onClick={() => {
                                                if (disabled) return;
                                                setAttributeFromPlp
                                                    ? this.props.setAttributePlp(
                                                          {
                                                              id,
                                                              attribute,
                                                              item,
                                                          }
                                                      )
                                                    : this.props.setAttributePdp(
                                                          { attribute, item }
                                                      );
                                            }}
                                            className={
                                                selectedAttributes.attributes.find(
                                                    selectedAttribute =>
                                                        selectedAttribute
                                                            .items[0].id ===
                                                            item.id &&
                                                        selectedAttribute.id ===
                                                            attribute.id
                                                )
                                                    ? "selected"
                                                    : ""
                                            }
                                        >
                                            <span>{item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    )}
            </StyledProductAttributes>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = () => {
    return {
        setAttributePlp,
        setAttributePdp,
    };
};

ProductAttributes.propTypes = {
    id: PropTypes.string.isRequired,
    attributes: PropTypes.array.isRequired,
    selectedAttributes: PropTypes.object.isRequired,
    setAttributeFromPlp: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(ProductAttributes);
