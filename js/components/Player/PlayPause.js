/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import Sound from 'react-native-sound';

import { secondaryColor } from '../../colors';

const PlayPause = ({ audioClip }) => {
  const [toggle, setToggle] = useState(false);

  const toggleIcon = () => {
    const track = new Sound(audioClip, null, (e) => {
      if (e) {
        Alert.alert('error loading track:', e);
      } else {
        track.play();
        setToggle(true);
        setTimeout(() => {
          setToggle(null);
        }, track.getDuration() * 1000);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleIcon} disabled={toggle}>
        {toggle ? (
          <Icon name="stop" type="font-awesome" color="white" size={26} />
        ) : (
          <Icon name="play" type="font-awesome" color="white" size={26} />
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
    paddingHorizontal: 22,
  },
});

export default PlayPause;
