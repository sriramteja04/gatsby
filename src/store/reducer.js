import * as actionType from './actions/actionType';

const initialState = {
  count: 0,
  tours: [],
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

    default:
      return state;
  }
};

export default reducer;
