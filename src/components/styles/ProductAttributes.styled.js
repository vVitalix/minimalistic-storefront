import styled from "styled-components";

const StyledProductAttributes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    div {
        margin-bottom: 1rem;
    }

    h5 {
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 18px;
        margin-bottom: 0.5rem;
    }

    ul {
        display: flex;
    }

    .swatch li {
        width: 36px;
        height: 36px;
        margin-right: 0.375rem;
        padding: 1px;
        border: 1px solid transparent;
        cursor: pointer;
    }

    .swatch div {
        width: 32px;
        height: 32px;
    }

    .swatch .selected {
        border: 1px solid var(--color-green);
    }

    .text li {
        width: 63px;
        height: 45px;
        margin-right: 0.5rem;
        border: 1px solid var(--color-black);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .text span {
        font-size: 1rem;
        font-weight: 400;
    }

    .text .selected {
        background: var(--color-black);
        color: var(--color-white);
    }
`;

export default StyledProductAttributes;
