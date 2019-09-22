import React from 'react';

import HeaderHook from '../examples/Header-Hooks';
import Layout from '../components/Layout';
import HeaderStatic from '../examples/Header-static';
import { graphql } from 'gatsby';

const examples = props => {
  //   console.log(props);
  const { name, age } = props.data.site.siteMetadata.person;
  return (
    <Layout>
      <h1>This is examples page</h1>
      <HeaderHook />
      <HeaderStatic />
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    </Layout>
  );
};

export const getData = graphql`
  query {
    site {
      siteMetadata {
        person: data {
          name
          age
        }
      }
    }
  }
`;

export default examples;
