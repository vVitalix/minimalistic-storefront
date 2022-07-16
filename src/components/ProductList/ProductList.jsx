import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
//REDUCERS
import { getProducts, clearProductListState } from "../../features/productList/productListSlice";
//COMPONENTS
import ProductCard from "../ProductCard";
//STYLES
import StyledProductList from "../styles/ProductList.styled";

class ProductList extends Component {
  componentDidMount() {
    const { defaultCategory } = this.props;
    const { categoryName } = this.props.params;

    this.props.getProducts(categoryName ? categoryName : defaultCategory);
  }

  componentDidUpdate(prevProps) {
    const { categoryName } = this.props.params;

    if (categoryName && categoryName !== prevProps.params.categoryName) {
      this.props.getProducts(categoryName);
    }
  }

  componentWillUnmount() {
    this.props.clearProductListState();
  }

  render() {
    const { defaultCategory, products } = this.props;
    const { categoryName } = this.props.params;

    return (
      <StyledProductList>
        <h1>{categoryName ? categoryName : defaultCategory}</h1>
        <div>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </StyledProductList>
    );
  }
}

const mapStateToProps = state => {
  const { defaultCategory } = state.navbar;
  const { products } = state.productList;
  return { defaultCategory, products };
};

const mapDispatchToProps = () => {
  return {
    getProducts,
    clearProductListState,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(props => <ProductList {...props} params={useParams()} />);
