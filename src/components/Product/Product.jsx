import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
//REDUCERS
import {
  getSingleProduct,
  clearProductState,
  setMainImg,
} from "../../features/product/productSlice";
import { addToCart } from "../../features/cart/cartSlice";
//COMPONENTS
import ProductAttributes from "../ProductAttributes";

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
      <div>
        <div className="gallery">
          <div className="images-container">
            <div className="main-img-container">
              <img width="400" src={gallery && gallery[mainImgIndex]} alt={`${name} main img`} />
            </div>
            <div className="small-imgages-container">
              {gallery &&
                gallery.map((img, index) => (
                  <div key={index} onClick={() => this.props.setMainImg({ index })}>
                    <img width="200" src={img} alt={`${name} small img`} />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div>
          <div className="title">
            <h2>{brand}</h2>
            <h3>{name}</h3>
          </div>
          <ProductAttributes
            id={id}
            attributes={attributes}
            selectedAttributes={selectedAttributes}
            setAttributeFromPlp={false}
            disabled={!inStock}
          />
          <h5>Price:</h5>
          <p className="price">
            {currentPrice && currentPrice.currency.symbol}
            {currentPrice && currentPrice.amount.toFixed(2)}
          </p>
          <button
            onClick={() => {
              this.props.addToCart({ product, selectedAttributes });
            }}
          >
            Add To Cart
          </button>
          <div className="description-container">{parse(`${description}`)}</div>
        </div>
      </div>
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
    setMainImg,
    addToCart,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(props => <Product {...props} params={useParams()} />);
