import React from 'react';
import { graphql } from 'gatsby';
import ReactGA from 'react-ga';

import Layout from '../components/layout.js';
import SEO from '../components/seo';
import Introduction from '../components/Introduction/index';
import HomePageInfo from '../components/HomePageInfo/index';
import SiteFooter from 'components/SiteFooter/index';

ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID);

const Home = ({ data }) => {
  const {
    heroText,
    welcomeText,
    welcomeTextLong,
    customerLogo,
  } = data.contentfulOptInLandingPage;

  const welcomeTextString = welcomeTextLong?.welcomeTextLong || welcomeText;

  return (
    <Layout>
      <SEO title="Home" />
      <Introduction
        heroText={heroText}
        welcomeMsg={welcomeTextString}
        customerLogo={customerLogo?.fixed?.src}
      />
      <HomePageInfo />
      <SiteFooter />
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery($brandId: String!) {
    contentfulOptInLandingPage(brandId: { eq: $brandId }) {
      partnerId
      brandId
      partnerName
      heroText
      welcomeText
      welcomeTextLong {
        welcomeTextLong
      }
      customerLogo {
        fixed(cropFocus: CENTER) {
          width
          height
          src
          srcSet
        }
      }
    }
  }
`;

export default Home;
