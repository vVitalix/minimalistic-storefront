import styled from "styled-components";

const StyledModalCurrencies = styled.ul`
  width: 7.125rem;
  margin: 0rem 4.7rem;
  padding: 0.8rem 0rem;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-boxShadow);

  li {
    width: 7.125rem;
    padding: 0.5rem 0rem 0.5rem 1.25rem;
    font-size: 1.125rem;
    font-weight: 500;
  }

  li:hover {
    background: var(--color-lightGrey);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin: 0rem 1.4rem;
  }
`;

export default StyledModalCurrencies;
