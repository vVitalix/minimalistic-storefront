import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
//REDUCERS
import { getProducts } from "../../features/productList/productListSlice";
//COMPONENTS
import ProductCard from "../ProductCard";

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

  render() {
    const { defaultCategory, products } = this.props;
    const { categoryName } = this.props.params;
    return (
      <section>
        <h2>{categoryName ? categoryName : defaultCategory}</h2>
        <div>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(props => <ProductList {...props} params={useParams()} />);
