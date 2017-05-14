import React , { Component } from 'react';

import {
  Text,
  View
} from 'react-native';

import {
  Card,
  CardSection,
  Input,
  Button

} from './common';
import { connect } from 'react-redux';
import { CREATE_TODO } from '../actionType.js';
class _TodoForm extends Component{

  constructor( props ){

    super( props );
    this.state = {
      newTodo : ''
    }
  }

  _onTextChange(text){
    this.setState({
      newTodo : text
    })
  }

  _onButtonPress(){
    if( this.state.newTodo != '' ){
      this.props.createTodo( this.state.newTodo );
      this.setState({
        newTodo : ''
      })
    }

  }


  render(){

    return(

      <Card>
        <CardSection>
          <Input
            placeholder={ 'Enter Task' }
            onChangeText={ this._onTextChange.bind(this) }
            value = { this.state.newTodo }
          />
        </CardSection>

        <CardSection>
          <Button onPress = { this._onButtonPress.bind(this) }
            propsButtonStyle = { styles.propsButtonStyle }
            propsTextStyle = { styles.propsTextStyle }
            >
            ADD TASK
          </Button>
        </CardSection>
      </Card>


    );
  }
}

const styles = {
  propsTextStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  propsButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#5856D6',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5
  }
};


function mapActionToProps(dispatch){
    return{
      createTodo( todoText ){
        dispatch({ type : CREATE_TODO , payload : todoText })
      }
    }
}

export const TodoForm = connect( null , mapActionToProps )( _TodoForm )
