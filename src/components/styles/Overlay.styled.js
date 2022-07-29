import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    top: ${({ height }) => height};
    left: 0;
    width: 100vw;
    height: calc(100vh - ${({ height }) => height});
    background: ${({ background }) => background};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 20;
`;

export default Overlay;
