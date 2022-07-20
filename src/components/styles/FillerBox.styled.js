import styled from "styled-components";

const FillerBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height};
  opacity: 0;
  z-index: 20;
`;

export default FillerBox;
