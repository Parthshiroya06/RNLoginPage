import React, {Component} from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
import {screenOptions} from '@constants';
import * as Screen from '@screen';

let str = [];
export default class TabNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: str.concat(screenOptions),
    };
  }

  _addScreen = () => {
    return this.state.screen.map((screens, index) => (
      <Tab.Screen
        key={index}
        name={screens.name}
        component={Screen[screens.name]}
        options={{
          tabBarLabel: screens.name,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={screens.icon}
              color={color}
              size={26}
            />
          ),
        }}
      />
    ));
  };

  render() {
    return (
      <Tab.Navigator
        initialRouteName="Axios"
        activeColor="#e91e63"
        barStyle={{backgroundColor: '#fff'}}>
        {this._addScreen()}
      </Tab.Navigator>
    );
  }
}
