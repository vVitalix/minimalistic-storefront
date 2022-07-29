import styled from "styled-components";

const StyledProductList = styled.section`
    width: 100vw;
    min-height: calc(100vh - 5rem);
    margin-top: 5rem;
    padding: 5rem 6.25rem;

    & > h1 {
        text-transform: capitalize;
        font-size: 2.625rem;
        font-weight: 400;
        line-height: 4.25rem;
    }

    & > div {
        margin-top: 6.25rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(24.125rem, 1fr));
        grid-column-gap: 2.5rem;
        grid-row-gap: 6.25rem;
    }

    @media (max-width: 768px) and (min-width: 581px) {
        padding: 5rem 3rem;
    }

    @media (max-width: 580px) {
        padding: 5rem 1rem;

        & > h1 {
            text-align: center;
        }
    }
`;

export default StyledProductList;
