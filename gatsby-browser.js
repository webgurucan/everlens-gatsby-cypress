/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

function addFont() {
  // add EW Nexa fonts
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://cdn.everlywell.com/fonts/ew-font.css';
  document.head.appendChild(link);
}

// load the font before rendering the application to avoid a flicker
const onClientEntry = () => {
  addFont();
};

export { onClientEntry };
export { wrapRootElement } from './src/apollo/client.js';
