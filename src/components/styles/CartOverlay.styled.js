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

  /* & > div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    opacity: 0;
  } */
`;

export default CartOverlay;
