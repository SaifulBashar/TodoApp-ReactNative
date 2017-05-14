/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TabBarIOS,
  Text,
  AppRegistry
} from 'react-native';
import {App} from './src/App';
import {Like} from './src/Like.js';
class APP extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedTab : 'blueTab'
    }
  }
  render(){
    return(

      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        unselectedItemTintColor="red"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Blue Tab"
          systemIcon="contacts"
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          <App/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          badgeColor="black"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab'
            });
          }}>
          <Like/>
        </TabBarIOS.Item>
      </TabBarIOS>


    )
  };


}

AppRegistry.registerComponent('newtodo', () => APP);
