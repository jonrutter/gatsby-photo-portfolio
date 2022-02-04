import { useStaticQuery, graphql } from 'gatsby';

export const useNavigationQuery = () => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      allWpMenu {
        edges {
          node {
            menuItems {
              nodes {
                id
                label
                path
              }
            }
          }
        }
      }
    }
  `);
  return data;
};
