import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Title from '../components/Title';
import Grid from '../components/Grid';

const Wrapper = styled.main`
  @media screen and (min-width: 768px) {
    padding: 3rem 0;
  }
`;

const Thumb = styled(GatsbyImage)`
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

const PhotoCategory = ({ data }) => {
  console.log(data);
  const { nodes: photos } = data.allWpPhoto;
  console.log(photos);
  const { name } = data.wpCategory;
  const gridContent = photos.map((photoData) => {
    const { id, title } = photoData;
    // const { attribution, url } = photoData.photoAttributes;
    const picture = getImage(photoData.featuredImage.node.localFile);
    return (
      <Grid item key={id}>
        <Thumb image={picture} alt={title} />
      </Grid>
    );
  });
  return (
    <>
      <SEO title={capitalize(name)} />
      <Layout>
        <Wrapper>
          <Title>{name}</Title>
          <Grid container>{gridContent}</Grid>
        </Wrapper>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    wpCategory(slug: { eq: $slug }) {
      slug
      name
    }
    allWpPhoto(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      sort: { fields: date, order: ASC }
    ) {
      nodes {
        id
        photoAttributes {
          attribution
          url
        }
        title
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;

export default PhotoCategory;
