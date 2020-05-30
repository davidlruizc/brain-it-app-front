import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {colors, secondaryColor} from '../../colors';

const MsgBar = () => {
  const [text, setText] = useState('');

  return (
    <View style={[style.container]}>
        <TextInput
          style={style.textInput}
          underlineColorAndroid={'transparent'}
          onChangeText={text => setText({ text: text })}
          value={text}
          placeholder={'Type here..'}
        />
        <TouchableOpacity style={style.sendIcon} onPress={() => console.log('event')}>
          <Icon name={'send'} color={colors.white} size={20} />
        </TouchableOpacity>
      </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 100,
    elevation: 2,
    backgroundColor: colors.white,
    margin: 8
  },
  textInput: {
    flexGrow: 1,
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16
  },
  sendIcon: {
    margin: 4,
    borderRadius: 100,
    backgroundColor: secondaryColor,
    padding: 8
  }
});

export default MsgBar;
