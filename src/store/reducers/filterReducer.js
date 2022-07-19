import { SET_VISIBILITY_Filter  } from "../actions/actions";

const initialState = 'SHOW_ALL';

export const filterReducer = (state = initialState, action) =>{
  switch (action.type) {
    case SET_VISIBILITY_Filter:
      return action.payload.filter
    default:
      return state;
  }
}