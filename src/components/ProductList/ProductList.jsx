import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
//REDUCERS
import {
    getProducts,
    clearProductListState,
} from "../../features/productList/productListSlice";
//COMPONENTS
import ProductCard from "../ProductCard";
import Loader from "../Loader";
import PageNotFound from "../PageNotFound";
//STYLES
import StyledProductList from "../styles/ProductList.styled";

class ProductList extends Component {
    componentDidMount() {
        const { defaultCategory } = this.props;
        const { categoryName } = this.props.params;

        this.props.getProducts(categoryName ? categoryName : defaultCategory);

        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        const { defaultCategory } = this.props;
        const { categoryName } = this.props.params;

        if (categoryName !== prevProps.params.categoryName) {
            this.props.getProducts(
                categoryName ? categoryName : defaultCategory
            );

            window.scrollTo(0, 0);
        }
    }

    componentWillUnmount() {
        this.props.clearProductListState();
    }

    render() {
        const {
            products,
            productsAreLoading,
            productsNotFound,
            defaultCategory,
        } = this.props;

        const { categoryName } = this.props.params;

        return (
            <>
                {productsAreLoading && <Loader />}
                {!productsAreLoading && (
                    <>
                        {productsNotFound && <PageNotFound />}
                        {!productsNotFound && (
                            <StyledProductList>
                                <h1>
                                    {categoryName
                                        ? categoryName
                                        : defaultCategory}
                                </h1>
                                <div>
                                    {products.map(product => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </div>
                            </StyledProductList>
                        )}
                    </>
                )}
            </>
        );
    }
}

const mapStateToProps = state => {
    const { products, productsAreLoading, productsNotFound } =
        state.productList;

    const { defaultCategory } = state.navbar;

    return { products, productsAreLoading, productsNotFound, defaultCategory };
};

const mapDispatchToProps = () => {
    return {
        getProducts,
        clearProductListState,
    };
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    productsAreLoading: PropTypes.bool.isRequired,
    productsNotFound: PropTypes.bool.isRequired,
    defaultCategory: PropTypes.string.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(props => <ProductList {...props} params={useParams()} />);
