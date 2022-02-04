import { useStaticQuery, graphql } from 'gatsby';

// TODO: ensure that GatsbyImage is correctly scaling background images. May need to add art direction for mobile devices.

export const useHomeBackgroundQuery = () => {
  const data = useStaticQuery(graphql`
    query HomeBackgroundQuery {
      wpPage(databaseId: { eq: 19 }) {
        Home_Page {
          background {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.77
                  formats: JPG
                  layout: FULL_WIDTH
                )
              }
            }
          }
        }
      }
    }
  `);
  return data;
};
