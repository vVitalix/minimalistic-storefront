import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
--color-green: #5ECE7B;
--color-white: #FFFFFF;
--color-black: #1D1F22;
--color-grey: #8D8F9A;
--color-lightGrey: #EEEEEE;
--color-lightGreyCart: #e5e5e5;
--color-transparentBlack: rgba(0, 0, 0, 0.73);
--color-transparentGrey: rgba(57, 55, 72, 0.22);
--shadow-boxShadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
}

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
  overflow-x: hidden;
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
`;

export default GlobalStyles;
