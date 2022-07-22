import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-height: 5rem;
  padding: 0rem 6.25rem;
  background: var(--color-white);
  z-index: 10;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .category-list {
    width: 30%;
    height: 5rem;
    display: flex;
    justify-content: flex-start;

    li {
      height: 100%;
      padding: 1.75rem 1rem;
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 400;
    }

    .category.active li {
      font-weight: 600;
      color: var(--color-green);
      border-bottom: 2px solid var(--color-green);
    }
  }

  .shopping-tools {
    width: 30%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .currency {
      margin-right: 1.375rem;
      display: flex;
      cursor: pointer;

      p {
        margin-right: 0.625rem;
        font-size: 1.125rem;
        font-weight: 500;
      }

      svg {
        margin-top: 0.8rem;
        transform: ${({ rotate }) => rotate};
      }
    }

    .cart {
      position: relative;
      display: flex;
      cursor: pointer;

      .quantity {
        position: absolute;
        top: -40%;
        left: 65%;
        width: 1.25rem;
        height: 1.25rem;
        background: var(--color-black);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          margin-top: 0.05rem;
          color: var(--color-white);
          font-family: "Roboto", sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
        }
      }
    }
  }
`;

export default StyledHeader;
