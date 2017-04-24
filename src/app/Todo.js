import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TodoInput } from './TodoInput';
import {connect} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity, ScrollView
} from 'react-native';
import styles from '../style/styles'
//trash icons
const trash = (<Icon name="trash" size={20} color="#900" />);
//add icon
const add = (<Icon name="address" size={20} />);


class _Todo extends Component {
  // static defaultProps = {
  //   todos: []
  // }
  constructor(props) {
    super(props);
    this.count=0;
    this.state = {
      newTodo: ''
    }
  }

  handleChange(text) {
    this.setState({
      newTodo: text
    });
  }

  handlePress() {
    this.props.createTodo(this.state.newTodo);
    this.setState({newTodo: ''});
  }
  deleteTask(task){
    this.props.deleteTodo(task,this.props.todos);
  }


  render() {
    return (
      <View style={styles.mainContainer}>
        <TodoInput
          newTodo={this.state.newTodo}
          handlePress={this.handlePress.bind(this)}
          handleChange={this.handleChange.bind(this)}
        />
        <ScrollView style={styles.listContainer}>
          {

            <View style={{flex: 1, flexDirection: 'column'}}>

              {this.props.todos.map((task)=>{
                return(
                  <View key={this.count++} style={{flex: 1, flexDirection: 'row'}}>
                    <Text  style={styles.listText}>{task}</Text>
                    <TouchableOpacity
                      onPress={
                        ()=>{this.deleteTask(task);}
                      }
                      style={styles.del}>

                      <Text>{trash}</Text>
                    </TouchableOpacity>
                  </View>

                );
              })}
            </View>
          }
        </ScrollView>
      </View>
      );
    }
}
const mapActionsToProps = (dispatch) => ({
  createTodo(todo) {
    dispatch({type: 'CREATE_TODO' , payload: todo})
  },
  deleteTodo(task,todo){
    dispatch({type:'DELETE_TODO',payload:todo,task:task});
  }
});

const mapStateToProps = (state) => ({
  todos: state.todos
})

export const Todo = connect(mapStateToProps, mapActionsToProps)(_Todo);
