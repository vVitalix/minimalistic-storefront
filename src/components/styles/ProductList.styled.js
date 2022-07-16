import styled from "styled-components";

const StyledProductList = styled.section`
  min-height: 80vh;
  padding: 0rem 6.25rem;

  & > h1 {
    margin-top: 5rem;
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
