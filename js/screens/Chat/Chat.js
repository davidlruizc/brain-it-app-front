import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Message from '../../components/Chat/Message';
import MsgBar from '../../components/Chat/MsgBar';

const msg = [
  {
    key: "-M82KYYF0vTCVO9acmEx",
    sender: "-M82I4ySsw4Uh8ZsCC-t",
    text: `Hi, I'm Watson, nice to see you here 😁`,
    timeStamp: 1590266982662
  },
  {
    key: "-M82I8vzh6FzgMe9azTu",
    sender: "-M827jNV8nOyHBNMB3LA",
    text: "Hello, Watson.",
    timeStamp: 1590266994748,
  }
];

const Chat = () => {
  const [messages, setMessages] = useState(msg);

  return(
    <View style={styles.container} >
      <FlatList
        style={styles.msg}
        data={messages}
        renderItem={({item}) => (
          <Message
            text={item.text}
            sender={item.sender}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <MsgBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  msg: {
    flexGrow: 1
  }
});

export default Chat;
