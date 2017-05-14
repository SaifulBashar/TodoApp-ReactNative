import React , { Component } from 'react';

import uuidV4 from 'uuid/v4';

import {
  Text,
  View,
  ScrollView,ListView,
  LayoutAnimation
} from 'react-native';

import {
  Card,
  CardSection,
  Input,
  Button

} from './common';

import { connect } from 'react-redux';

import { CREATE_TODO } from '../actionType.js';
import { DELETE_TODO } from '../actionType.js';

import Icon from 'react-native-vector-icons/FontAwesome';
const trash = (<Icon name="trash" size={20} color="#900" />);

class _TodoList extends Component{

  constructor( props ){

    super( props );
    LayoutAnimation.spring();

  }

  _onPressDelete(task){
    this.props.deleteTodo(task,this.props.todo);
  }

  render(){

    return(

        <ScrollView>

          {
            this.props.todo.map( (task)=>{
              return(
                <Card key = { uuidV4() } style = {{ flex : 1 , flexDirection : 'column' }}>
                  <CardSection>
                    <Text  style = {{flex:1 , fontSize : 20}}>
                      {task}
                    </Text>
                  </CardSection>
                  <CardSection >
                    <Button
                      propsTextStyle={styles.propsTextStyle}
                      propsButtonStyle = {styles.propsButtonStyle}
                      onPress = { () => this._onPressDelete(task) }
                      >
                      {trash}
                    </Button>
                  </CardSection>
                </Card>


              );

            } )
          }

        </ScrollView>


    );
  }
}
function mapStateToProps(state) {

  return{
    todo : state.addTask
  }
}

function mapActionToProps(dispatch) {

  return{
    deleteTodo(todoText,todo){
      dispatch({
        type : DELETE_TODO ,
        payload : todo ,
        task : todoText
      })
    }
  }
}

const styles = {
  propsTextStyle: {
    alignSelf: 'center',
    color: '#FF5E3A',
    paddingTop: 5,
    paddingBottom: 5
  },
  propsButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF5E3A',
    marginLeft: 5,
    marginRight: 5
  }
};

export const TodoList = connect(mapStateToProps, mapActionToProps)(_TodoList)
