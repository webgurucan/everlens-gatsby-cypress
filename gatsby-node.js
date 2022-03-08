/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage, createRedirect } = actions;

  deletePage(page);

  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*';
  }

  createPage({
    ...page,
    context: {
      partnerId: parseInt(process.env.GATSBY_ENTERPRISE_PARTNER_ID),
      brandId: process.env.BRAND_ID,
    },
  });
};
