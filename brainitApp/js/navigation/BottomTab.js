import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import {primaryColor, secondaryColor} from '../colors';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor={secondaryColor}
      barStyle={{ backgroundColor: primaryColor }}
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" type="materia" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Grammar"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="unread" type="entypo" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Interactive"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="appstore1" type="antdesign" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="chat" type="material" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="face-profile" type="material-community" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
