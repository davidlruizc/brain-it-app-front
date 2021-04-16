/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';
import {Text, ImageBackground, StyleSheet, ScrollView} from 'react-native';

import Layout from '../../components/Global/Layout';
import Button from '../../components/Global/Button';

const imageOne = require('../../../assets/grammar-one.jpg');
const imageTwo = require('../../../assets/grammar-two.jpg');
const imageThree = require('../../../assets/grammar-three.jpg');

/**
 * Reading seccion.
 * Quiz type for reading practice.
 */
const Lecture = ({navigation, route}) => {
  const {item} = route.params;

  const imageSelected = React.useMemo(() => {
    const image = item.image;
    if (image === 'grammar-one') {
      return imageOne;
    } else if (image === 'grammar-two') {
      return imageTwo;
    } else {
      return imageThree;
    }
  }, [item]);

  return (
    <Layout>
      <ImageBackground style={styles.image} source={imageSelected} />
      <ScrollView style={styles.wrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        <Button
          title="Answer the following questions"
          onPress={() => navigation.navigate('LectureQuiz', {item})}
        />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 254,
  },
  wrapper: {
    paddingVertical: 29,
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
});

export default Lecture;
