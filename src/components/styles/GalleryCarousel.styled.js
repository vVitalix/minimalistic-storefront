import styled from "styled-components";

const StyledGalleryCarousel = styled.div`
  position: relative;
  width: 12.5rem;
  height: 18rem;

  .gallery-carousel {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;

    .img-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 250ms ease-in-out;

      img {
        width: inherit;
        height: 100%;
        object-fit: cover;
      }
    }

    .currentSlide {
      opacity: 1;
      transform: translateX(0);
    }

    .nextSlide {
      transform: translateX(100%);
    }

    .previousSlide {
      transform: translateX(-100%);
    }
  }

  .carousel-btns {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: 3.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: space-between;

    button {
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: var(--color-transparentBlack);
      cursor: pointer;
    }
  }
`;

export default StyledGalleryCarousel;
