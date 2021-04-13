import React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

// const image = require('../../../assets/grammar-one.jpg');

const Card = ({title, image, handleNavigateToText, uri}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => handleNavigateToText()}>
    <ImageBackground
      source={uri ? {uri: image} : image}
      style={styles.image}
      imageStyle={{borderRadius: 10, backgroundColor: 'rgba(0,0,0,.6)'}}>
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 19,
  },
  image: {
    width: 344,
    height: 154,
    justifyContent: 'flex-end',
    padding: 19,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
});

export default Card;
