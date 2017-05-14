import { CREATE_TODO } from '../actionType.js';
import { DELETE_TODO } from '../actionType.js';

export function addTaskReducers( state = [] , action) {
  switch (action.type) {
    case CREATE_TODO:
      return [...state , action.payload];
    case DELETE_TODO:
      let deleteTask = action.payload.filter(t => {
          if (t === action.task) {
            return false;
          }
          return true;
        });
      return [...deleteTask];
    default:
      return state;
  }
}
