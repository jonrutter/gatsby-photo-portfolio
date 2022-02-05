const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allWpCategory {
        nodes {
          slug
        }
      }
    }
  `).then((result) => {
    //highlight-start
    result.data.allWpCategory.nodes.forEach((node) => {
      createPage({
        path: '/category/' + node.slug,
        component: path.resolve(`./src/templates/PhotoCategory.js`),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};
