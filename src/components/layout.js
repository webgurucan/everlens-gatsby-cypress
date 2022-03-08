/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { ariesTheme } from '../styles/ariesTheme';
import * as S from '../styles/layout';
import { SUPPORT_ROOT } from 'utils/constants';

const everlywellLogo = require('images/everlywellLogo.svg');
const supportIcon = require('images/support.svg');

const supportLink = (
  <a name="support-link" href={SUPPORT_ROOT} target="_blank" rel="noreferrer">
    <img alt="" src={supportIcon} />
  </a>
);

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={ariesTheme}>
        <S.SiteHeader
          loggedIn={false}
          logoSrc={everlywellLogo}
          logoAlt="everlywell logo"
          cartComponent={supportLink}
        />
        <S.Layout>
          <main>{children}</main>
        </S.Layout>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
