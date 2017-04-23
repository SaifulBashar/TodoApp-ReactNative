import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import Todo from "./src/app/Todo";

const Main = ()=> <Todo/>
AppRegistry.registerComponent('Todo', () => Main);
