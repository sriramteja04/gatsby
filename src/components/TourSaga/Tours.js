import React from 'react';

import Tour from './Tour';
import classes from '../../css/items.module.css';
import { Route } from 'react-router-dom';
import TourImage from './TourImage';

const Tours = ({ tours }) => {
  // console.log(tours);
  return (
    <section className={classes.tours}>
      <h1>Our Saga Tours</h1>
      <div className={classes.center}>
        {tours.map(tour => (
          <Tour key={tour.sys.id} tour={tour.fields} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
