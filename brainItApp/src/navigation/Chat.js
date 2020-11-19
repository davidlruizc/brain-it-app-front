import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Chat from '../screens/Chat/Chat';
import {primaryColor} from '../colors';

const Stack = createStackNavigator();

const ChatNav = () => (
  <Stack.Navigator
    initialRouteName="Chat"
  >
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={{
        title: "Talk with Watson",
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

export default ChatNav;
