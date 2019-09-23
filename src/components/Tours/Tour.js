import React from 'react';
import { FaMap } from 'react-icons/fa';
import classes from '../../css/tour.module.css';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

const Tour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour;
  const mainImage = images[0].fluid;
  return (
    <article className={classes.tour}>
      <div className={classes.imgContainer}>
        <Image fluid={mainImage} className={classes.img} alt={name} />
        <Link className={classes.link} to={`/tours/${slug}`}>
          Details
        </Link>
      </div>
      <div className={classes.footer}>
        <h3>{name}</h3>
        <div className={classes.info}>
          <h4 className={classes.country}>
            <FaMap className={classes.icon}>{country}</FaMap>
          </h4>
          <div className={classes.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  );
};

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

export default Tour;
