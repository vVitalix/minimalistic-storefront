import styled from "styled-components";

const StyledCart = styled.section`
  width: 100vw;
  min-height: calc(100vh - 5rem);
  margin-top: 5rem;
  padding: 5rem 6.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > h1 {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
    line-height: 40px;
  }

  .cart-items {
    width: 100%;
    margin-top: 3.25rem;
  }

  .cart-total {
    width: 17.5rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    div {
      width: 100%;
      margin-bottom: 0.5rem;
      display: flex;

      h4 {
        width: 40%;
        font-size: 1.5rem;
        font-weight: 400;
      }

      p {
        width: 60%;
        font-size: 1.5rem;
        font-weight: 700;
      }

      .total {
        font-weight: 500;
      }
    }

    a {
      width: 100%;
      margin-top: 0.5rem;

      button {
        width: 100%;
        height: 2.75rem;
        color: var(--color-white);
        font-family: "Raleway", sans-serif;
        text-transform: uppercase;
        font-size: 0.875rem;
        font-weight: 600;
        border: none;
        background: var(--color-green);
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) and (min-width: 671px) {
    padding: 5rem 3rem;
  }

  @media (max-width: 670px) and (min-width: 581px) {
    padding: 5rem 3rem;

    .cart-item {
      flex-direction: column;

      .cart-item-controls {
        margin-top: 1.5rem;
      }
    }
  }

  @media (max-width: 580px) {
    padding: 5rem 1rem;

    & > h1 {
      align-self: center;
    }

    .cart-items {
      display: flex;
      flex-direction: column;
      align-items: center;

      .cart-item {
        flex-direction: column;

        .product-details {
          align-items: center;

          .title {
            text-align: center;

            h2 {
              margin-right: 0rem;
            }
          }
        }

        .cart-item-controls {
          margin-top: 1.5rem;
        }
      }
    }

    .cart-total {
      align-self: center;
    }
  }
`;

export default StyledCart;
