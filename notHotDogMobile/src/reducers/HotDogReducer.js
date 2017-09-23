import { LOADING, HOT_DOG, NOT_HOT_DOG, NULL_HOTDOG } from '../actions/types';

const INITIAL_STATE = {
  isHotDog: 0,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case HOT_DOG:
      return { ...state, isHotDog: 1, loading: false };
    case NOT_HOT_DOG:
      return { ...state, isHotDog: 2, loading: false };
    case NULL_HOTDOG:
      return { ...state, isHotDog: 0 };
    default:
      return state;
  }
};
