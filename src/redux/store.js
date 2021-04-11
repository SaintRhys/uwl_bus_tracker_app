import {createStore, combineReducers} from 'redux';
import nightReducer from './reducers/nightReducer';

const rootReducer = combineReducers({
  night: nightReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
