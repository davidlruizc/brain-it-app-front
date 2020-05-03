import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import {secondaryColor} from '../../colors';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: secondaryColor,
    borderRadius: 20,
    paddingVertical: 17
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default Button;
