import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const AboutTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const profileImage = getImage(frontmatter.profile_image);
  const logoImage = getImage(frontmatter.logo_image);

  return (
    <Layout title={frontmatter.title}>
      <AboutWrapper>

        <AboutImageGroup>
          <AboutImageWrapper image={profileImage} alt="" />
          <AboutImageWrapper image={logoImage} alt="" />
        </AboutImageGroup>

        <AboutCopy dangerouslySetInnerHTML={{ __html: html }} />
      </AboutWrapper>
    </Layout>
  );
};

export default AboutTemplate;

const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  @media screen and (max-width: 1000px) {
    & {
      flex-direction: column;
    }

    & > * {
      margin-top: 2rem;
      width: 100%;
      text-align: center;
    }
  }
`;

const AboutImageGroup = styled.div`
  display: flex;
  flex-direction: column
`

const AboutImageWrapper = styled(GatsbyImage)`
  display: block;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  margin-top: 0.5rem;
  margin-bottom:  0.5rem;
`;

const AboutCopy = styled.div`
  max-width: 60ch;

  & p {
    font-size: var(--size-400);
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
