import React , { Component } from 'react';

import {

  Text,
  View

} from 'react-native';

import {

  Header,
  Card

} from './component/common';

import { TodoForm } from './component/TodoForm.js';
import { Provider } from 'react-redux';
import { todo } from './store';
import { TodoList} from './component/TodoList.js';

export class App extends Component{

  render(){

    return(

      <Provider store = { todo }>

        <View style={{ flex:1 }}>

          <Header headerText = { 'TODO APP '}/>

          <TodoForm/>

            <View style={{flex:1}}>
              <TodoList/>
            </View>


        </View>


      </Provider>

    );
  }
}
