import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';

import Login from './js/screens/Login';
import SignUp from './js/screens/SignUp';
import Home from './js/screens/Home/Home';
import Terms from './js/screens/Terms';
import Auth from './js/navigation/Auth';
import BottomTab from './js/navigation/BottomTab';

/*
 TODO: Insert your API key below
 */
const sharedProps = {
  apiKey:"API_KEY_HERE",
}

// Sets the default scene you want for AR and VR
const InitialARScene = require('./js/HelloWorldSceneAR');
const InitialVRScene = require('./js/HelloWorldScene');

const UNSET = "UNSET";
const VR_NAVIGATOR_TYPE = "VR";
const AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
const defaultNavigatorType = UNSET;

/**
 * Create the stack navigator declaration 
 */
const Stack = createStackNavigator();


export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType : defaultNavigatorType,
      sharedProps : sharedProps,
      isLoggedIn: true // verify is there any token in the app
    }
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getVRNavigator = this._getVRNavigator.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    return(
      <NavigationContainer>
        {this.state.isLoggedIn ?(
          <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen
              name="Home"
              component={BottomTab}
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        ) : (
          <>
            <Auth />
          </>
        )}
      </NavigationContainer>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
    );
  }
  
  // Returns the ViroSceneNavigator which will start the VR experience
  _getVRNavigator() {
    return (
      <ViroVRSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialVRScene}} onExitViro={this._exitViro}/>
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType : navigatorType
      })
    }
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType : UNSET
    })
  }
}

module.exports = ViroSample
