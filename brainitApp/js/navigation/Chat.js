import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Chat from '../screens/Chat/Chat';

const Stack = createStackNavigator();

const ChatNav = () => (
  <Stack.Navigator
    initialRouteName="Chat"
  >
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
);

export default ChatNav;
