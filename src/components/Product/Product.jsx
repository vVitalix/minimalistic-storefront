import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
//REDUCERS
import { getSingleProduct, clearProductState } from "../../features/product/productSlice";
import { addToCart } from "../../features/cart/cartSlice";
//COMPONENTS
import ProductAttributes from "../ProductAttributes";
import Gallery from "./Gallery";
import Title from "../ProductDetails/Title";
import Price from "../ProductDetails/Price";
//STYLES
import StyledProduct from "../styles/Product.styled";

class Product extends Component {
  componentDidMount() {
    const { productId } = this.props.params;

    this.props.getSingleProduct(productId);

    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    const { productId } = this.props.params;

    if (productId !== prevProps.params.productId) {
      this.props.getSingleProduct(productId);

      window.scrollTo(0, 0);
    }
  }

  componentWillUnmount() {
    this.props.clearProductState();
  }

  render() {
    const { id, name, brand, inStock, gallery, description, attributes, prices } =
      this.props.product;
    const { product, selectedAttributes, mainImgIndex, currentCurrency } = this.props;
    const currentPrice =
      prices && prices.find(price => price.currency.label === currentCurrency.label);

    return (
      <StyledProduct cursor={inStock ? "pointer" : "default"} opacity={inStock ? 1 : 0.5}>
        <Gallery name={name} gallery={gallery} mainImgIndex={mainImgIndex} />
        <div className="info-container">
          <Title name={name} brand={brand} inStock={inStock} />
          <ProductAttributes
            id={id}
            attributes={attributes}
            selectedAttributes={selectedAttributes}
            setAttributeFromPlp={false}
            disabled={!inStock}
          />
          <h5>Price:</h5>
          <Price currentPrice={currentPrice} inStock={inStock} />
          <button
            onClick={() => {
              this.props.addToCart({ product, selectedAttributes });
            }}
            disabled={!inStock}
          >
            {inStock ? "Add To Cart" : "Out Of Stock"}
          </button>
          <div className="description">{parse(`${description}`)}</div>
        </div>
      </StyledProduct>
    );
  }
}

const mapStateToProps = state => {
  const { product, selectedAttributes, mainImgIndex } = state.product;
  const { currentCurrency } = state.modalCurrencies;
  return { product, selectedAttributes, mainImgIndex, currentCurrency };
};

const mapDispatchToProps = () => {
  return {
    getSingleProduct,
    clearProductState,
    addToCart,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(props => <Product {...props} params={useParams()} />);
