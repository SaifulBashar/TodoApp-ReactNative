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
// export default class Todo extends Component {
//     constructor() {
//         super();
//         this.count = 0;//use for list key
//         this.state = {
//             task: [],//saving task in array
//             num: [1, 1, 1],
//             text: ""//input text
//         }
//     }
//     handleChange(event) {
//         let value = event;
//         this.setState({
//             text: value
//         })
//     }
//     handlepress(e) {
//         this.setState({
//             task: [...this.state.task, this.state.text],
//             text: ""
//         })
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                 <TextInput onChangeText={this.handleChange.bind(this)} value={this.state.text}
//                     style={{ height: 20 }} />
//                 <TouchableHighlight onPress={this.handlepress.bind(this)}>
//                     <Text>ADD</Text>
//                 </TouchableHighlight>
//                 {
//                     this.state.task.map(t => { return <Text style={styles.instructions}>{t}</Text> })
//                 }
//
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
//
// });



const Main = ()=> <Todo/>
AppRegistry.registerComponent('Todo', () => Main);
