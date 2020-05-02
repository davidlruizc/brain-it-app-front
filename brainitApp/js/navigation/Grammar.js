import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Grammar from '../screens/Grammar/Grammar';

const Stack = createStackNavigator();

const GrammarNav = () => (
  <Stack.Navigator
    initialRouteName="Grammar"
  >
    <Stack.Screen
      name="Grammar"
      component={Grammar}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
);

export default GrammarNav;
