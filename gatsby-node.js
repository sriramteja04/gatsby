const path = require('path');
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `/tours/${node.slug}`,
      component: path.resolve('./src/templates/TourTemplate.js'),
      context: {
        slug: node.slug,
      },
    });

    createPage({
      path: `/tourSaga/${node.slug}`,
      component: path.resolve('./src/templates/tourSagaTemplate.js'),
      context: {
        slug: node.slug,
      },
    });
  });
};
