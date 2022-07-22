import styled from "styled-components";

const StyledProduct = styled.section`
  width: 100vw;
  min-height: calc(100vh - 5rem);
  margin-top: 5rem;
  padding: 5rem 6.25rem;
  display: flex;

  .info-container {
    min-width: 18.25rem;
    max-width: 18.25rem;
    margin-left: 6.25rem;

    .title {
      margin-bottom: 2.625rem;
    }

    .product-attributes {
      margin-bottom: 1rem;

      .swatch li,
      .text li {
        cursor: ${({ cursor }) => cursor};
      }
    }

    h5 {
      text-transform: uppercase;
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 18px;
      margin-bottom: 0.5rem;
    }

    .price {
      margin-bottom: 1.5rem;
    }

    button {
      width: 100%;
      height: 3.25rem;
      margin-bottom: 2.5rem;
      color: var(--color-white);
      font-family: "Raleway", sans-serif;
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      background: var(--color-green);
      cursor: ${({ cursor }) => cursor};
      opacity: ${({ opacity }) => opacity};
    }

    .description {
      &,
      * {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-weight: 400;
      }

      li {
        list-style: initial;
      }
    }
  }
`;

export default StyledProduct;
