import styled from "styled-components";

const StyledTitle = styled.div`
  h2,
  h3 {
    font-size: 1.875rem;
    line-height: 27px;
    color: ${({ color }) => color};
  }

  h2 {
    font-weight: 600;
    margin-bottom: 1rem;
    margin-right: 0.25rem;
  }

  h3 {
    font-weight: 400;
  }
`;

export default StyledTitle;
