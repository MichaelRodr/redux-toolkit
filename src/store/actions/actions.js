let TODO_ID = 0;


export const TODO_ADDED = 'TODO_ADDED';
export const TOGGLE_TODO ='TOGGLE_TODO';
export const SET_VISIBILITY_Filter = 'SET_VISIBILITY_FILTER';

/**
 * 
 * @param {string} text 
 * @returns action TODO_ADDED
 */
export const addTodo = (text) => {
  return {
    type: TODO_ADDED,
    payload:{
      id: TODO_ID++,
      text // cuando la key y el valor tienen el mismo nombre puede colocarce i solo
    }
  }
}

/**
 * 
 * @param {number} id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload:{
      id
      
    }
  }
}

/**
 * 
 * @param {string} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
  return {
    type:SET_VISIBILITY_Filter,
    payload:{
      filter
    }
  }
}