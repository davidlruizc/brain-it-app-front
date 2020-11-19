import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Terms from '../screens/Terms';

const Stack = createStackNavigator();

const Auth = () => (
  <Stack.Navigator
    initialRouteName="Login"
  >
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="Terms"
      component={Terms}
      options={{
        title: 'Terms & Conditions'
      }}
    />
  </Stack.Navigator>
);

export default Auth;
