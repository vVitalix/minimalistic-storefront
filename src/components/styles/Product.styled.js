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

      h1,
      h3 {
        font-weight: 600;
        margin-top: 0.5rem;
      }

      li {
        list-style: initial;
        margin-top: 0.5rem;
      }
    }
  }

  @media (max-width: 1200px) and (min-width: 1001px) {
    .info-container {
      margin-left: 2rem;
    }
  }

  @media (max-width: 1000px) {
    padding: 5rem 3rem;
    flex-direction: column;
    align-items: center;

    .gallery {
      max-width: none;
      width: 26rem;
      flex-direction: column-reverse;

      .main-img-container {
        height: 26rem;
        overflow: visible;

        img {
          height: inherit;
          object-fit: contain;
        }
      }

      .small-imgs-container {
        height: 5rem;
        margin-top: 1rem;
        margin-right: 0;
        flex-direction: row;
        overflow: hidden;
        overflow-x: auto;

        div {
          margin-bottom: 0;
          margin-right: 1rem;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }

    .info-container {
      margin-left: 0rem;
      margin-top: 2rem;

      .title h2,
      .title h3 {
        margin-right: 0rem;
        text-align: center;
      }
    }
  }
`;

export default StyledProduct;
