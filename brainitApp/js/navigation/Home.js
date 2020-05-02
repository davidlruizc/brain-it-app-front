import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';

const Stack = createStackNavigator();

const HomeNav = () => (
  <Stack.Navigator
    initialRouteName="Feed"
  >
    <Stack.Screen
      name="Feed"
      component={Home}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
);

export default HomeNav;
