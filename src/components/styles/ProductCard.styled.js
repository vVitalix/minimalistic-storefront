import styled from "styled-components";

const StyledProductCard = styled.article`
  width: 24.125rem;
  height: 27.75rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: var(--shadow-boxShadow);
    transition: all 200ms ease-in-out;
  }

  .cover-img-container {
    width: 22.125rem;
    height: 20.625rem;

    img {
      width: inherit;
      height: 100%;
      object-fit: cover;
      object-position: top center;
    }
  }
`;

export default StyledProductCard;
