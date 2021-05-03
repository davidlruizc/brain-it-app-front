import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Interactive from '../screens/Interactive/Interactive';
import Listening from '../screens/Interactive/Listening';
import ListeningExercise from '../screens/Interactive/ListeningExercise';
import {primaryColor} from '../colors';
import VRExperience from '../screens/Interactive/VREnvironment';

const Stack = createStackNavigator();

/**
 * Navegación sección interactiva
 * ```html
 * <Interactive />
 * <Listening />
 * <ListeningExercise />
 * ```
 */
const InteractiveNav = () => (
  <Stack.Navigator initialRouteName="Interactive">
    <Stack.Screen
      name="Interactive"
      component={Interactive}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="VRScreen"
      component={VRExperience}
      options={{
        title: 'VR experience',
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
    <Stack.Screen
      name="ListeningExercise"
      component={ListeningExercise}
      options={{
        title: 'Exercises',
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
