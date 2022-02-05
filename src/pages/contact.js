import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Title from '../components/Title';
import SEO from '../components/SEO';

import { useContactQuery } from '../hooks/useContactInfoQuery';

const Wrapper = styled.main`
  @media (min-width: 768px) {
    padding: 3rem 0;
  }
`;

const Content = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Col = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    &:first-child {
      margin-right: 2rem;
    }
  }
`;

const Item = styled.li`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ProfilePicture = styled(GatsbyImage)`
  width: 100%;
  max-width: 100%;
  margin: auto;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.2s;
  &:hover {
    filter: grayscale(0%);
  }
`;

const Contact = () => {
  const contactData = useContactQuery();
  console.log(contactData);
  const { title } = contactData.wpPage;
  const { address, email, name, telephone } = contactData.wpPage.Contact_Info;
  const picture = getImage(contactData.wpPage.Contact_Info.picture.localFile);
  return (
    <>
      <SEO title="Contact" />
      <Layout>
        <Wrapper>
          <Title>{title}</Title>
          <Content>
            <Col>
              <ul>
                <Item>{name}</Item>
                <Item>{email}</Item>
                <Item>{telephone}</Item>
                <Item>
                  <address dangerouslySetInnerHTML={{ __html: address }} />
                </Item>
              </ul>
            </Col>
            <Col>
              <ProfilePicture image={picture} alt="Profile picture" />
            </Col>
          </Content>
        </Wrapper>
      </Layout>
    </>
  );
};

export default Contact;
