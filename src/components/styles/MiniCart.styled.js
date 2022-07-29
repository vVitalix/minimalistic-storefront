import styled from "styled-components";

const StyledMiniCart = styled.section`
    width: 20.32rem;
    max-height: 75vh;
    margin: 0rem 4.5rem;
    padding: 2rem 1rem;
    background: var(--color-white);
    display: flex;
    flex-direction: column;

    .mini-cart-header {
        display: flex;

        h2 {
            margin-right: 0.25rem;
            font-size: 1rem;
            font-weight: 700;
        }

        p {
            font-size: 1rem;
            font-weight: 500;
        }
    }

    .mini-cart-items {
        margin: 2rem 0rem;
        overflow-y: auto;
        scrollbar-width: thin;

        .cart-item {
            margin-bottom: 2.3rem;
            padding: 0 0 0.2rem 0;
            border: none;

            &:last-child {
                margin-bottom: 0rem;
            }

            .product-details {
                margin-bottom: 0.5rem;

                a {
                    margin: 0rem;
                }

                .title {
                    h2,
                    h3 {
                        font-size: 1rem;
                        font-weight: 300;
                        line-height: 26px;
                    }

                    h2 {
                        margin: 0rem;
                    }
                }

                .price {
                    margin-top: 0.25rem;
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 26px;
                }
            }

            .product-attributes {
                div {
                    margin-bottom: 0.5rem;

                    &:last-child {
                        margin-bottom: 0rem;
                    }
                }

                h5 {
                    font-family: "Raleway", sans-serif;
                    text-transform: capitalize;
                    font-size: 0.875rem;
                    font-weight: 400;
                    line-height: 16px;
                }

                .swatch li {
                    width: 20px;
                    height: 20px;
                }

                .swatch div {
                    width: 16px;
                    height: 16px;
                }

                .text li {
                    width: auto;
                    min-width: 24px;
                    height: 24px;
                    margin-right: 0.5rem;
                    padding: 0rem 0.25rem;
                }

                .text span {
                    font-size: 0.875rem;
                }
            }

            .cart-item-controls {
                height: 11.875rem;

                .quantity {
                    margin-right: 0.5rem;

                    button {
                        width: 24px;
                        height: 24px;

                        svg {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    p {
                        font-size: 1rem;
                    }
                }

                .gallery-carousel-container {
                    width: 7.5rem;
                    height: 11.875rem;

                    .carousel-btns {
                        display: none;
                    }
                }
            }
        }
    }

    .mini-cart-total {
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-between;

        h4 {
            font-family: "Roboto", sans-serif;
            font-size: 1rem;
            font-weight: 500;
            line-height: 18px;
        }

        p {
            font-size: 1rem;
            font-weight: 700;
        }
    }

    .mini-cart-btns {
        display: flex;
        justify-content: space-between;

        button {
            width: 8.75rem;
            height: 2.75rem;
            font-family: "Raleway", sans-serif;
            text-transform: uppercase;
            font-size: 0.875rem;
            font-weight: 600;
            background: var(--color-white);
            border: 1px solid var(--color-black);
            cursor: pointer;
        }

        .check-out-btn {
            color: var(--color-white);
            background: var(--color-green);
            border: none;
        }
    }

    @media (max-width: 768px) and (min-width: 581px) {
        margin: 0rem 2rem;
    }

    @media (max-width: 580px) {
        margin: 0rem auto;
    }
`;

export default StyledMiniCart;
