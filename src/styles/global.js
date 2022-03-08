import styled, { createGlobalStyle } from 'styled-components';
import {
  typography,
  Container,
  size,
  Input,
  colors,
  mediaQueries,
} from '@everlywell/leaves';
import ariesTheme from './ariesTheme';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    font-family: ${typography.type.nexa};
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: ${colors.teal1};
    ${mediaQueries.forTabletVerticalDown} {
      background: ${colors.white};
    }
    font-size: 100%;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    font-family: "EW Nexa", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: ${typography.weight.regular};
    font-family: ${typography.type.nexa};
    color: rgb(${ariesTheme.primaryTextColor});
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  button,
  input {
    font-family: inherit;
    font-size: inherit;
  }

  ul {
    list-style-type: none;
  }

  .ReactModal__Body--open {
    overflow: hidden;
  }
  
  .ReactModal__Overlay {
    backdrop-filter: blur(3px);
  }

  [id*='error'] {
    margin-bottom: 4px;
  }
  
`;

const HyphenatedWord = styled.span`
  white-space: nowrap;
`;

const MainContainerWrapper = styled(Container)`
  ${mediaQueries.forTabletHorizontalUp} {
    padding-left: ${size.xl2}px;
    padding-right: ${size.xl2}px;
  }
`;

const InputField = styled(Input)`
  input[type='text'],
  input[type='password'],
  input[type='text']:focus,
  input[type='password']:focus {
    height: 48px;
    box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.1);
    border: solid 1px ${colors.green2};
    background-color: ${colors.white};
  }
`;

export default GlobalStyle;
export { HyphenatedWord, MainContainerWrapper, InputField };
