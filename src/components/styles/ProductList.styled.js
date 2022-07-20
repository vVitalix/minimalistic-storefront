import styled from "styled-components";

const StyledProductList = styled.section`
  min-height: calc(100vh - 5rem);
  margin-top: 5rem;
  padding: 5rem 6.25rem 0rem 6.25rem;

  & > h1 {
    text-transform: capitalize;
    font-size: 2.625rem;
    font-weight: 400;
    line-height: 4.25rem;
  }

  & > div {
    margin: 6.25rem 0rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24.125rem, 1fr));
    grid-column-gap: 2.5rem;
    grid-row-gap: 6.25rem;
  }
`;

export default StyledProductList;
