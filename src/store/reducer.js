import * as actionType from './actions/actionType';

const initialState = {
  count: 0,
  tours: [],
  image: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        count: state.count + 1,
      });

    case actionType.SUCCESS_TOUR:
      return {
        ...state,
        tours: action.payload,
      };

    case actionType.SHOW_IMAGE:
      return {
        ...state,
        image: state.tours.filter(tour => action.payload === tour.fields.slug),
      };

    default:
      return state;
  }
};

export default reducer;
