import { useStaticQuery, graphql } from 'gatsby';

export const useContactQuery = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      wpPage(databaseId: { eq: 24 }) {
        Contact_Info {
          address
          email
          name
          telephone
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 600)
              }
            }
          }
        }
        title
      }
    }
  `);

  return data;
};
