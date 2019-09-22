import React from 'react';
import Tours from '../components/Tours/Tours';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const tours = ({ data }) => {
//   console.log(data);
  return (
    <Layout>
      <h3>Tours Page</h3>
      <Tours tours={data.tours.edges} />
    </Layout>
  );
};

export const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          id: contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default tours;
