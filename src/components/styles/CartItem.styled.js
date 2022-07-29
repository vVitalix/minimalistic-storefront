import styled from "styled-components";

const StyledCartItem = styled.div`
    padding: 1.5rem 0rem;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--color-lightGreyCart);

    &:last-child {
        border-bottom: 1px solid var(--color-lightGreyCart);
    }

    .product-details {
        margin-bottom: 1.25rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        a {
            margin-bottom: 1.25rem;
        }
    }

    .product-attributes {
        div:last-child {
            margin-bottom: 0rem;
        }

        h5 {
            text-transform: uppercase;
        }

        .swatch li,
        .text li {
            cursor: default;
        }
    }

    .cart-item-controls {
        height: 18rem;
        display: flex;

        .quantity {
            height: 100%;
            margin-right: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            button {
                width: 45px;
                height: 45px;
                border: none;
                background: var(--color-white);
                cursor: pointer;
            }

            p {
                font-size: 1.5rem;
                font-weight: 500;
            }
        }
    }
`;

export default StyledCartItem;
