/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
    handlePressDel(){
        console.warn("jjjj");
    }
    handlePress(){
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
    delt(task){
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
                                                ()=>{
                                                    this.delt(task);
                                                }
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

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        borderColor: 'black',
        borderWidth : 2,
        backgroundColor: 'white'
    },
    inputContainer: {
        borderColor: 'black',
        borderWidth : 2,
        padding:50,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    listContainer: {
        borderColor: 'black',
        borderWidth : 2,
        padding:20,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'white'
    },
    input:{
        borderColor: 'black',
        borderWidth : 2,
        height:40,
        padding:10,
        borderRadius:5
    },
    add:{

        marginTop:2,
        borderColor: 'black',
        borderWidth : 2,
        height:40,
        padding:10,
        borderRadius:5
    },
    listText:{
        flex:1,
        marginTop:2,
        borderColor: 'black',
        borderWidth : 2,
        height:40,
        padding:10,
        borderRadius:5
    },
    del:{

        marginTop:2,
        borderColor: 'black',
        borderWidth : 2,
        height:40,
        padding:10,
        borderRadius:5
    }
});
