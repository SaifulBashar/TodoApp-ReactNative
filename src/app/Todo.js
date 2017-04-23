import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,ScrollView
} from 'react-native';
import Button from 'react-native-button';
import styles from '../style/styles'


export default class Todo extends Component {
    constructor(){
        super();
        this.count=0;
        this.state={
            todo:[],
            text:''
        }
        this.handlePress= this.handlePress.bind(this);
        this.handleChange= this.handleChange.bind(this);


    }

    handlePress(){
        if(this.state.text === ''){
            return;
        }
        this.setState({
            todo:[...this.state.todo,this.state.text],
            text:''
        });
    }
    handleChange(text){
        this.setState({
            text
        });

    }
    deleteTask(task){
        let deleteTask = this.state.todo.filter(t=> {
          if(t === task){
            return false;
          }
          return true;
        });
        this.setState({
          todo:[...deleteTask]
      });
    }


    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <Text>Todo APP</Text>
                    <TextInput value={this.state.text} onChangeText={this.handleChange} style={styles.input}/>
                    <TouchableOpacity onPress={this.handlePress} style={styles.add}>
                        <Text>ADD</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.listContainer}>
                    {

                        <View style={{flex: 1, flexDirection: 'column'}}>

                            {this.state.todo.map((task)=>{
                                return(
                                    <View key={this.count++} style={{flex: 1, flexDirection: 'row'}}>
                                        <Text  style={styles.listText}>{task}</Text>
                                        <TouchableOpacity
                                            onPress={
                                                ()=>{this.deleteTask(task);}
                                            }
                                            style={styles.del}>

                                            <Text>DEL</Text>
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
