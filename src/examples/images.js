import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import img from '../images/pexels-3.jpeg';
import Image from 'gatsby-image';
import styled from 'styled-components';

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "pexels-1.jpeg" }) {
      childImageSharp {
        fixed(width: 250, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "pexels-2.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Images = () => {
  const data = useStaticQuery(getImages);
  return (
    <Wrapper>
      <article>
        <h3>Basic Image</h3>
        <img src={img} className="pixel" alt="pexel-1" />
      </article>
      <article>
        <h3>Fixed Image</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>Fluid Image</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;

  .pixel {
    width: 100%;
  }

  article {
    border: 3px solid royalblue;
    padding: 1rem 0;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`;

export default Images;
