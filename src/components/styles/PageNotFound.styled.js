import styled from "styled-components";

const StyledPageNotFound = styled.section`
    width: 100vw;
    min-height: calc(100vh - 5rem);
    margin-top: 5rem;
    padding: 5rem 6.25rem;

    & > h1 {
        font-size: 2.625rem;
        font-weight: 400;
        line-height: 4.25rem;
        color: var(--color-grey);
    }

    & > p {
        width: 70%;
        margin: 2rem 0rem;
        font-size: 1rem;
        font-weight: 400;
    }

    & > a {
        text-decoration: underline;
        font-size: 1rem;
        font-weight: 700;
        color: var(--color-green);
    }

    @media (max-width: 768px) and (min-width: 581px) {
        padding: 5rem 3rem;

        & > p {
            width: 100%;
        }
    }

    @media (max-width: 580px) {
        padding: 5rem 1rem;

        & > h1 {
            margin: 0rem 2rem;
            text-align: center;
        }

        & > p {
            width: 100%;
        }

        & > a {
            display: block;
            margin: 0rem 2rem;
            text-align: center;
        }
    }
`;

export default StyledPageNotFound;
