import * as actionTypes from './actionType';

export const tourAction = () => {
  return {
    type: actionTypes.SHOW_TOUR,
  };
};

export const showImage = slug => {
  return {
    type: actionTypes.SHOW_IMAGE,
    payload: slug,
  };
};
