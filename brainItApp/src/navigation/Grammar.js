import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Grammar from '../screens/Grammar/Grammar';
import Lecture from '../screens/Grammar/Lecture';
import LectureQuiz from '../screens/Grammar/LectureQuiz';
import {primaryColor} from '../colors';

const Stack = createStackNavigator();

const GrammarNav = () => (
  <Stack.Navigator initialRouteName="Grammar">
    <Stack.Screen
      name="Grammar"
      component={Grammar}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Lecture"
      component={Lecture}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="LectureQuiz"
      component={LectureQuiz}
      options={{
        title: 'Quiz about the text',
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

export default GrammarNav;
