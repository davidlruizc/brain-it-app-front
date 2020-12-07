/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';
import {Text, ImageBackground, StyleSheet, ScrollView} from 'react-native';

import Layout from '../../components/Global/Layout';
import Button from '../../components/Global/Button';
/**
 * Reading seccion.
 * Quiz type for reading practice.
 */
const Lecture = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <Layout>
      <ImageBackground style={styles.image} source={{uri: item.image}} />
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
