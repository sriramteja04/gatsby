import React from 'react';
import classes from '../../css/tour.module.css';
import { Link } from 'gatsby';

const Tour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour;

  return (
    <article className={classes.tour}>
      <div className={classes.footer}>
        <h3>{name}</h3>
        <div className={classes.info}>
          <h4 className={classes.country}>
            <Link className={classes.country} to={`/tourSaga/${slug}`}>
              View Images
            </Link>
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

export default Tour;
