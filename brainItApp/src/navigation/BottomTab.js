import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Icon} from 'react-native-elements';

import HomeNav from './Home';
import GrammarNav from './Grammar';
import InteractiveNav from './Interactive';
//import ChatNav from './Chat';
import ProfileNav from './Profile';
import {primaryColor, secondaryColor} from '../colors';

const Tab = createMaterialBottomTabNavigator();

/**
 * Main App navigation
 * Here you can find all the main tabs available in the app using a React Navigation `Bottom Tab navigator`.
 */
const BottomTab = () => {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor={secondaryColor}
      barStyle={{backgroundColor: primaryColor}}
      shifting={true}
      sceneAnimationEnabled={false}>
      <Tab.Screen
        name="HomeNav"
        component={HomeNav}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="home" type="materia" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="GrammarNav"
        component={GrammarNav}
        options={{
          tabBarLabel: 'Grammar',
          tabBarIcon: ({color}) => (
            <Icon name="unread" type="entypo" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="InteractiveNav"
        component={InteractiveNav}
        options={{
          tabBarLabel: 'Interactive',
          tabBarIcon: ({color}) => (
            <Icon name="appstore1" type="antdesign" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="ChatNav"
        component={ChatNav}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <Icon name="chat" type="material" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="ProfileNav"
        component={ProfileNav}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon
              name="face-profile"
              type="material-community"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
