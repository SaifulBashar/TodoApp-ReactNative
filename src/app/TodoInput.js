import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import styles from '../style/styles';

export const TodoInput = (props) => (
    <View style={styles.inputContainer}>
        <Text style={{ color: "white", fontSize: 50, fontWeight: 'bold' }}>
            Todo APP
        </Text>
        <TextInput value={props.newTodo} onChangeText={props.handleChange} style={styles.input} />
        <TouchableOpacity onPress={props.handlePress} style={styles.add}>
            <Text style={{ color: 'white' }}>ADD NEW TASK</Text>
        </TouchableOpacity>
    </View>
)
