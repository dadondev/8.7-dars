import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
*, *::before, *::after {
  box-sizing: border-box;
  font-family: Montserrat;
}
/*
  2. Remove default margin
*/

a{
  text-decoration: none;
  color: black;
}
html{
    font-size: 62.5%;
    font-family: "Montserrat","DM sans";
}
html, body{
    height: 100%;
    background-color: #D6D6D6;
}
* {
  margin: 0;
}
button{
  background-color: transparent;
  border: none;
  cursor: pointer;
}
ul{
  list-style: none;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
html,
body, #root{
  font-family: "Poppins";
  font-size: 62.5%;
  height: 100%;
}
/*

  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;
export default GlobalStyle;
