import { SAVE_COMMENT } from '../actions/types';

export default function(state= [], action) {
  switch(action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
      //return state.concat([action.payload]); same as above
    default:
      return state;
  }
}
