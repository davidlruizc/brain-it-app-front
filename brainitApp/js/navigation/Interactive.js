import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Interactive from '../screens/Interactive/Interactive';

const Stack = createStackNavigator();

const InteractiveNav = () => (
  <Stack.Navigator
    initialRouteName="Interactive"
  >
    <Stack.Screen
      name="Interactive"
      component={Interactive}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
);

export default InteractiveNav;
