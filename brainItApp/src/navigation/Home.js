import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/Home';
import VideoPlayer from '../screens/Home/VideoPlayer';

const Stack = createStackNavigator();

const HomeNav = () => (
  <Stack.Navigator initialRouteName="Feed">
    <Stack.Screen
      name="Feed"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="VideoPlayer"
      component={VideoPlayer}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default HomeNav;
