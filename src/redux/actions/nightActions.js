// ThemeActions.js -
import {TOGGLE_Night} from './actionTypes';

export const toggle_night = (state) => ({
  type: TOGGLE_Night,
  isNight: state,
});
