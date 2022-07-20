import styled from "styled-components";

const StyledProductCard = styled.article`
  position: relative;
  width: 24.125rem;
  height: 27.75rem;
  margin: 0 auto;
  padding: 1rem;
  transition: 0.5s ease all;

  &:hover {
    box-shadow: var(--shadow-boxShadow);

    .card-attributes-container,
    button {
      transform: translate(0, 0);
      opacity: 1;
      visibility: visible;
    }
  }

  .cover-img-container {
    position: relative;
    width: 22.125rem;
    height: 20.625rem;
    margin-bottom: 1.5rem;
    overflow: hidden;

    a {
      width: inherit;
      height: 100%;
    }

    img {
      width: inherit;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      opacity: ${({ opacity }) => opacity};
    }
  }

  .card-attributes-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem 1rem 0rem 1rem;
    background: rgba(255, 255, 255, 0.95);
    display: ${({ display }) => display};
    flex-direction: column;
    justify-content: flex-end;
    transform: translate(0, 100%);
    opacity: 0;
    visibility: hidden;
    transition: 0.5s ease all;

    .product-attributes h5 {
      font-family: "Raleway", sans-serif;
      font-size: 1rem;
      font-weight: 500;
    }

    .swatch li {
      width: 26px;
      height: 26px;
    }

    .swatch div {
      width: 22px;
      height: 22px;
    }

    .text li {
      width: 42px;
      height: 30px;
    }

    .text span {
      font-size: 0.8rem;
    }
  }

  button {
    position: absolute;
    bottom: 72px;
    right: 31px;
    width: 3.25rem;
    height: 3.25rem;
    background: var(--color-green);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
    opacity: 0;
    visibility: hidden;
    transition: 0.5s ease all;
    cursor: pointer;

    & svg {
      width: 1.5rem;
      height: 1.5rem;

      & path {
        fill: var(--color-white);
      }
    }
  }

  .out-of-stock {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--color-grey);
    pointer-events: none;
  }

  .product-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .title {
      display: flex;

      h2,
      h3 {
        font-size: 1.125rem;
        font-weight: 300;
        line-height: 29px;
        margin-bottom: 0;
      }
    }

    .price {
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 29px;
    }
  }
`;

export default StyledProductCard;
