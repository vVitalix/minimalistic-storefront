import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--color-white);
  color: var(--color-black);
  font-family: 'Raleway', sans-serif;
}

h5 {
  font-family: 'Roboto Condensed', sans-serif;
}

a {
  color: var(--color-black);
  text-decoration: none;
}

li {
  list-style: none;
}

li > span {
  font-family: 'Source Sans Pro', sans-serif;
}






:root {
--color-green: #5ECE7B;
--color-white: #FFFFFF;
--color-black: #1D1F22;
--color-grey: #8D8F9A;
--color-lightGrey: #EEEEEE;
--color-transparentBlack: rgba(0, 0, 0, 0.73);
--color-transparentGrey: rgba(57, 55, 72, 0.22);
--shadow-boxShadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
  


/* --color-UQred: red;
--color-lightBG: #f7f7f7;
--color-fontOpaque: grey;
--color-lightBorder: #f2f2f2;
--color-lightGrey: #bfbfbf;
--color-darkGrey: #2b2b2b;
--color-messageBG: #dae7ef;
--color-placeHolder: #e9e9e9;
--space-Huge: 80px;
--space-Large: 40px;
--space-Big: 25px;
--space-Default: 20px;
--space-Small: 15px;
--space-Mini: 10px;
--space-Tiny: 5px;
--space-pagePadding: var(--space-Small);
--space-productTileMobileIndent: 8px;
--width-MainColumn: 1440px;
--height-header: 52px;
--height-swatchDimension: 20px;
--height-window: 100%;
--scroll-window: 0; */

}


.gallery-carousel {
  width: 12.5rem;
  height: 18rem;
  position: relative;
  display: flex;
  overflow: hidden;
}

.gallery-carousel .img-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 250ms ease-in-out;
}

.gallery-carousel .currentSlide {
  opacity: 1;
  transform: translateX(0);
}

.previousSlide {
  transform: translateX(-100%);
}

.nextSlide {
  transform: translateX(100%);
}
`;

export default GlobalStyles;
