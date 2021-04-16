import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const imageOne = require('../../../assets/grammar-one.jpg');
const imageTwo = require('../../../assets/grammar-two.jpg');
const imageThree = require('../../../assets/grammar-three.jpg');

const Card = ({title, image, text, textTitle, quiz, handleNavigateToText}) => {
  const imageSelected = React.useMemo(() => {
    if (image === 'grammar-one') {
      return imageOne;
    } else if (image === 'grammar-two') {
      return imageTwo;
    } else {
      return imageThree;
    }
  }, [image]);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigateToText(textTitle, image, text, quiz)}>
      <ImageBackground
        source={imageSelected}
        style={styles.image}
        imageStyle={{borderRadius: 10, backgroundColor: 'rgba(0,0,0,.6)'}}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

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
