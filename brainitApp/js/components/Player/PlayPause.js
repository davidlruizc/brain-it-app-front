import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { secondaryColor } from '../../colors';

const PlayPause = () => {
  const [toggle, setToggle] = useState(false);

  const toggleIcon = () => {
    setToggle(!toggle);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleIcon}>
        {toggle ? (
          <Icon
            name="stop"
            type="font-awesome"
            color="white"
            size={26}
          />
        ) : (
          <Icon
            name="play"
            type="font-awesome"
            color="white"
            size={26}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 100,
    backgroundColor: secondaryColor,
    paddingVertical: 20,
    paddingHorizontal: 22
  }
});

export default PlayPause;
