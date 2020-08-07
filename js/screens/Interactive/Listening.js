/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Layout from '../../components/Global/Layout';
import Card from '../../components/Interactive/ActivityCard';
import { activities } from './resource';

const Listening = ({ navigation }) => {
  // navigate to Listening Exercise View
  const navigateToExercise = () => {
    navigation.navigate('ListeningExercise');
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Activity List</Text>
        <Text style={styles.subTitle}>Practice your skills</Text>
        {activities.map((item) => (
          <Card onPress={navigateToExercise} title={item.topic} questions={item.questions_count} />
        ))}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15,
  },
});

export default Listening;
