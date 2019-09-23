const path = require('path');
// exports.createPages = ({ actions: { createPage } }) => {
//   const products = require('./data/products.json');
//   products.forEach(product => {
//     createPage({
//       path: `/product/${product.slug}`,
//       component: require.resolve('./src/templates/product.js'),
//       context: {
//         title: product.title,
//         description: product.description,
//         image: product.image,
//         price: product.price,
//       },
//     });
//   });
// };
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
  console.log(data);
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `/tours/${node.slug}`,
      component: path.resolve('./src/templates/TourTemplate.js'),
      context: {
        slug: node.slug,
      },
    });
  });
};
