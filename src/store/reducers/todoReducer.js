
import { TODO_ADDED, TOGGLE_TODO } from "../actions/actions";

let initialState =[];

export const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case TODO_ADDED:
      return [
        ...state,
        {
          id:action.payload.id,
          text:action.payload.text,
          competed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo)=>{
        return (todo.id === state.payload.id)
        ?
        {...todo,
        compleetd: !todo.completed
        }
        : todo
      })
      default:
        return state;
  }
}

