/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home/Home';
import Terms from './src/screens/Terms';
import Auth from './src/navigation/Auth';
import BottomTab from './src/navigation/BottomTab';
import VREnvironment from './src/screens/Interactive/VREnvironment';
import SimplePastGrammar from './src/screens/Grammar/SimplePastGrammar';
import PasContinuousGrammar from './src/screens/Grammar/PastContinuousGrammar';
import PastPerfectGrammar from './src/screens/Grammar/PastPerfectGrammar';
import {primaryColor} from './src/colors';

/**
 * Create the stack navigator declaration
 */
const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="VR"
            component={VREnvironment}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Simple past"
            component={SimplePastGrammar}
            options={{
              title: 'Grammar Structure',
              headerStyle: {
                backgroundColor: primaryColor,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Past continuous"
            component={PasContinuousGrammar}
            options={{
              title: 'Grammar Structure',
              headerStyle: {
                backgroundColor: primaryColor,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Past perfect"
            component={PastPerfectGrammar}
            options={{
              title: 'Grammar Structure',
              headerStyle: {
                backgroundColor: primaryColor,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
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
};

export default App;
