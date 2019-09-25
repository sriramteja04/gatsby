import React from 'react';
import { graphql } from 'gatsby';
import classes from '../css/template.module.css';
import Layout from '../components/Layout';
import Image from 'gatsby-image';
// import { FaMoneyBillWave, FaMap } from 'react-icons';

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    // country,
    // days,
    // description: { description },
    images,
    // start,
    // journey,
  } = data.tour;
  // console.log(price);

  return (
    <Layout>
      <section className={classes.template}>
        <div className={classes.center}>
          <div className={classes.images}>
            {images.map((item, index) => {
              return (
                <Image
                  key={index}
                  fluid={item.fluid}
                  alt={name}
                  className={classes.image}
                />
              );
            })}
          </div>
          <h2>{name}</h2>
          {/* <div className={classes.info}>
            <p>
              <FaMoneyBillWave className={classes.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={classes.icon} />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days} days</h4>
          <p className={classes.desc}>{description}</p>
          <h2>daily schedule</h2>
          <ul className={classes.journey}>
            {journey.map((item, index) => {
              return <li key={index}>{item.day}</li>;
            })}
          </ul>
          <Link to="/tours">back to tours</Link> */}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      journey {
        day
        info
      }
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

export default TourTemplate;
