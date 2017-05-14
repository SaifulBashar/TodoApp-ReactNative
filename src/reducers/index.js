import { combineReducers } from 'redux';
import {addTaskReducers} from './addTaskReducer.js'

export const reducers = combineReducers( {
  addTask : addTaskReducers
})
