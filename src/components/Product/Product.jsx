import React, { Component } from "react";
import { useParams } from "react-router-dom";

class Product extends Component {
  render() {
    const { productId } = this.props.params;
    console.log(productId);
    return <div>Product</div>;
  }
}

export default props => <Product {...props} params={useParams()} />;
