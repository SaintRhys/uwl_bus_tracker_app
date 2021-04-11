import {TOGGLE_Night} from '../actions/actionTypes';

const initialState = {
  isNight: false,
};

const adReducer = (state = initialState, action) => {
  //console.log('toggling ads');
  switch (action.type) {
    case TOGGLE_Night:
      return {...state, isNight: action.isNight};
    default:
      return state;
  }
};

export default adReducer;
