import { combineReducers } from 'redux';
import HotDogReducer from './HotDogReducer';

export default combineReducers({
  hotDog: HotDogReducer
});
