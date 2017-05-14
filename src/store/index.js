import {createStore} from 'redux';
import {reducers} from '../reducers';

export const todo = createStore(reducers);
