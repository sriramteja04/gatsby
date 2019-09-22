import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

const Header = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData);

  // console.log(info);

  return (
    <div>
      <h3>Author {info.author}</h3>
      <h3>Title {info.title}</h3>
    </div>
  );
};

export default Header;
