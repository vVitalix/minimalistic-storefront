import styled from "styled-components";

const CartOverlay = styled.div`
  position: fixed;
  top: 5rem;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--color-transparentGrey);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 10;
`;

export default CartOverlay;
