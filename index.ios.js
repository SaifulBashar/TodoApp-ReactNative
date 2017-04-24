import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import {Todo} from "./src/app/Todo";

const Main = ()=> (<Provider store={store}><Todo/></Provider>)
AppRegistry.registerComponent('Todo', () => Main);
