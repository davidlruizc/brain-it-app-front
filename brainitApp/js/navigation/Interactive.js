import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Interactive from '../screens/Interactive/Interactive';
import Listening from '../screens/Interactive/Listening';
import { primaryColor } from '../colors';

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
    <Stack.Screen
      name="Listening"
      component={Listening}
      options={{
        title: "Let's Practice",
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
);

export default InteractiveNav;
