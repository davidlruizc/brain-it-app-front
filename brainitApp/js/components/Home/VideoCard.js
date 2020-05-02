import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {secondaryColor} from '../../colors';

const VideoCard = () => (
  <TouchableOpacity style={styles.wrapper}>
    <View>
      <Image
        source={require('../../../assets/thumbnail.jpg')}
        style={styles.thumbnail}
      />
    </View>
    <View style={styles.textWrapper}>
      <Text style={styles.title}>Welcome to brainit</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.description}>Short description of the video to give an intro for the audience</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 17,
    backgroundColor: secondaryColor,
    borderRadius: 10,
    marginTop: 19
  },
  thumbnail: {
    width: 156,
    height: 86,
    borderRadius: 10
  },
  textWrapper: {
    marginHorizontal: 7
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  },
  description: {
    flex: 1,
    fontSize: 11,
    color: 'white',
    flexWrap: 'wrap'
  }
})

export default VideoCard;
