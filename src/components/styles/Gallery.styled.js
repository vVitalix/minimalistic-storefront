import styled from "styled-components";

const StyledGallery = styled.div`
    max-width: 45.125rem;
    height: 32rem;
    display: flex;
    flex-grow: 1;

    .small-imgs-container {
        min-width: 5rem;
        height: 100%;
        margin-right: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        overflow-y: auto;
        scrollbar-width: thin;

        div {
            height: 5rem;
            width: 5rem;
            margin-bottom: 1rem;

            &:last-child {
                margin-bottom: 0rem;
            }

            img {
                width: inherit;
                height: 100%;
                object-fit: cover;
                object-position: top center;
            }
        }
    }

    .main-img-container {
        width: 100%;
        overflow: hidden;

        img {
            width: inherit;
        }
    }
`;

export default StyledGallery;
