import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator();

const ProfileNav = () => (
  <Stack.Navigator
    initialRouteName="Profile"
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
);

export default ProfileNav;
