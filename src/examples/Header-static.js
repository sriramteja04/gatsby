import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const getData = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`;
// {data.site.siteMetadata.description}
const HeaderStatic = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        return <div>{data.site.siteMetadata.description}</div>;
      }}
    />
  );
};

export default HeaderStatic;
