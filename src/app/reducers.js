import { combineReducers } from 'redux';
//type name
const CREATE_TODO = 'CREATE_TODO';
const DELETE_TODO = 'DELETE_TODO';

const user =(state={},action)=>{
  return state;
}



const todos = (state =[], action) => {
  switch (action.type) {
    case CREATE_TODO:

      return [
        action.payload,
        ...state
      ];
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
};

export const reducer = combineReducers({ todos, user })
